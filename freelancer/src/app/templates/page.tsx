"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
//import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";
import TEMPLATE_IMAGES from "../../templates";

const categories = [
  "corporate",
  "restauração",
  "saúde",
  "eventos",
  "fotografia",
  "desporto",
  "curriculum",
];

export default function ContactPage() {
  const [margins, setMargins] = useState([""]);
  const [activeSideMenuOption, setActiveSideMenuOption] = useState(
    categories[0]
  );

  useEffect(() => {
    // Generate random margins for each image
    setMargins(
      TEMPLATE_IMAGES.map(() => (Math.random() > 0.5 ? "mt-1" : "mt-4"))
    );
  }, []);

  return (
    <section className="p-2">
      <div className="p-2 mt-[10px] lg:max-w-[630px] lg:mx-[200px]">
        Lista de templates de sites estáticos
      </div>
      <div className="w-[50%] lg:w-[15%] fixed bg-black md:bg-white lg:bg-white opacity-60 lg:bg-opacity-10 p-1">
        <p className="text-md font-bold tracking-tight text-slate-200 sm:text-xl">
          Temas
        </p>
        <div className="mt-3">
          <ul>
            {categories.map((category, index) => (
              <li key={`li-${category}`}>
                <Link
                  href={`#${category}`}
                  onClick={() => {
                    setActiveSideMenuOption(`${category}`);
                  }}
                  className={`group flex items-center py-3 ${
                    activeSideMenuOption === `${category}` ? "active" : ""
                  }`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visibility_bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-0 justify-center max-w-[99%] lg:max-w-[79%] mx-auto overflow-hidden bg-white bg-opacity-10  md:absolute lg:absolute md:right-5 lg:right-5">
        {TEMPLATE_IMAGES.map((template, index) => (
          <div
            id={`${template.category}`}
            key={index}
            className={`w-[90%] h-auto lg:w-auto p-5 lg:p-`}
          >
            <label className="text-black bg-white bg-opacity-50 rounded-md pl-5 pr-5 mx-auto">
              {`tema: ${template.title}`}
            </label>
            <Image
              src={template.src}
              alt={`Image ${index + 1}`}
              width={0}
              height={0}
              sizes={
                template.src.indexOf("cocoon") > 0 ||
                template.src.indexOf("fotos") > 0
                  ? "100vw"
                  : "35vw"
              }
              className="rounded-md object-contain lg:object-cover w-full h-full "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
