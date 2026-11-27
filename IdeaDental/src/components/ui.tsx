import { Fragment, type ComponentProps, type ReactNode } from "react";
import { ArrowUpRight, Chevron } from "./icons";

type Common = { children: ReactNode; className?: string };
type AsButton = Common & Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };
type AsLink = Common & Omit<ComponentProps<"a">, "className" | "children"> & { href: string };

/** Renders an <a> when given `href`, otherwise a <button>. */
function Base(props: AsButton | AsLink) {
  if (props.href !== undefined) {
    const { children, className, ...rest } = props as AsLink;
    return (
      <a data-hover-scale className={className} {...rest}>
        {children}
      </a>
    );
  }
  const { children, className, ...rest } = props as AsButton;
  return (
    <button data-hover-scale className={className} {...rest}>
      {children}
    </button>
  );
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/** Solid accent pill — the appointment CTA everywhere. */
export function PrimaryButton({ className = "", ...rest }: AsButton | AsLink) {
  return (
    <Base
      {...(rest as AsLink)}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-primary-hover ${focus} ${className}`}
    />
  );
}

/** Pill with a trailing arrow bubble. `solid` = accent fill, otherwise outlined with an accent bubble. */
export function ArrowPill({ solid = false, className = "", children, ...rest }: (AsButton | AsLink) & { solid?: boolean }) {
  return (
    <Base
      {...(rest as AsLink)}
      className={`group inline-flex items-center gap-4 rounded-full py-1 pl-6 pr-1 text-[15px] font-medium transition-colors ${focus} ${
        solid ? "bg-primary text-white hover:bg-primary-hover" : "border border-ink/70 text-ink hover:border-primary"
      } ${className}`}
    >
      {children}
      <span className={`grid size-10 place-items-center rounded-full ${solid ? "bg-white text-primary" : "bg-primary text-white"}`}>
        <ArrowUpRight className="size-[18px]" />
      </span>
    </Base>
  );
}

/** Round navigation arrow; `active` = filled accent. */
export function NavArrow({
  dir,
  active,
  className = "",
  ...rest
}: ComponentProps<"button"> & { dir: "left" | "right"; active: boolean }) {
  return (
    <button
      data-hover-scale
      aria-label={dir === "left" ? "Previous" : "Next"}
      className={`grid size-12 place-items-center rounded-full border transition-colors ${focus} ${
        active ? "border-primary bg-primary text-white" : "border-line bg-white text-ink/60 hover:text-primary"
      } ${className}`}
      {...rest}
    >
      <Chevron dir={dir} className="size-5" />
    </button>
  );
}

/** Section label: small caps in muted grey, led by a short dash in the logo red. */
export function Eyebrow({ children, className = "", ...rest }: ComponentProps<"p">) {
  return (
    <p className={`flex items-center gap-2.5 text-[12px] uppercase tracking-[0.14em] text-muted ${className}`} {...rest}>
      <span aria-hidden className="h-px w-6 shrink-0 bg-accent" />
      <span>{children}</span>
    </p>
  );
}

/** Section heading in the display face, StayGo scale. */
export function Heading({ children, className = "", ...rest }: ComponentProps<"h2">) {
  return (
    <h2
      className={`font-display text-[clamp(34px,3.9vw,60px)] font-semibold leading-[1.08] tracking-[-0.035em] ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
}

/**
 * Sets a "+" that follows a digit ("$5,500+") raised and small, the way a degree sign sits,
 * as Dr. Vu asked for the braces price. Text without such a plus comes back unchanged.
 */
export function raisePlus(text: string): ReactNode {
  const re = /\d\+/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    out.push(
      <Fragment key={m.index}>
        {text.slice(last, m.index + 1)}
        <sup className="relative -top-[0.4em] ml-px align-baseline text-[0.68em] leading-none">+</sup>
      </Fragment>,
    );
    last = m.index + 2;
  }
  if (out.length === 0) return text;
  out.push(text.slice(last));
  return out;
}
