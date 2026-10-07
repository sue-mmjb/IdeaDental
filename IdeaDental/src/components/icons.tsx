type IconProps = { className?: string };

export function ArrowUpRight({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Chevron({ className = "size-4", dir = "right" }: IconProps & { dir?: "left" | "right" | "down" }) {
  const d = { left: "M15 6l-6 6 6 6", right: "M9 6l6 6-6 6", down: "M6 9l6 6 6-6" }[dir];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function Star({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8L12 2.8Z" />
    </svg>
  );
}

export function Heart({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M12 20s-7.5-4.6-9.2-9.3C1.6 7.4 3.8 4 7.2 4c2 0 3.4 1.1 4.8 2.9C13.4 5.1 14.8 4 16.8 4c3.4 0 5.6 3.4 4.4 6.7C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function Quote({ className = "size-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" fill="currentColor" className={className} aria-hidden>
      <path d="M10 48c-5.5 0-10-4.5-10-10V26C0 13 6 3.5 18 0l2.6 5C14 7.8 11 12.6 10.6 20H18a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-8Zm36 0c-5.5 0-10-4.5-10-10V26c0-13 6-22.5 18-26l2.6 5C50 7.8 47 12.6 46.6 20H54a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-8Z" />
    </svg>
  );
}

export function Phone({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M5 4h3.5l1.7 4.3-2.2 1.5a11 11 0 0 0 6.2 6.2l1.5-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Clock({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" />
    </svg>
  );
}

export function Menu({ className = "size-5", open = false }: IconProps & { open?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
      ) : (
        <path d="M4 8h16M4 16h16" strokeLinecap="round" />
      )}
    </svg>
  );
}
