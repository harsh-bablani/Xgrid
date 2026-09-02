import { prisma } from './prisma.js';

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export async function pruneExpiredSessions() {
  const cutoff = new Date(Date.now() - SESSION_TTL_MS);
  await prisma.adminSession.deleteMany({
    where: { createdAt: { lt: cutoff } },
  });
}

/** @param {{ id: string, email: string, name: string }} user */
export async function createSession(token, user) {
  await prisma.adminSession.create({
    data: {
      token,
      userId: user.id,
      userEmail: user.email,
      userName: user.name,
    },
  });
}

export async function deleteSession(token) {
  await prisma.adminSession.deleteMany({ where: { token } });
}

export async function getSession(token) {
  if (!token) return null;
  await pruneExpiredSessions();
  const session = await prisma.adminSession.findUnique({ where: { token } });
  if (!session) return null;
  if (Date.now() - session.createdAt.getTime() >= SESSION_TTL_MS) {
    await deleteSession(token);
    return null;
  }
  return {
    user: {
      id: session.userId,
      email: session.userEmail,
      name: session.userName,
    },
    createdAt: session.createdAt.getTime(),
  };
}
