"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'
import PrimaryButton from "./PrimaryButton";


const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about#content",
  },
  {
    title: "Gallery",
    path: "/gallery#content",
  },
  {
    title: "Services",
    path: "/services#content",
  },
  {
    title: "Contact",
    path: "/contact#content",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
  <nav className="bg-[#373737]  p-0 tablet:p-2 lg:p-0  tablet:py-0  tablet:bg-transparent  mx-auto max-w-[1720px] w-full top-0 left-0 right-0 z-10 bg-opacity-90">
    <div className="flex  w-full  lg:px-[15px] px-0 items-center  lg:items-start lg:justify-between tablet:justify-between justify-end mx-auto lg:pt-[40px] custom-padding lg:pb-[44px] tablet:pb-[44px] ">
        <Link
          href={"/"}
          className="tablet:pt-[15px]   pr-[25px] hidden tablet:block"
        >
          <Image src="/img/logo.png" alt="Logo" width={253} height={174} className=" hover:scale-105 transition duration-300 ease-in-out "/>
        </Link>

        {/* mobile responsive */}
        <div className="mobile-menu block tablet:hidden py-1 px-2">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[white] text-[white] hover:text-[#1F1F1F] hover:border-[#000]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[white] text-[white] hover:text-[#1F1F1F] hover:border-[#000]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
         {/* Desktop */}
        <div className="menu hidden tablet:flex justify-between gap-3 tablet:w-full max-w-[870px] " id="navbar">
          <ul className="flex  justify-between items-center max-w-[549px]  w-full  tablet:p-0 tablet:flex-row tablet:space-x-4 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>

          <div className="w-full max-w-[266px]">
            <PrimaryButton text="FREE ESTIMATE" className="w-full " width='266px'  href="/contact#content"/>
          </div>
        </div>

      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
