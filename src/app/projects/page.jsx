'use client';

import { assets, allProjects } from '../../../assets/assets';
import React from 'react';
import Image from 'next/image';


const ProjectsPage = () => {


  return (

    <section

    className="
    relative
    w-full
    min-h-screen

    py-24
    px-5

    overflow-hidden

    "

    >





      {/* BACKGROUND GLOW */}


      <div

      className="
      absolute

      top-20

      left-1/2

      -translate-x-1/2


      w-[700px]

      h-[700px]


      rounded-full


      bg-[#ada1f9]/20


      blur-[160px]

      "

      />









      {/* HEADER */}



      <div

      className="
      relative
      z-10

      flex
      flex-col

      items-center

      text-center

      gap-5

      mb-16

      "

      >



        <p

        className="
        font-Ovo

        text-lg

        uppercase

        tracking-widest

        text-gray-500

        dark:text-gray-300

        "

        >

        My Portfolio

        </p>







        <h1

        className="
        text-4xl

        md:text-6xl

        font-bold

        font-Ovo

        text-black

        dark:text-white

        "

        >

        Selected Work

        </h1>







        <p

        className="
        max-w-4xl

        font-Ovo

        leading-8

        text-gray-500

        dark:text-gray-300

        "

        >

        A collection of projects focused on strategy,
        performance, scalable solutions and modern digital experiences.

        </p>



      </div>









      {/* PROJECT GRID */}




      <div

      className="
      relative

      z-10


      grid

      grid-cols-1

      md:grid-cols-2

      xl:grid-cols-3


      gap-8

      "

      >





      {

      allProjects.map((project,index)=>(




      <div

      key={index}

      className="

      group

      relative


      min-h-[420px]


      overflow-hidden


      rounded-3xl


      cursor-pointer


      shadow-xl


      transition-all


      duration-700


      hover:-translate-y-3


      hover:shadow-[0_30px_80px_rgba(119,104,195,.35)]

      "

      >







        {/* IMAGE */}



        <Image

        src={project.bgImage}

        alt={project.title}

        fill


        className="

        object-cover

        transition

        duration-700

        group-hover:scale-110

        "

        />









        {/* DARK OVERLAY */}



        <div

        className="

        absolute

        inset-0


        bg-black/45


        group-hover:bg-black/60


        transition

        duration-500

        "

        />









        {/* BRAND OVERLAY */}



        <div

        className="

        absolute

        inset-0


        bg-gradient-to-br


        from-[#7768c3]/50


        via-[#ada1f9]/20


        to-[#5f51bd]/60



        opacity-80



        group-hover:opacity-100


        transition

        duration-500

        "

        />









        {/* SHINE */}



        <div

        className="

        absolute

        -left-full


        top-0


        w-1/2


        h-full


        bg-white/20


        skew-x-12


        group-hover:left-[130%]


        transition-all


        duration-1000

        "

        />









        {/* INFO CARD */}



        <div

        className="

        absolute

        bottom-6


        left-1/2


        -translate-x-1/2



        w-[85%]



        rounded-2xl



        p-5



        backdrop-blur-xl



        bg-white/90



        dark:bg-[#11001f]/90



        border

        border-white/20



        shadow-xl



        transition-all



        duration-500



        group-hover:bottom-8



        "

        >







          <div

          className="

          flex

          items-center

          justify-between

          gap-4

          "

          >







            <div className="text-left">





              <h3

              className="

              text-lg

              font-Outfit

              font-semibold

              text-black

              dark:text-white

              "

              >

              {project.title}

              </h3>








              <p

              className="

              mt-1

              text-sm

              leading-5


              text-gray-600

              dark:text-gray-300

              line-clamp-2

              "

              >

              {project.description}

              </p>





            </div>









            <a

            href={project.link}

            target="_blank"

            rel="noopener noreferrer"


            onClick={(e)=>e.stopPropagation()}



            className="


            shrink-0


            w-11


            h-11


            flex


            items-center


            justify-center



            rounded-full



            bg-[#ada1f9]



            border


            border-black



            shadow-[3px_3px_0_#7768c3]



            transition-all



            duration-300



            hover:scale-110



            hover:rotate-6



            active:scale-95



            "

            >




              <Image

              src={assets.send_icon}

              alt="open project"

              className="w-5"

              />



            </a>





          </div>









          <div

          className="

          mt-4


          h-[2px]


          w-0


          bg-[#7768c3]


          group-hover:w-full


          transition-all


          duration-700

          "

          />




        </div>








      </div>





      ))

      }






      </div>








    </section>

  );


};


export default ProjectsPage;