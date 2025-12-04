"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // When mobile menu is open, prevent background scrolling
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <nav className=" top sticky border-b border-gray-100 shadow-xs  ">
      <div className="flex justify-between items-center py-4  px-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <div className="flex-col flex items-start justify-center gap-5">
            <span className="text-[25px] leading-0 font-normal  ">Fashion </span>
            <span className="text-[25px] leading-0 font-bold">
              Buddy
            </span>
          </div>
        </div>

        <div className="md:flex hidden items-center text-xl">
          <a href="/#wprowadzenie" className="mx-4">
            Co to fashion buddy?
          </a>

          <a href="#instrukcja" className="mx-4">
            Jak uruchomić aplikację?
          </a>
        </div>
        <div className="md:hidden text-2x">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="h-screen w-full  shadow-lg z-10">
          <div className="flex flex-col items-center text-xl py-4">
            <a href="/#wprowadzenie" className="my-2" onClick={() => setOpen(false)}>
              Co to fashion buddy?
            </a>
            <a href="#instrukcja" className="my-2" onClick={() => setOpen(false)}>
              Jak uruchomić aplikację?
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
