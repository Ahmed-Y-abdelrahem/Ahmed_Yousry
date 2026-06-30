'use client';

import { serviceData } from '../../../assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Services = () => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";


  return (

    <section
      id="services"
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


      {/* Background Glow */}

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
          tracking-widest
          uppercase
          "
        >
          What I Do
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
          My Services
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
          I help businesses grow through performance marketing,
          sales strategy, lead generation and data-driven campaigns
          designed to deliver measurable business results.
        </p>


      </div>







      {/* CARDS GRID */}

      <div
        className="
        relative
        z-10

        w-full

        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3

        gap-8

        "
      >



        {
          serviceData.map(({title,description,image},index)=>(


          <div
          key={index}

          className="
          group
          relative

          min-h-[340px]

          overflow-hidden

          rounded-3xl

          shadow-xl

          transition-all
          duration-700

          hover:-translate-y-3

          hover:shadow-[0_30px_80px_rgba(119,104,195,.35)]

          "
          >





            {/* IMAGE */}


            <Image

            src={image}

            alt={title}

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

            className={`

            absolute

            inset-0

            transition

            duration-500


            ${
              isDarkMode

              ?

              "bg-white/65 group-hover:bg-white/45"

              :

              "bg-black/55 group-hover:bg-black/35"

            }

            `}

            />








            {/* BRAND COLOR */}


            <div

            className="
            absolute
            inset-0

            bg-gradient-to-br

            from-[#7768c3]/70

            via-[#ada1f9]/30

            to-[#5f51bd]/70

            opacity-70

            group-hover:opacity-90

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









            {/* CONTENT */}


            <div

            className="
            relative
            z-10

            h-full

            flex
            flex-col

            justify-end

            p-8

            "

            >





              <h3

              className={`

              text-2xl

              font-Outfit

              mb-3

              transition

              duration-500

              group-hover:tracking-wide


              ${
                isDarkMode

                ?

                "text-black"

                :

                "text-white"

              }


              `}

              >

              {title}

              </h3>






              <p

              className={`

              text-sm

              leading-7


              ${
                isDarkMode

                ?

                "text-black/80"

                :

                "text-white/90"

              }


              `}

              >

              {description}

              </p>








              <div

              className={`

              mt-6

              h-[2px]

              w-0

              group-hover:w-full

              transition-all

              duration-700


              ${
                isDarkMode

                ?

                "bg-black"

                :

                "bg-white"

              }


              `}

              />



            </div>








            {/* GLOW */}

            <div

            className="
            absolute

            inset-0

            rounded-3xl

            opacity-0

            group-hover:opacity-100

            bg-gradient-to-r

            from-[#7768c3]

            via-[#ada1f9]

            to-[#5f51bd]

            blur-xl

            -z-10

            transition

            duration-700

            "

            />




          </div>


          ))

        }



      </div>






    </section>


  )

}


export default Services;