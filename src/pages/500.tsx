import SectionLayout from "@/components/layout/sectionLayout";
import React from "react";

const Custom500 = () => {
  return (
    <SectionLayout className="flex h-full min-h-[calc(100vh-128px)] w-full items-center justify-center">
      <span className="border-brand/50 text-accent mr-4 block border-r p-4 text-6xl">
        500
      </span>
      <span className="text-4xl">Internal Server Error</span>
    </SectionLayout>
  );
};

export default Custom500;
