
import SectionLayout from "@/components/sectionLayout";
import React from "react";




const Custom404 = () => {
  return (
    <SectionLayout
      className="h-full min-h-[calc(100vh_-_128px)] flex w-full items-center justify-center"
    >
        <span className="block p-4 mr-4 border-r border-brand/50 text-accent text-6xl">404</span>
        <span className="text-4xl">Page Not Found</span>
    </SectionLayout>
  );
};

export default Custom404;
