import React, { forwardRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { LINKS, ROUTES } from "@/config/appConfig";
import SocialMediaButtons from "./socialMediaButtons";
import Button from "./button";
import cn from "@/lib/utils";
import NavLink from "./navLink";
import { SUBJECT_DATA } from "@/config/constants/common";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ isOpen, onClose }, ref) => {
    const { asPath } = useRouter();

    const navigationLinks = LINKS.filter(({ name }) => name !== "Resume");

    const isActiveLink = (path: string, currentPath: string) => {
      if (path === ROUTES.HOME) {
        return currentPath.split("?")[0] === ROUTES.HOME;
      }
      return currentPath.startsWith(path);
    };

    return (
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen w-full bg-black/70 transition-all duration-500 md:hidden"
            : ""
        }
      >
        <div
          className={cn(
            "flex flex-col justify-between md:hidden",
            isOpen
              ? "fixed left-0 top-0 h-screen w-[75%] bg-elevated duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] top-0 duration-500 ease-in",
          )}
          role="dialog"
          aria-modal={isOpen}
          aria-label="Navigation Menu"
          ref={ref}
        >
          <div>
            <div className="flex h-16 w-full items-center justify-between gap-4 border-b border-brand/30 px-6">
              <NavLink
                href={ROUTES.HOME}
                onClick={onClose}
                className="flex shrink-0 items-center text-xl"
              >
                <span className="mr-2 flex h-10 w-10 items-center justify-center border-2 border-brand/80 p-1 text-lg font-extrabold uppercase text-brand">
                  DT
                </span>

                <span>{SUBJECT_DATA.name.firstName}</span>
              </NavLink>
              <Button
                onClick={onClose}
                icon
                buttonClassName="!bg-transparent !border !border-brand/50 !p-2 hover:!border-brand"
                aria-label="Close Menu"
              >
                <AiOutlineClose size={20} />
              </Button>
            </div>

            <div className="flex flex-col py-4">
              <ul aria-label="Main Navigation">
                {navigationLinks.map(({ name, href, options }) => {
                  const active = isActiveLink(href, asPath);

                  return (
                    <li key={name}>
                      <NavLink
                        href={href}
                        className={cn(
                          "flex items-center justify-between border-l-2 border-transparent py-4 pl-[22px] pr-6 text-lg font-semibold transition-colors duration-200",
                          active
                            ? "!border-accent text-accent"
                            : "text-primary-text hover:text-accent",
                        )}
                        {...(options || {})}
                        onClick={onClose}
                      >
                        {name}
                        <FiArrowRight
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            active
                              ? "translate-x-0 text-yellow-400"
                              : "text-primary-text/60 group-hover:translate-x-1",
                          )}
                        />
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="px-6 pb-4">
            <Button
              as="Link"
              href={SUBJECT_DATA.resume}
              variant="solid-accent"
              className="w-full"
              buttonClassName="h-16 w-full justify-center text-lg font-bold text-black"
              download
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </Button>

            <SocialMediaButtons
              className="my-4 w-[220px]"
              buttonClassName="!bg-transparent !border !border-brand/50 hover:!border-brand"
            />
          </div>
        </div>
      </div>
    );
  },
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
