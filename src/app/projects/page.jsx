'use client';

import { assets, allProjects } from '../../../assets/assets';
import React from 'react';
import Image from 'next/image';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300 mb-2 tracking-wide">
            My Portfolio
          </p>

          <h1 className="md:text-5xl text-4xl font-bold font-Ovo text-black dark:text-white mb-4">
            Selected Work
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-300 font-Ovo leading-relaxed">
            A curated selection of projects where I focus on clean design,
            scalable development, and impactful user experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer
              bg-no-repeat bg-cover bg-center shadow-md
              transition-all duration-500 ease-out
              hover:scale-[1.04] hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]
              hover:rotate-[0.3deg]"
              style={{
                backgroundImage: `url(${project.bgImage})`,
              }}
            >
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent
              dark:from-black/75 dark:via-black/20 dark:to-transparent
              transition-all duration-500 group-hover:from-black/70 group-hover:dark:from-black/85" />

              {/* Subtle light flash effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
              bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

              {/* Card Info */}
              <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12
                bg-white/90 dark:bg-[#11001f]/90 backdrop-blur-xl
                rounded-xl py-3 px-5 flex items-center justify-between
                border border-transparent shadow-lg
                transition-all duration-500 ease-out
                group-hover:bottom-8 group-hover:border-[#ada1f9]/40
                group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="text-left">
                  <h3 className="font-medium text-black dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-9 aspect-square flex items-center justify-center
                  rounded-full bg-[#ada1f9] border border-black
                  shadow-[2px_2px_0_#7768c3]
                  transition-all duration-300
                  hover:scale-110 hover:rotate-6 active:scale-95
                  hover:shadow-[4px_4px_0_#8f85d9]"
                >
                  {/* micro glow ring */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 bg-[#ada1f9]/20 blur-md" />

                  <Image
                    src={assets.send_icon}
                    alt="open project"
                    className="w-5 relative z-10 transition-transform duration-300
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;