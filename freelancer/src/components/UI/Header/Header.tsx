"use client"; // Add this to the top line to use useState and useEffect (client side)

import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Audiowide, Sixtyfour_Convergence } from "next/font/google";

const signatureFont = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const sixty = Sixtyfour_Convergence({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  // state of the toggle button
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
      }
    }

    /*if (isDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }*/
  }, [isDarkMode]);

  return (
    <header className="stickyNOOOP top-0 z-50 bg-color">
      <div className="px-6 py-4 flex items-center lg:justify-around flex-col lg:flex-row">
        <div className="mb-5 lg:mb-0">
          <a className={sixty.className} href="/">
            Pedro Miranda
          </a>
        </div>
        <nav>
          <ul className="flex gap-6 flex-wrap items-center justify-center pb-1">
            <li>
              <a href="/">
                <HomeIcon className="w-6 h-6 text-yellow-500" />
              </a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
            {/*<li>
              <a href="/blog">Blog</a>
            </li>*/}
            {/* <li>
              <a href="/work">Trabalhos</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
