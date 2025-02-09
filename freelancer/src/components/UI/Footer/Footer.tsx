"use client";
import React, { useState, useEffect } from "react";

import { PhoneIcon } from "@heroicons/react/20/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const setDarkMode = () => {
  // ONLY USE localStorage IN USE EFFECT OR CLIENT SIDE ONLY
  if (localStorage) {
    const theme = localStorage?.getItem("theme");
    if (theme === null || theme === undefined) {
      localStorage.setItem("theme", "dark");
    }
    if (theme !== "dark") {
      return false;
    }
  }
  return true;
};

export default function Footer() {
  const savedTheme = "dark";
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      //localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  useEffect(() => {
    if (localStorage) {
      let theme = localStorage?.getItem("theme");
      if (theme === null) {
        localStorage.setItem("theme", "dark");
        theme = localStorage?.getItem("theme");
      }
      if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  return (
    <footer className="row-start-1 flex gap-6 flex-wrap items-center justify-center pt-2 pb-2">
      {/*<a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
  </a>*/}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://pt.linkedin.com/in/pmsmiranda"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5"
        href="/contact"
        rel="noopener noreferrer"
      >
        <PhoneIcon className="w-5 h-5 text-gray-800" />
        Contacto
      </a>
      {/*<a
        className="flex items-center gap-2 no-underline"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1
          className={`text-2xl font-bold tracking-tight ${meowScript.className} neon-text`}
        >
          Pedro Miranda
        </h1>
      </a>
      */}
      <div className="flex gap-6 flex-wrap items-center justify-center pb-1">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bd-gray-200 dark:bg-gray-800"
        >
          {isDarkMode ? (
            <MoonIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          )}
        </button>
      </div>
      {/*<a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read our docs
  </a>*/}
    </footer>
  );
}
