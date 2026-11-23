import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Button from "./button";
import { SUBJECT_DATA } from "@/config/constants/common";
import cn from "@/lib/utils";
import Image from "next/image";

interface SocialMediaButtonsProps {
  className?: string;
  buttonClassName?: string;
  showBuyMeCoffeeButton?: boolean;
}

const SocialMediaButtons = ({
  className = "",
  buttonClassName = "",
  showBuyMeCoffeeButton = false,
}: SocialMediaButtonsProps) => {
  const { github, linkedin, email, buyMeACoffee } = {
    ...SUBJECT_DATA?.social,
    ...SUBJECT_DATA.contact,
  };

  return (
    <div
      className={cn(
        "flex max-w-full items-center justify-start gap-2",
        className,
      )}
    >
      <Button
        as="a"
        href={github}
        target="_blank"
        rel="noreferrer"
        icon
        buttonClassName={buttonClassName}
        aria-label="Open my github account"
      >
        <FiGithub />
      </Button>
      <Button
        as="a"
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        icon
        buttonClassName={buttonClassName}
        aria-label="Open my linkedin profile"
      >
        <FiLinkedin />
      </Button>
      <Button
        icon
        onClick={() => (window.location.href = `mailto:${email}`)}
        buttonClassName={buttonClassName}
        aria-label="Send me an e-mail"
      >
        <FiMail />
      </Button>
      {showBuyMeCoffeeButton && buyMeACoffee ? (
        <Button as="a" href={buyMeACoffee} target="_blank">
          <Image
            src="/images/icons/buyMeCoffee.png"
            alt="Buy Me A Coffee"
            width={20}
            height={28}
            className="mr-2"
          />{" "}
          Buy me a Coffee
        </Button>
      ) : null}
    </div>
  );
};

export default SocialMediaButtons;
