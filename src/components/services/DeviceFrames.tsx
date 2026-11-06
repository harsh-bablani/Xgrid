import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type FrameProps = {
  title: string;
  urlLabel?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** When set, children are laid out at this width and scaled to fit the phone screen. */
  designWidth?: number;
  /** Opens the 3D device stage. When set, the frame acts as a clickable preview. */
  onExpand?: () => void;
  expandHint?: string;
};

/** Clean browser chrome — preview click opens the 3D laptop. */
export function BrowserFrame({
  title,
  urlLabel = 'preview',
  className = '',
  style,
  children,
  onExpand,
  expandHint = 'Click to open 3D laptop',
}: FrameProps) {
  const clickable = Boolean(onExpand);

  return (
    <div
      className={`group/frame relative w-full max-w-[640px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${
        clickable ? 'cursor-pointer' : ''
      } ${className}`}
      style={style}
      aria-label={title}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onExpand}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onExpand?.();
              }
            }
          : undefined
      }
    >
      <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F3F4F6] px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px] text-slate-500 ring-1 ring-slate-200/80">
          {urlLabel}
        </div>
      </div>
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-slate-100 ${
          clickable ? 'pointer-events-none' : '[&_*]:pointer-events-auto'
        }`}
      >
        {children}
      </div>
      {clickable ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent px-3 pb-3 pt-10 opacity-100 transition-opacity sm:opacity-0 sm:group-hover/frame:opacity-100">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-slate-800 shadow">
            {expandHint}
          </span>
        </div>
      ) : null}
    </div>
  );
}

/** Phone chrome — preview click opens the 3D phone. */
export function PhoneFrame({
  title,
  className = '',
  style,
  children,
  designWidth,
  onExpand,
  expandHint = 'Click to open 3D phone',
}: FrameProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(designWidth ? 0.55 : 1);
  const clickable = Boolean(onExpand);

  useEffect(() => {
    if (!designWidth) return;
    const el = screenRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  const designHeight = designWidth ? designWidth * (19.5 / 9) : undefined;

  return (
    <div
      className={`group/frame relative w-[min(100%,250px)] ${clickable ? 'cursor-pointer' : ''} ${className}`}
      style={style}
      aria-label={title}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={(e) => {
        if (!onExpand) return;
        e.stopPropagation();
        onExpand();
      }}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                onExpand?.();
              }
            }
          : undefined
      }
    >
      <div className="rounded-[2rem] border border-slate-300 bg-[#0f172a] p-[9px] shadow-[0_22px_44px_rgba(15,23,42,0.22)]">
        <div
          ref={screenRef}
          className="relative overflow-hidden rounded-[1.45rem] bg-[#F7F9FC] aspect-[9/19.5]"
        >
          <div className="pointer-events-none absolute left-1/2 top-1.5 z-20 h-3.5 w-[72px] -translate-x-1/2 rounded-full bg-black/80" />
          <div className={clickable ? 'pointer-events-none' : ''}>
            {designWidth && designHeight ? (
              <div
                className="absolute left-0 top-0 origin-top-left touch-pan-y"
                style={{
                  width: designWidth,
                  height: designHeight,
                  transform: `scale(${scale})`,
                }}
              >
                {children}
              </div>
            ) : (
              <div className="absolute inset-0 touch-pan-y">{children}</div>
            )}
          </div>
        </div>
      </div>
      {clickable ? (
        <div className="pointer-events-none absolute inset-x-2 bottom-3 z-10 flex justify-center opacity-100 transition-opacity sm:opacity-0 sm:group-hover/frame:opacity-100">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-slate-800 shadow">
            {expandHint}
          </span>
        </div>
      ) : null}
    </div>
  );
}
