'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../../assets/assets';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

const Navbar = () => {

  const { theme, setTheme } = useTheme();

  const [mounted,setMounted] = useState(false);
  const [isScroll,setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const pathname = usePathname();
  const router = useRouter();


  useEffect(()=>{
    setMounted(true);
  },[]);



  useEffect(()=>{

    const scrollHandler = () =>{
      setIsScroll(window.scrollY > 30);
    }

    window.addEventListener("scroll",scrollHandler);

    return ()=> window.removeEventListener("scroll",scrollHandler)

  },[]);



  if(!mounted) return null;



  const isDark = theme === "dark";



  const menuItems = [

    {
      name:"Home",
      path:"/",
      id:"top"
    },

    {
      name:"About",
      id:"about"
    },

    {
      name:"Services",
      id:"services"
    },

    {
      name:"Work",
      id:"work"
    },

    {
      name:"Projects",
      path:"/projects"
    },

    {
      name:"Marketing",
      path:"/marketing"
    },

    {
      name:"Certifications",
      path:"/testimonials"
    }

  ];




  const openMenu = ()=>{
    sideMenuRef.current.style.transform="translateX(0)";
  }


  const closeMenu = ()=>{
    sideMenuRef.current.style.transform="translateX(100%)";
  }




  const scrollToSection = (id)=>{


    if(pathname !== "/"){

      router.push(`/#${id}`);

    }

    else{

      const section = document.getElementById(id);

      if(section){

        section.scrollIntoView({
          behavior:"smooth"
        })

      }

    }

  }





  const goContact = ()=>{


    if(pathname !== "/"){

      router.push("/#contact");

    }

    else{

      const section = document.getElementById("contact");

      if(section){

        section.scrollIntoView({
          behavior:"smooth"
        })

      }

    }

  }






  const activePath = (item)=>{

    if(item.path){

      return pathname === item.path;

    }

    return false;

  }




  return (

<nav

className={`

fixed top-0 left-0 w-full z-50

px-5 lg:px-10 xl:px-[8%]

py-4

flex items-center justify-between

transition-all duration-500

backdrop-blur-xl


${

isScroll

?

isDark

?

"bg-[#11001f]/80 shadow-xl"

:

"bg-white/80 shadow-lg"

:

""

}

`}

>




{/* LOGO */}

<Link href="/">

<Image

src={assets.logo_usry}

alt="logo"

className="

w-36

cursor-pointer

transition duration-500

hover:scale-105

"

/>

</Link>







{/* DESKTOP MENU */}


<ul

className="

hidden md:flex

items-center

gap-7

px-10

py-3

rounded-full

bg-[#ada1f9]/90

backdrop-blur-xl

shadow-lg

"

>


{


menuItems.map((item)=>(


<li key={item.name}

className="relative"


>


{

item.path ?


<Link

href={item.path}

className={`

font-Ovo

relative

transition-all

duration-300

text-white dark:text-black


${activePath(item)

?

"after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-white dark:after:bg-black after:rounded-full after:shadow-[0_0_15px_#fff]"

:

""

}


`}

>

{item.name}


</Link>


:


<button

onClick={()=>scrollToSection(item.id)}

className="

font-Ovo

text-white dark:text-black

relative

group

"

>


{item.name}


<span

className="

absolute

left-0

-bottom-2

w-0

h-[3px]

bg-white

dark:bg-black

rounded-full

shadow-[0_0_15px_#fff]

transition-all

duration-300

group-hover:w-full

"

/>


</button>


}


</li>



))


}



</ul>










{/* ACTIONS */}



<div className="flex items-center gap-5">



<button

onClick={()=>setTheme(isDark?"light":"dark")}

className="hover:scale-110 transition duration-300"

>


<Image

src={
isDark
?
assets.sun_icon
:
assets.moon_icon
}

alt="theme"

className="w-6"

/>


</button>













<button

onClick={openMenu}

className="md:hidden"

>

<Image

src={
isDark
?
assets.menu_white
:
assets.menu_black
}

alt="menu"

className="w-7"

/>


</button>



</div>







{/* MOBILE MENU */}


<div

ref={sideMenuRef}

className="

fixed

top-0

right-0

w-72

h-screen

bg-[#ada1f9]

shadow-2xl

p-8

flex

flex-col

gap-6

transition-transform

duration-500

translate-x-full

md:hidden

"


>


<button

onClick={closeMenu}

className="self-end"

>

<Image

src={
isDark
?
assets.close_black
:
assets.close_white
}

className="w-6"

alt="close"

/>


</button>




{

menuItems.map((item)=>(


item.path

?

<Link

key={item.name}

href={item.path}

onClick={closeMenu}

className="

font-Ovo

text-white

dark:text-black

text-lg

"

>

{item.name}

</Link>


:


<button

key={item.name}

onClick={()=>{

scrollToSection(item.id);

closeMenu();

}}

className="

text-left

font-Ovo

text-white

dark:text-black

text-lg

"

>

{item.name}

</button>



))


}








</div>






</nav>


  )

}


export default Navbar;