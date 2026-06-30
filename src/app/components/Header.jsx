'use client';

import Image from 'next/image';
import { assets } from '../../../assets/assets';

const Header = () => {
  return (
    <div
      id="top"
      className="
      relative overflow-hidden
      w-full min-h-screen
      flex flex-col justify-center items-center
      text-center
      px-5
      pt-40 pb-20
      scroll-mt-24
      "
    >

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute top-20 left-1/2 -translate-x-1/2
          w-[600px] h-[600px]
          rounded-full
          bg-[#ada1f9]/20
          blur-[150px]
          animate-aurora
          "
        />

        <div
          className="
          absolute bottom-10 right-10
          w-[400px] h-[400px]
          rounded-full
          bg-[#7768c3]/20
          blur-[130px]
          animate-aurora-delay
          "
        />


        <div
          className="
          absolute inset-0
          opacity-[0.08]
          bg-[linear-gradient(#7768c3_1px,transparent_1px),linear-gradient(90deg,#7768c3_1px,transparent_1px)]
          bg-[size:40px_40px]
          "
        />


      </div>



      {/* IMAGE */}

      <div
        className="
        relative
        group
        mb-12
        animate-entry
        "
      >


        {/* Glow */}

        <div
          className="
          absolute
          -inset-8
          rounded-full

          bg-gradient-to-r
          from-[#7768c3]
          via-[#ada1f9]
          to-[#5f51bd]

          blur-2xl

          opacity-40

          group-hover:opacity-70

          transition

          duration-700

          animate-spin-slow

          "
        />


        {/* Ring */}

        <div
          className="
          absolute
          -inset-3
          rounded-full

          border

          border-[#ada1f9]/50

          animate-pulse-slow

          "
        />



        {/* Avatar */}

        <div
          className="
          relative

          w-64
          h-64

          rounded-full

          p-[6px]

          bg-gradient-to-br

          from-white

          via-[#ada1f9]

          to-[#5f51bd]

          shadow-[0_30px_80px_rgba(119,104,195,.45)]

          group-hover:scale-105

          transition

          duration-700

          "
        >


          <div
            className="
            relative

            w-full

            h-full

            rounded-full

            overflow-hidden

            border

            border-white/40

            "
          >


            <Image

              src={assets.my_image}

              alt="Ahmed Yousry"

              fill

              className="
              object-cover

              scale-110

              group-hover:scale-125

              transition

              duration-[1500ms]

              "

            />


            {/* Shine */}

            <div
              className="
              absolute

              inset-0

              bg-gradient-to-br

              from-white/50

              via-transparent

              to-transparent

              animate-shine

              "
            />


            {/* Depth */}

            <div
              className="
              absolute

              inset-0

              bg-gradient-to-t

              from-black/40

              via-transparent

              "
            />


          </div>


        </div>



        {/* Particles */}

        <span
          className="
          absolute
          top-5
          left-2

          w-3
          h-3

          bg-[#ada1f9]

          rounded-full

          animate-particle

          "
        />


        <span
          className="
          absolute

          bottom-12

          right-0

          w-2
          h-2

          bg-[#7768c3]

          rounded-full

          animate-particle-delay

          "
        />



      </div>





      {/* TITLE */}

      <div className="animate-entry-delay">


        <h6
          className="
          text-xl

          md:text-2xl

          font-bold

          font-Ovo

          text-gray-500

          dark:text-gray-300

          "
        >

          Ahmed Yousry |

          <span
            className="
            ml-2

            text-[#7768c3]

            "
          >

          Growth Marketing Specialist

          </span>


        </h6>


      </div>






      {/* MAIN TEXT */}


      <div
        className="
        flex
        flex-col
        items-center
        gap-6

        mt-8

        animate-entry-delay-2

        "
      >


        <h1
          className="
          max-w-5xl

          text-3xl

          md:text-2xl

          lg:text-6xl

          font-bold

          font-Outfit

          leading-tight

          text-black

          dark:text-white

          "
        >

          Driving Business Growth Through

          <span
            className="
            block

            bg-gradient-to-r

            from-[#7768c3]

            via-[#ada1f9]

            to-[#5f51bd]

            bg-clip-text

            text-transparent

            "
          >

          Marketing, Sales & Data

          </span>


        </h1>



        <p
          className="
          max-w-3xl

          text-lg

          font-Ovo

          leading-8

          text-gray-500

          dark:text-gray-300

          "
        >

          Results-driven Growth Marketing and Sales Specialist with 5+ years of experience 
          in B2B sales, paid media, and performance marketing. Proven track record in generating 
          high-value leads, optimizing campaigns, and delivering measurable revenue growth 
          exceeding SAR 5,000,000 annually.

        </p>



      </div>






      {/* BUTTONS */}

      <div
        className="
        flex

        flex-col

        sm:flex-row

        gap-5

        mt-10

        animate-entry-delay-3

        "
      >



        <a
          href="#contact"

          className="
          group

          flex

          items-center

          gap-3

          px-7

          py-4

          rounded-full


          bg-[#ada1f9]

          text-white

          dark:text-[#11001f]

          shadow-xl

          shadow-[#7768c3]/40


          hover:scale-105

          transition

          duration-500

          "
        >


          <span className="font-Outfit text-lg">

          Get in Touch

          </span>



          <Image
            src={assets.right_arrow_bold_dark}

            alt=""

            className="
            w-6

            group-hover:translate-x-2

            transition

            "
          />


        </a>





        <a

          href="/Ahmed Yousry_CV.pdf"

          download="Ahmed_Yousry_CV.pdf"

          target="_blank"

          rel="noopener noreferrer"


          className="
          flex

          items-center

          gap-3

          px-7

          py-4

          rounded-full


          border

          border-[#7768c3]


          text-[#7768c3]


          bg-white/70


          backdrop-blur-md


          hover:bg-[#7768c3]

          hover:text-white


          transition

          duration-500

          "

        >


          <span className="font-Outfit text-lg">

          Download CV

          </span>


          <Image
            src={assets.download_icon}

            alt=""

            className="w-5"
          />


        </a>


      </div>







<style jsx>{`

@keyframes aurora {

0%,100%{
transform:translateY(0) scale(1);
}

50%{
transform:translateY(-40px) scale(1.1);
}

}


@keyframes spin {

from{
transform:rotate(0);
}

to{
transform:rotate(360deg);
}

}


@keyframes shine {

0%{
transform:translateX(-120%);
}

50%{
transform:translateX(120%);
}

100%{
transform:translateX(120%);
}

}


@keyframes entry {

from{

opacity:0;

transform:translateY(40px);

}

to{

opacity:1;

transform:translateY(0);

}

}


@keyframes particle {

50%{

transform:translateY(-20px);

opacity:.3;

}

}



.animate-entry{

animation:entry 1s ease forwards;

}


.animate-entry-delay{

animation:entry 1s .2s ease forwards;

opacity:0;

}


.animate-entry-delay-2{

animation:entry 1s .4s ease forwards;

opacity:0;

}


.animate-entry-delay-3{

animation:entry 1s .6s ease forwards;

opacity:0;

}



.animate-spin-slow{

animation:spin 25s linear infinite;

}


.animate-aurora{

animation:aurora 8s ease-in-out infinite;

}


.animate-aurora-delay{

animation:aurora 10s ease-in-out infinite reverse;

}


.animate-shine{

animation:shine 5s infinite;

}


.animate-particle{

animation:particle 4s infinite;

}


.animate-particle-delay{

animation:particle 5s infinite;

}


.animate-pulse-slow{

animation:pulse 3s infinite;

}


`}</style>



    </div>
  );
};


export default Header;