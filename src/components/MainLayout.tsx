import { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const onNavStateChange = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.inert = isNavOpen;
    }
  }, [isNavOpen]);

  return (
    <>
      <Navbar onChange={onNavStateChange} />
      <div
        ref={mainRef}
        className="container mx-auto box-border px-6 pt-16 md:px-10 lg:px-12 xl:px-0"
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
