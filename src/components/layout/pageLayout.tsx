import React from "react";
import cn from "@/lib/utils";
import PageHeader from "@/components/pageHeader";

interface PageLayoutProps {
  children: React.ReactNode;
  pretitle: string;
  title: string;
  description?: string;
  backHref?: string;
  className?: string;
}

export default function PageLayout({
  children,
  pretitle,
  title,
  description,
  backHref,
  className,
}: PageLayoutProps) {
  return (
    <main className={cn("min-h-[calc(100vh-128px)] pb-20", className)}>
      <PageHeader
        pretitle={pretitle}
        title={title}
        description={description}
        backHref={backHref}
      />

      {children}
    </main>
  );
}
