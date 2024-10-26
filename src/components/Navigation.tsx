"use client";
import { NavLinks } from "./Constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";



const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >

      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
        
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-yellow-800" : "text-white"
            }`}
 
        </Link>
      ))}
    </div>
  );
};

export default Navigation;