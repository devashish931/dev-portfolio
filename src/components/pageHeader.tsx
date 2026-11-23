import Button from "@/components/ui/button";
import SectionTitle, { SectionTitleProps } from "@/components/sectionTitle";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

interface PageHeaderProps {
  pretitle: string;
  title: string;
  description?: string;
  backHref?: string;
}

export default function PageHeader({
  pretitle,
  title,
  description,
  backHref,
}: PageHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header className="mb-10 md:mb-14">
      <Button
        onClick={handleBack}
        variant="ghost"
        disableHoverStyles
        className="mb-6 mt-1 h-9 -translate-x-4"
        buttonClassName="text-primary-text/80"
      >
        <FiArrowLeft className="mr-1 h-5 w-5" />
        Back
      </Button>

      <SectionTitle
        pretitle={pretitle}
        className={"!mb-0"}
        titleClassName="max-w-4xl"
      >
        {title}
      </SectionTitle>

      {description && (
        <p className="mt-4 max-w-3xl text-lg leading-relaxed">{description}</p>
      )}
    </header>
  );
}
