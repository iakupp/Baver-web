"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import headerLinks from "@/app/data/navigationLinks";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "@/app/assets/logo.svg";


const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {

    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setActiveLink(href);
      setIsOpen(false);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -80;
        const y =
          targetElement.getBoundingClientRect().top +
          window.scrollY +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }

      window.history.pushState(null, "", href);
    }

    setActiveLink(href);
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            window.history.replaceState(null, "", "/");
            setIsOpen(false);
            window.scrollTo({
            top: 0,
              behavior: "smooth",
          });
  }

  return (
    <header
      className={`
        fixed top-0 left-1/2 -translate-x-1/2 w-full z-[9999]
        bg-white
        transition-shadow duration-300
        ${isScrolled ? "shadow-[0_4px_16px_rgba(0,0,0,0.15)]" : ""}
      `}
    >
      <div className="flex items-center justify-between py-2 max-w-[1248px] mx-auto h-[70px] px-[16px] lg:px-[34px]">
        
        {/* LOGO */}
        <Link href={headerLinks[0].href}
          onClick={handleLogoClick}
          className="flex items-center">
          <Image
            src={logo}
            alt="Baver logo"
            className="w-[50px] md:w-[50px] lg:w-[80px] xl:w-[110px]"
          />
        </Link>

        {/* MOBILE ICON */}
        <div className="lg:hidden cursor-pointer">
          {isOpen ? (
            <IoClose size={26} onClick={toggleMenu} />
          ) : (
            <IoMenu size={26} onClick={toggleMenu} />
          )}
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="
            absolute top-[5em] left-1/2 -translate-x-1/2
            w-full max-w-[92%] md:max-w-[96%]
            bg-white rounded-xl
            shadow-[0_4px_16px_rgba(0,0,0,0.15)]
            py-6 z-40
            lg:hidden
          ">
            <ul className="flex flex-col items-center gap-8">
              {headerLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`
                      text-[13px] md:text-[14px]
                      text-[var(--text-dark)]
                      border-b border-transparent
                      transition-all duration-300
                      hover:border-[var(--color-primary)]
                      hover:text-[var(--color-primary)]
                      ${activeLink === link.href ? "border-[var(--color-primary)]" : ""}
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8">
            {headerLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`
                    text-[15px] text-[var(--text-dark)]
                    border-b border-transparent
                    transition-all duration-300
                    hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]
                    ${activeLink === link.href ? "border-[var(--color-primary)]" : ""}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default NavigationSection;