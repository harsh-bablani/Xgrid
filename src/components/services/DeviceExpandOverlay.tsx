import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';

type Mode = 'laptop' | 'phone';

type Props = {
  open: boolean;
  mode: Mode;
  title: string;
  urlLabel?: string;
  onClose: () => void;
  children: ReactNode;
  /** Native layout width for phone content before scaling into the bezel. */
  phoneDesignWidth?: number;
};

/** Full-screen 3D laptop / phone stage — scroll and interact inside the device. */
export default function DeviceExpandOverlay({
  open,
  mode,
  title,
  urlLabel = 'preview',
  onClose,
  children,
  phoneDesignWidth = 390,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !rootRef.current || !deviceRef.current) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { opacity: 0 },
        { opacity: 1, duration: reduce ? 0.01 : 0.28, ease: 'power2.out' },
      );
      gsap.fromTo(
        deviceRef.current,
        {
          opacity: 0,
          scale: 0.72,
          rotateX: mode === 'laptop' ? 28 : 18,
          rotateY: mode === 'laptop' ? -28 : 24,
          z: -120,
        },
        {
          opacity: 1,
          scale: 1,
          rotateX: mode === 'laptop' ? 10 : 6,
          rotateY: mode === 'laptop' ? -14 : -16,
          z: 0,
          duration: reduce ? 0.01 : 0.7,
          ease: 'power3.out',
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, [open, mode]);

  useEffect(() => {
    if (!open || !stageRef.current || !deviceRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const stage = stageRef.current;
    const device = deviceRef.current;
    const baseX = mode === 'laptop' ? 10 : 6;
    const baseY = mode === 'laptop' ? -14 : -16;

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(device, {
        rotateX: baseX + ny * -8,
        rotateY: baseY + nx * 12,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(device, {
        rotateX: baseX,
        rotateY: baseY,
        duration: 0.55,
        ease: 'power2.out',
      });
    };

    stage.addEventListener('mousemove', onMove);
    stage.addEventListener('mouseleave', onLeave);
    return () => {
      stage.removeEventListener('mousemove', onMove);
      stage.removeEventListener('mouseleave', onLeave);
    };
  }, [open, mode]);

  if (!open) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[90] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        aria-label="Close device preview"
        className="absolute inset-0 bg-[#061018]/78 backdrop-blur-[6px]"
        onClick={onClose}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="pointer-events-auto rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
          {mode === 'laptop' ? '3D laptop' : '3D phone'} · scroll inside
        </div>
        <button
          type="button"
          onClick={onClose}
          className="pointer-events-auto inline-flex min-h-[40px] items-center justify-center rounded-full border border-white/20 bg-white px-4 text-[13px] font-semibold text-slate-900 hover:bg-slate-100"
        >
          Close
        </button>
      </div>

      <div
        ref={stageRef}
        className="relative z-10 flex flex-1 items-center justify-center px-3 pb-8 pt-16 sm:px-6"
        style={{ perspective: '1600px', perspectiveOrigin: '50% 45%' }}
      >
        <div
          ref={deviceRef}
          className="will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
          onClick={(e) => e.stopPropagation()}
        >
          {mode === 'laptop' ? (
            <Laptop3D urlLabel={urlLabel}>{children}</Laptop3D>
          ) : (
            <Phone3D designWidth={phoneDesignWidth}>{children}</Phone3D>
          )}
        </div>
      </div>
    </div>
  );
}

function Laptop3D({ urlLabel, children }: { urlLabel: string; children: ReactNode }) {
  return (
    <div className="relative w-[min(92vw,920px)]" style={{ transformStyle: 'preserve-3d' }}>
      {/* Screen lid */}
      <div
        className="relative overflow-hidden rounded-t-[18px] border border-slate-600/80 bg-[#1a1f27] p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.45)] sm:p-3"
        style={{ transform: 'translateZ(18px)' }}
      >
        <div className="mb-2 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-500/80" />
        </div>
        <div className="overflow-hidden rounded-[10px] bg-white shadow-inner">
          <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F3F4F6] px-3 py-2">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="min-w-0 flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px] text-slate-500 ring-1 ring-slate-200/80">
              {urlLabel}
            </div>
          </div>
          <div className="h-[min(58vh,520px)] overflow-y-auto overscroll-contain bg-slate-50">
            <div className="min-h-full">{children}</div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="h-2 bg-gradient-to-b from-slate-500 to-slate-700"
        style={{ transform: 'translateZ(8px)' }}
      />

      {/* Base */}
      <div
        className="relative rounded-b-[16px] border border-slate-500/60 bg-gradient-to-b from-[#c5c9d0] via-[#aeb3bb] to-[#989da6] px-6 pb-4 pt-3 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
        style={{
          transform: 'rotateX(68deg) translateZ(-6px)',
          transformOrigin: 'top center',
        }}
      >
        <div className="mx-auto h-1.5 w-[18%] rounded-full bg-slate-500/50" />
        <div className="mx-auto mt-3 h-10 w-[42%] rounded-[10px] border border-slate-500/25 bg-slate-400/25" />
      </div>

      {/* Desk shadow */}
      <div className="pointer-events-none absolute -bottom-8 left-[8%] right-[8%] h-10 rounded-[100%] bg-black/35 blur-2xl" />
    </div>
  );
}

function Phone3D({
  children,
  designWidth,
}: {
  children: ReactNode;
  designWidth: number;
}) {
  const screenRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const apply = () => {
      const scale = el.clientWidth / designWidth;
      inner.style.transform = `scale(${scale})`;
      inner.style.height = `${el.clientHeight / scale}px`;
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div className="relative w-[min(78vw,340px)]" style={{ transformStyle: 'preserve-3d' }}>
      <div
        className="rounded-[2.4rem] border border-slate-500/70 bg-[#0b1220] p-[11px] shadow-[0_40px_90px_rgba(0,0,0,0.5)]"
        style={{ transform: 'translateZ(24px)' }}
      >
        <div
          ref={screenRef}
          className="relative overflow-hidden rounded-[1.85rem] bg-[#F7F9FC] aspect-[9/19.2]"
        >
          <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-4 w-[88px] -translate-x-1/2 rounded-full bg-black/85" />
          <div
            ref={innerRef}
            className="absolute left-0 top-0 origin-top-left touch-pan-y"
            style={{ width: designWidth }}
          >
            {children}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-6 left-[12%] right-[12%] h-8 rounded-[100%] bg-black/40 blur-2xl" />
    </div>
  );
}
