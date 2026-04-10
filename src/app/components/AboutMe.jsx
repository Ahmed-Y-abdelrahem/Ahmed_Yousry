'use client';
import { assets } from '../../../assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";

const AboutUs = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div
      id="about"
      className="w-full flex flex-col justify-center items-center text-center gap-6 mt-20 mb-10 px-4 scroll-mt-24"
    >
      
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">
        Who I Am
      </p>

      <h2 className="text-4xl font-bold font-Ovo text-black dark:text-white">
        About Me
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 mt-8">
        <div className="flex-1 flex flex-col gap-6">
          
          <p className="text-md font-Ovo leading-relaxed text-gray-600 dark:text-gray-400">
            I’m Ahmed Yousry, a results-driven 
            <strong> Growth Marketing & Sales Specialist</strong>.
            <br />
            I specialize in generating high-value leads, scaling paid campaigns,
            and building strategies that drive real business growth.
            <br />
            With over 5 years of experience, I’ve successfully managed
            multi-channel campaigns and contributed to revenue growth
            exceeding millions annually.
          </p>

          {/* 🔥 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">

            {/* CARD */}
            {[
              {
                title: "Experience",
                desc: "5+ years in growth marketing, sales, and performance campaigns",
                icon: isDarkMode ? assets.edu_icon : assets.edu_icon_dark
              },
              {
                title: "Skills",
                desc: "Performance Marketing, Lead Generation, Funnel Optimization",
                icon: isDarkMode ? assets.code_icon : assets.code_icon_dark
              },
              {
                title: "Projects",
                desc: "Managed and delivered high-impact campaigns across multiple industries",
                icon: isDarkMode ? assets.project_icon : assets.project_icon_dark
              },
              {
                title: "Marketing",
                desc: "Meta Ads, Google Ads, LinkedIn Ads, SEO & content strategy",
                icon: isDarkMode ? assets.marketing_icon_dark : assets.marketing_icon
              }
            ].map((card, index) => (

              <div
                key={index}
                className="
                group relative overflow-hidden
                rounded-xl bg-[#ada1f9]
                shadow-md p-5 min-h-[190px]
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
                hover:border-t-2 hover:border-r-2 hover:border-black dark:hover:border-white
                "
              >

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* glow */}
                <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-[#7768c3] via-[#ada1f9] to-[#5f51bd] transition duration-500"></div>

                {/* content */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* ICON */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/20 mb-3 backdrop-blur-md
                  group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                    <Image
                      src={card.icon}
                      className="w-6 h-6 object-contain"
                      alt="icon"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-Outfit my-2 text-white dark:text-black group-hover:tracking-wide transition">
                    {card.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm flex-1 leading-5 text-white/90 dark:text-gray-700">
                    {card.desc}
                  </p>

                  {/* LINE */}
                  <div className="mt-4 h-[2px] w-0 bg-white dark:bg-black group-hover:w-full transition-all duration-500"></div>

                </div>
              </div>

            ))}

          </div>

          <p className="font-Ovo text-start text-gray-500 dark:text-gray-300">
            Tools & Platforms I Use
          </p>

          <div className="flex flex-wrap justify-start gap-4">
            <Image alt="" src={assets.vscode} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.mongodb} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.firebase} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.git} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.meta} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.google} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.linkedIn} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.ashref} className="w-11 h-11 rounded border p-1 object-cover object-center" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;