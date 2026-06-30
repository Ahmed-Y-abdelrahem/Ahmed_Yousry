'use client';

import { assets } from '../../../assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";


const AboutUs = () => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) return null;


  const isDarkMode = theme === "dark";


  const cards = [
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
  ];


  const tools = [
    assets.vscode,
    assets.mongodb,
    assets.firebase,
    assets.git,
    assets.meta,
    assets.google,
    assets.linkedIn,
    assets.ashref
  ];



  return (

    <div
      id="about"
      className="
      relative w-full flex flex-col items-center
      text-center gap-6 mt-24 mb-10 px-5
      overflow-hidden scroll-mt-24
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute top-20 left-1/2 -translate-x-1/2
        w-[500px] h-[500px]
        rounded-full bg-[#ada1f9]/20
        blur-[140px]
        "
      />



      <p className="
      relative z-10
      font-Ovo text-lg
      text-gray-500 dark:text-gray-300
      ">
        Who I Am
      </p>



      <h2
        className="
        relative z-10
        text-4xl md:text-5xl
        font-bold font-Ovo
        text-black dark:text-white
        "
      >
        About Me
      </h2>





      <div className="
      w-full max-w-6xl
      flex flex-col gap-10 mt-8
      "
      >



        {/* Intro */}

        <div
          className="
          p-8 rounded-3xl
          bg-white/50 dark:bg-white/5
          border border-gray-200 dark:border-gray-700
          backdrop-blur-xl shadow-lg
          hover:shadow-2xl transition duration-500
          "
        >

          <p
            className="
            font-Ovo leading-8
            text-gray-600 dark:text-gray-300
            "
          >

            I’m Ahmed Yousry, a results-driven

            <strong className="text-[#7768c3]">
              {" "}Growth Marketing & Sales Specialist
            </strong>

            <br />

            I specialize in generating high-value leads,
            scaling paid campaigns, and building strategies
            that drive real business growth.

            <br />

            With over 5 years of experience,
            I’ve successfully managed multi-channel campaigns
            and contributed to revenue growth exceeding millions annually.

          </p>

        </div>





        {/* Cards */}

        <div
          className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >

          {cards.map((card,index)=>(

            <div
              key={index}
              className="
              group relative overflow-hidden
              rounded-3xl p-5 min-h-[220px]
              bg-gradient-to-br from-[#ada1f9] to-[#7768c3]
              shadow-lg transition-all duration-500
              hover:-translate-y-3
              hover:shadow-[0_25px_60px_rgba(119,104,195,.45)]
              "
            >


              {/* Shine */}

              <div
                className="
                absolute top-0 left-[-120%]
                w-full h-full
                bg-gradient-to-r from-transparent via-white/30 to-transparent
                group-hover:left-[120%]
                transition-all duration-1000
                "
              />



              {/* Overlay */}

              <div
                className="
                absolute inset-0
                bg-white/10
                opacity-0
                group-hover:opacity-100
                transition duration-500
                "
              />



              <div className="
              relative z-10 flex flex-col h-full
              ">


                <div
                  className="
                  w-12 h-12 rounded-xl
                  bg-white/25
                  flex items-center justify-center
                  mb-5 shadow-md
                  group-hover:-translate-y-1
                  transition duration-500
                  "
                >

                  <Image
                    src={card.icon}
                    alt={card.title}
                    className="w-7 h-7 object-contain"
                  />

                </div>



                <h3
                  className="
                  text-lg font-Outfit font-semibold
                  text-white dark:text-black
                  mb-3
                  "
                >
                  {card.title}
                </h3>



                <p
                  className="
                  text-xs md:text-sm
                  leading-6
                  text-white/90 dark:text-black/70
                  "
                >
                  {card.desc}
                </p>



                <div
                  className="
                  mt-auto pt-5 h-[2px]
                  w-0 bg-white dark:bg-black
                  group-hover:w-full
                  transition-all duration-700
                  "
                />

              </div>


            </div>

          ))}


        </div>







        {/* Tools */}

        <div className="w-full mt-8 text-left">


          <p
            className="
            font-Ovo
            text-gray-500 dark:text-gray-300
            mb-5
            "
          >
            Tools & Platforms I Use
          </p>



          <div className="
          flex flex-wrap gap-4 pb-4
          ">


            {tools.map((tool,index)=>(

              <div
                key={index}
                className="
                w-14 h-14
                rounded-2xl
                flex items-center justify-center
                bg-white/60 dark:bg-white/10
                border border-gray-200 dark:border-gray-700
                backdrop-blur-xl shadow-md
                hover:-translate-y-2 hover:shadow-xl
                transition duration-500
                "
              >

                <Image
                  src={tool}
                  alt="tool"
                  className="w-10 h-10 object-contain"
                />

              </div>

            ))}


          </div>


        </div>



      </div>


    </div>

  );

};


export default AboutUs;