'use client';

import { assets, workData } from '../../../assets/assets';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Work = () => {
  const router = useRouter();

  const handleNavigation = (link) => {
    if (!link) return;

    if (link.startsWith('/')) {
      router.push(link);
    } else if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      id="work"
      className="w-full flex flex-col justify-center items-center text-center gap-4 mt-20 mb-10 px-12 scroll-mt-24"
    >
      {/* Subtitle */}
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">
        My Portfolio
      </p>

      {/* Main Title */}
      <h2 className="md:text-4xl text-3xl font-bold font-Ovo text-black dark:text-white">
        Latest Work
      </h2>

      {/* Description */}
      <p className="text-center max-w-5xl text-gray-500 font-Ovo mt-4 mb-6 dark:text-gray-300">
        I build tailored digital solutions that combine design, development, and strategy.
        Each project reflects my focus on performance, usability, and real-world impact.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-auto gap-6 w-full my-3 md:px-10 px-0">
        {workData.map((project, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(project.link)}
            className="group aspect-square relative cursor-pointer rounded-xl overflow-hidden
            bg-no-repeat bg-cover bg-center shadow-md
            transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Soft overlay for better readability */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/40 transition-all duration-500 group-hover:bg-black/20 dark:group-hover:bg-black/60" />

            {/* Animated bottom card */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10/12
              rounded-lg py-3 px-5 flex items-center justify-between
              bg-white/90 dark:bg-[#11001f]/90 backdrop-blur-md
              shadow-lg border border-transparent
              transition-all duration-500
              group-hover:bottom-7 group-hover:border-[#ada1f9]/40"
            >
              <div className="text-left">
                <h3 className="font-medium text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigation(project.link);
                }}
                className="relative w-9 aspect-square flex items-center justify-center
                rounded-full bg-[#ada1f9] border border-black
                shadow-[2px_2px_0_#7768c3]
                transition-all duration-300
                hover:scale-110 hover:rotate-6 hover:shadow-[4px_4px_0_#8f85d9]
                active:scale-95"
              >
                <Image
                  src={assets.send_icon}
                  alt="open project"
                  className="w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;