import React from "react";
import { SUBJECT_DATA } from "@/config/constants/common";
import { LINKS } from "@/config/appConfig";
import NavLink from "./navLink";
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
    <footer className="w-full border-t border-brand/20 px-6 md:px-10 lg:px-12 xl:px-0">
      <div className="container mx-auto flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-primary-text/80">
            {firstName} {lastName}, Frontend Developer
          </p>

          <p className="text-xs text-primary-text/50">
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
                    "inline-flex min-h-9 items-center text-xs text-primary-text/70 transition-colors duration-200 hover:text-accent",
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
