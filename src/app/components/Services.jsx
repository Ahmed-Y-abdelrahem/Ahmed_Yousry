'use client';
import { serviceData } from '../../../assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

const Services = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div
      id="services"
      className="w-full flex justify-center px-4 mt-20 mb-10 scroll-mt-24"
    >
      <div
        className={`
          w-full max-w-7xl
          flex flex-col justify-center items-center text-center gap-6
          rounded-3xl
          px-6 py-14
          ${isDarkMode ? 'bg-black/5' : 'bg-white/10'} backdrop-blur-md
          border border-gray-200 dark:border-gray-700
          shadow-lg bg-opacity-15
        `}
      >
        <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">
          What I Do
        </p>

        <h2 className="text-4xl font-bold font-Ovo text-black dark:text-white">
          My Services
        </h2>

        <p className="text-center max-w-5xl text-gray-500 font-Ovo mt-4 dark:text-gray-300">
          I help businesses grow through data-driven marketing, high-converting
          sales strategies, and performance-focused campaigns.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-8">
          {serviceData.map(({ title, description, image }, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl min-h-[260px]
              shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* 🔥 BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover scale-100 group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* 🔥 OVERLAY حسب المود */}
              <div
                className={`absolute inset-0 transition duration-500
                ${isDarkMode 
                  ? 'bg-white/60 group-hover:bg-white/50'   // دارك → تفتيح
                  : 'bg-black/50 group-hover:bg-black/40'   // لايت → تغميق
                }`}
              ></div>

              {/* 🔥 BRAND GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7768c3]/40 via-[#ada1f9]/20 to-[#5f51bd]/40 opacity-90 group-hover:opacity-70 transition duration-500"></div>

              {/* CONTENT */}
              <div className="relative z-10 p-6 flex flex-col h-full text-left">

                {/* TITLE */}
                <h3
                  className={`text-xl font-Outfit mb-2 transition-all duration-300 group-hover:tracking-wide
                  ${isDarkMode ? 'text-black' : 'text-white'}`}
                >
                  {title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-sm flex-1 leading-6
                  ${isDarkMode ? 'text-black/80' : 'text-white/90'}`}
                >
                  {description}
                </p>

                {/* LINE */}
                <div
                  className={`mt-4 h-[2px] w-0 transition-all duration-500
                  ${isDarkMode ? 'bg-black' : 'bg-white'}
                  group-hover:w-full`}
                ></div>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-[#7768c3] via-[#ada1f9] to-[#5f51bd] transition duration-500"></div>

            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;