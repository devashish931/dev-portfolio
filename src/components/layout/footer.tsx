import React from "react";
import { SUBJECT_DATA } from "@/config/constants/common";
import { LINKS } from "@/config/appConfig";
import NavLink from "../navLink";
import cn from "@/lib/utils";

const Footer = () => {
  const { firstName, lastName } = SUBJECT_DATA.name;

  const footerLinks = LINKS.filter(
    ({ name }) => !["Resume", "Home"].includes(name),
  );

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return `/${href}`;
    }

    if (href.startsWith("/")) {
      return href;
    }

    return `/${href}`;
  };

  return (
    <footer className="border-brand/20 w-full border-t">
      <div className="container mx-auto flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7 md:px-10 lg:px-12 xl:px-6 2xl:px-0">
        <div className="flex flex-col gap-1">
          <p className="text-primary-text/80 text-sm font-medium">
            {firstName} {lastName}, Frontend Developer
          </p>

          <p className="text-primary-text/70 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLinks.map(({ name, href, options }) => (
              <li key={name}>
                <NavLink
                  href={getHref(href)}
                  className={cn(
                    "text-primary-text/70 hover:text-accent inline-flex min-h-9 items-center text-xs transition-colors duration-200",
                  )}
                  {...(options || {})}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
