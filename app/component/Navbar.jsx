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
    path: "/Services#content",
  },
  {
    title: "Contact",
    path: "/contact#content",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
  <nav className="bg-[#373737]  p-0 md:p-2 lg:p-0  md:py-0  md:bg-transparent lg:bg-transparent mx-auto max-w-[1720px] w-full top-0 left-0 right-0 z-10 bg-opacity-90">
    <div className="flex  w-full  lg:px-[15px] px-0 items-center  lg:items-start lg:justify-between md:justify-between justify-end mx-auto lg:pt-[40px] custom-padding lg:pb-[44px] md:pb-[44px] ">
        <Link
          href={"/"}
          className="md:pt-[15px]   pr-[25px] hidden md:block"
        >
          <Image src="/img/logo.png" alt="Logo" width={253} height={174}/>
        </Link>

        {/* mobile responsive */}
        <div className="mobile-menu block md:hidden py-1 px-2">
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
        <div className="menu hidden md:block md:w-full max-w-[870px] " id="navbar">
          <ul className="flex  justify-between items-center w-full  md:p-0 md:flex-row md:space-x-4 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <PrimaryButton text="Request Service" href="/contact#content"/>
          </ul>
        </div>

      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
