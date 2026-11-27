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
      className="border-brand/40 bg-brand/15 hover:border-accent/60 flex items-center gap-4 border p-5 transition-colors"
    >
      <span className="text-accent shrink-0 text-xl">{icon}</span>

      <span className="min-w-0">
        <span className="text-primary-text/70 block text-sm">{label}</span>

        <span className="block font-semibold break-all text-white">
          {value}
        </span>
      </span>
    </Link>
  );
}
