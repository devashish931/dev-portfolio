import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "./button";
import { SUBJECT_DATA } from "@/config/constants";
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
  const { github, linkedin, email, buyMeCoffee } =
    SUBJECT_DATA?.social_media_links || {};

  return (
    <div
      className={cn(
        "flex max-w-full items-center justify-between gap-8",
        className
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
        <FaGithub />
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
        <FaLinkedinIn />
      </Button>
      <Button
        icon
        onClick={() => (window.location.href = `mailto:${email}`)}
        buttonClassName={buttonClassName}
        aria-label="Send me an e-mail"
      >
        <AiOutlineMail />
      </Button>
      {showBuyMeCoffeeButton && buyMeCoffee ? (
        <Button as="a" 
          href={buyMeCoffee} 
          target="_blank"
        >
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
