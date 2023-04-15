import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/chainlords-logo.png";
import { menu } from "../constant/dataHome";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { gsap } from "gsap";
import Link from "next/link";

const NavbarComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = (e: Event) => {
      setScrollTop((e.target as Document).documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsSticky(scrollTop > 0);
    if (isOpen) {
      gsap.to(menuRef.current, { duration: 0.5, x: 0, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "-100%",
        ease: "power2.out",
      });
    }
  }, [scrollTop, isOpen]);

  return (
    <header
      className={`${
        isSticky ? "bg-black bg-opacity-80 py-4" : "bg-transparent py-6"
      } z-30 transition-all duration-300 ease-in-out sticky top-0 md:px-32 px-5`}
    >
      <nav className="flex justify-between items-center">
        <Image
          width={isSticky ? 140 : 156}
          src={logo}
          alt="logo"
          className="transition-all duration-300 ease-in-out"
        />
        <div className="md:flex hidden gap-6 items-center">
          <ul className="flex gap-8">
            {menu.map((item, idx) => {
              return (
                <li key={idx}>
                  <a
                    className={`${
                      isSticky ? "text-sm" : "text-base"
                    } hover:text-blue transition-all duration-300 ease-in-out`}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <Link href="/apps">
            <button
              className={`${
                isSticky ? "text-sm" : "text-base"
              } border border-blue text-blue rounded-md py-2 px-4 transition-all duration-300 ease-in-out`}
            >
              Launch App
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <RiMenu3Fill className="text-2xl" />
          </button>
        </div>
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 z-50"
          ref={menuRef}
        >
          <nav className="h-full">
            <ul className="flex flex-col h-full justify-center gap-6 p-10">
              {menu.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a
                      href={item.link}
                      className="text-2xl font-light"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <Link href="/apps">
                <button className="border border-blue text-blue rounded-md py-2 px-4">
                  Launch App
                </button>
              </Link>
            </ul>
          </nav>
          <button
            className="absolute top-5 right-5 text-3xl text-white"
            onClick={closeMenu}
          >
            <AiOutlineClose />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;
