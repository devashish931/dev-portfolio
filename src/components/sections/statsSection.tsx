import cn from "@/lib/utils";
import { SectionProps } from "@/types/common";

const STATS = [
  {
    value: "5+ years",
    label: "Building and scaling production web applications",
  },
  {
    value: "Performance",
    label: "Speed, rendering, optimization and user experience",
  },
  {
    value: "Ownership",
    label: "Architecture, development, collaboration and delivery.",
  },
];

export default function StatsSection({
  className,
  ...restProps
}: SectionProps) {
  return (
    <section className={cn("container mx-auto py-8", className)} {...restProps}>
      <div className="grid grid-cols-1 border border-primary/50 bg-primary/10 sm:grid-cols-3">
        {STATS.map((stat, index) => (
          <div
            key={stat.value}
            className={cn(
              "px-7 py-8 sm:px-8",
              index !== 0 &&
                "border-t border-primary/50 sm:border-l sm:border-t-0",
            )}
          >
            <p className="text-2xl font-bold leading-tight text-accent sm:text-3xl lg:text-4xl">
              {stat.value}
            </p>

            <p className="mt-3 text-base leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
