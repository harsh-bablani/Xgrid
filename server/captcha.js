import crypto from 'crypto';

const CAPTCHA_TTL_MS = 5 * 60 * 1000;
const challenges = new Map();

function cleanupExpired() {
  const now = Date.now();
  for (const [id, entry] of challenges.entries()) {
    if (entry.expiresAt <= now) challenges.delete(id);
  }
}

function randomInt(min, max) {
  return min + crypto.randomInt(max - min + 1);
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildCaptchaSvg(question) {
  const noise = Array.from({ length: 6 }, () => {
    const x1 = randomInt(0, 220);
    const y1 = randomInt(0, 64);
    const x2 = randomInt(0, 220);
    const y2 = randomInt(0, 64);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#cbd5e1" stroke-width="1"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="64" viewBox="0 0 220 64" role="img" aria-label="Captcha">
  <rect width="220" height="64" rx="10" fill="#f8fafc"/>
  <rect x="1" y="1" width="218" height="62" rx="9" fill="none" stroke="#e2e8f0"/>
  ${noise}
  <text x="110" y="40" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#0f172a" letter-spacing="1">${escapeXml(question)}</text>
</svg>`;
}

export function createCaptchaChallenge() {
  cleanupExpired();

  const a = randomInt(2, 12);
  const b = randomInt(1, 9);
  const useMinus = a > b && crypto.randomInt(2) === 1;
  const question = useMinus ? `${a} − ${b} = ?` : `${a} + ${b} = ?`;
  const answer = String(useMinus ? a - b : a + b);

  const id = crypto.randomUUID();
  const answerHash = crypto.createHash('sha256').update(answer).digest('hex');

  challenges.set(id, {
    answerHash,
    expiresAt: Date.now() + CAPTCHA_TTL_MS,
  });

  const svg = buildCaptchaSvg(question);
  const image = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

  return { captchaId: id, image, question };
}

export function verifyCaptchaChallenge(captchaId, captchaAnswer) {
  cleanupExpired();

  const id = String(captchaId || '').trim();
  const answer = String(captchaAnswer || '').trim();

  if (!id || !answer) {
    return { ok: false, error: 'Captcha is required.' };
  }

  const entry = challenges.get(id);
  challenges.delete(id);

  if (!entry) {
    return { ok: false, error: 'Captcha expired. Refresh and try again.' };
  }

  if (entry.expiresAt <= Date.now()) {
    return { ok: false, error: 'Captcha expired. Refresh and try again.' };
  }

  const answerHash = crypto.createHash('sha256').update(answer).digest('hex');
  if (answerHash !== entry.answerHash) {
    return { ok: false, error: 'Incorrect captcha. Try again.' };
  }

  return { ok: true };
}
