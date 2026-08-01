import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { SUBJECT_DATA } from "@/config/constants";
import SocialMediaButtons from "./socialMediaButtons";
import Button from "./button";
import NavLink from "./navLink";
import { LINKS } from "@/config/appConfig";
import { useRouter } from "next/router";
import cn from "@/lib/utils";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const { sectionId } = router.query;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setNav(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed z-[60] h-20 w-full bg-primary/20 shadow-xl backdrop-blur-lg">
      <div className="flex h-full w-full items-center justify-between px-4 md:px-8 2xl:px-16">
        <div className="text-3xl font-extrabold">
          <h1>{SUBJECT_DATA.name}</h1>
        </div>
        <div>
          <ul className="-lg:mx-5 -mx-3 hidden items-center md:flex">
            {LINKS.map(({ name, href, options }, idx) => (
              <li  key={idx}>
                <NavLink
                 
                  href={href}
                  className={cn("flex h-20 items-center px-3 lg:px-5", {
                    active: sectionId
                      ? sectionId === href?.replace("/", "")
                      : !idx,
                  })}
                  {...(options || {})}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-screen w-full bg-black/70 transition-all duration-500 md:hidden"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] bg-gray-900 p-5 duration-500 ease-in sm:w-[60%] sm:p-10 md:w-[45%]"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
          ref={ref}
        >
          <div>
            <div className="flex w-full items-center justify-end">
              <Button
                onClick={handleNav}
                icon
                buttonClassName="!bg-black !p-2 opacity-80"
              >
                <AiOutlineClose size={14} />
              </Button>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {LINKS.map(({ name, href, options }, idx) => (
                <li  key={idx}>
                  <NavLink
                   
                    href={href}
                    className="block py-4 text-sm"
                    {...(options || {})}
                    onClick={() => setNav(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="pt-40">
              <p className="font-bold-200 bg-gradient-to-r from-purple-400 to-cyan-700 bg-clip-text uppercase tracking-widest text-transparent">
                Let&#39;s Connect
              </p>
              <SocialMediaButtons
                className="my-4 w-[220px]"
                buttonClassName="!bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
