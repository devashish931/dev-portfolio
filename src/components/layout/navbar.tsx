import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SUBJECT_DATA } from "@/config/constants/common";
import Button from "../ui/button";
import NavLink from "../navLink";
import Sidebar from "./sidebar";
import { LINKS, ROUTES } from "@/config/appConfig";
import { useRouter } from "next/router";
import cn from "@/lib/utils";

interface NavbarProps {
  onChange: (isOpen: boolean) => void;
}

const Navbar = ({ onChange }: NavbarProps) => {
  const [nav, setNav] = useState(false);
  const { asPath } = useRouter();

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const closeNav = () => setNav(false);

  useEffect(() => {
    if (!nav) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!sidebarRef.current?.contains(event.target as Node)) {
        closeNav();
      }
    };

    const handleEscClick = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNav();
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscClick);
    };
  }, [nav]);

  useEffect(() => {
    onChange(nav);

    if (sidebarRef.current) {
      sidebarRef.current.inert = !nav;
    }
  }, [nav, onChange]);

  const { firstName, lastName } = SUBJECT_DATA.name;

  const isActiveLink = (path: string, currentPath: string) => {
    if (path === ROUTES.HOME) {
      return currentPath.split("?")[0] === ROUTES.HOME;
    }
    return currentPath.startsWith(path);
  };

  return (
    <nav className="fixed left-0 top-0 z-[60] h-16 w-full bg-background/20 shadow-xl backdrop-blur-lg">
      <div className="w-full px-6 md:px-10 lg:px-12 xl:px-0">
        <div className="container mx-auto flex h-full w-full items-center justify-between py-3">
          <NavLink
            href={ROUTES.HOME}
            className="flex shrink-0 items-center text-xl"
          >
            <span className="mr-2 flex h-10 w-10 items-center justify-center border-2 border-brand/80 p-1 text-lg font-extrabold uppercase text-brand">
              DT
            </span>

            <span>
              {firstName} <span className="hidden md:inline">{lastName}</span>
            </span>
          </NavLink>

          <ul className="hidden items-center md:flex">
            {LINKS.map(({ name, href, options, icon: Icon, asButton }, idx) => (
              <li key={name}>
                <Button
                  as="Link"
                  variant={asButton ? "bordered-ghost-primary" : "ghost"}
                  href={href}
                  buttonClassName={cn(
                    "flex h-8 items-center !px-2 text-xs lg:text-sm",
                    asButton ? "ml-2" : "hover:text-yellow-300",
                    {
                      "text-yellow-400": asPath
                        ? isActiveLink(href, asPath)
                        : !idx,
                    },
                  )}
                  {...(options || {})}
                >
                  {name}
                  {Icon && <Icon className="ml-1.5 h-3 w-3" />}
                </Button>
              </li>
            ))}
          </ul>

          <Button
            icon
            onClick={() => setNav(true)}
            buttonClassName="bg-transparent !p-1.5 border-none"
            className="cursor-pointer bg-transparent md:hidden"
            aria-label="Open Navigation"
            aria-expanded={nav}
          >
            <AiOutlineMenu size={25} />
          </Button>
        </div>
      </div>

      <Sidebar ref={sidebarRef} isOpen={nav} onClose={closeNav} />
    </nav>
  );
};

export default Navbar;
