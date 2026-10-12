import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-slate-200 bg-slate-50/70 print:border-0 print:bg-white">
      <Container className="py-10 sm:py-14 print:py-2">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-wide text-indigo-700 uppercase">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">{description}</p>}
        {children}
      </Container>
    </header>
  );
}

export function SectionHeading({
  id,
  title,
  description,
  as: Tag = "h2",
}: {
  id?: string;
  title: string;
  description?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="mb-6">
      <Tag id={id} className="scroll-mt-24 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </Tag>
      {description && <p className="mt-2 max-w-3xl text-slate-600">{description}</p>}
    </div>
  );
}

export function Badge({ children, tone = "slate" }: { children: ReactNode; tone?: "slate" | "indigo" }) {
  const tones = {
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    indigo: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  };
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}>
      {children}
    </span>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

export const buttonStyles = {
  primary: `${buttonBase} bg-indigo-600 text-white shadow-sm hover:bg-indigo-700`,
  secondary: `${buttonBase} bg-white text-slate-800 ring-1 ring-inset ring-slate-300 hover:bg-slate-50`,
  ghost: `${buttonBase} text-slate-700 hover:bg-slate-100`,
  light: `${buttonBase} bg-white text-slate-900 shadow-sm hover:bg-slate-100`,
  outlineDark: `${buttonBase} text-white ring-1 ring-inset ring-white/30 hover:bg-white/10`,
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof buttonStyles }) {
  return <Link {...props} className={`${buttonStyles[variant]} ${className}`} />;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-slate-700">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
