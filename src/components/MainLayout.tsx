import { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const onNavStateChange = (isOpen: boolean) => {
    setIsNavOpen(isOpen)
  }

  useEffect(()=>{
    if(mainRef.current){
      mainRef.current.inert = isNavOpen;
    }
  },[isNavOpen])

  return (
    <>
        <Navbar onChange={onNavStateChange} />
        <div ref={mainRef}>
            {children}
        </div>
    </>
  );
}