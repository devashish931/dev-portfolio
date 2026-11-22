import Link from "next/link";

export function ContactCard({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 border border-brand/40 bg-brand/15 p-5 transition-colors hover:border-accent/60"
    >
      <span className="shrink-0 text-xl text-accent">{icon}</span>

      <span className="min-w-0">
        <span className="block text-sm text-primary-text/70">{label}</span>

        <span className="block break-all font-semibold text-white">
          {value}
        </span>
      </span>
    </Link>
  );
}
