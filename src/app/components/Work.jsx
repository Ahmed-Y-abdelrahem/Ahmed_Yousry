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

    <section

      id="work"

      className="
      relative
      w-full
      min-h-screen
      py-24
      px-5
      overflow-hidden
      scroll-mt-24
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
        text-gray-500
        dark:text-gray-300

        uppercase
        tracking-widest
        "

        >

        My Portfolio

        </p>





        <h2

        className="
        text-4xl
        md:text-6xl

        font-bold
        font-Ovo

        text-black
        dark:text-white

        "

        >

        Latest Work

        </h2>






        <p

        className="
        max-w-4xl

        font-Ovo

        leading-8

        text-gray-500

        dark:text-gray-300

        "

        >

        I create digital solutions that combine strategy,
        design and technology to deliver measurable results
        and high-performance experiences.

        </p>



      </div>








      {/* PROJECTS GRID */}



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

      workData.map((project,index)=>(


      <div

      key={index}

      onClick={()=>handleNavigation(project.link)}

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









        {/* OVERLAY */}


        <div

        className="

        absolute

        inset-0

        bg-black/40

        group-hover:bg-black/55

        transition

        duration-500

        "

        />









        {/* BRAND GRADIENT */}


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









        {/* SHINE EFFECT */}



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









        {/* CONTENT CARD */}


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




            <div

            className="text-left"

            >



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

              text-sm

              mt-1

              leading-5

              text-gray-600

              dark:text-gray-300

              "

              >

              {project.description}

              </p>



            </div>








            <button

            onClick={(e)=>{

              e.stopPropagation();

              handleNavigation(project.link);

            }}

            className="

            shrink-0

            w-11

            h-11

            rounded-full


            flex

            items-center

            justify-center


            bg-[#ada1f9]


            border

            border-black


            shadow-[3px_3px_0_#7768c3]


            transition-all


            duration-300


            hover:scale-110

            hover:rotate-6


            "

            >



              <Image

              src={assets.send_icon}

              alt="open"

              className="w-5"

              />


            </button>




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


export default Work;