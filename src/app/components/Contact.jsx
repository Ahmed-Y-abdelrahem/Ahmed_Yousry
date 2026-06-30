'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare
} from 'lucide-react';



const Contact = () => {


  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const [result, setResult] = useState("");



  useEffect(() => {

    setMounted(true);

  }, []);



  if (!mounted) return null;



  const isDarkMode = theme === "dark";




  const contactInfo = [

    {
      title:"Email",
      value:"ahmed.baakhet@gmail.com",
      icon:Mail
    },


    {
      title:"LinkedIn",
      value:"https://www.linkedin.com/in/ahmed-yousry-senior-media-buyer/",
      icon:Linkedin
    },


    {
      title:"Location",
      value:"Saudi Arabia",
      icon:MapPin
    },


    {
      title:"Phone",
      value:"+966 597 421 581",
      icon:Phone
    }

  ];





  const onSubmit = async (event)=>{


    event.preventDefault();


    setResult("Sending...");



    const formData = new FormData(event.target);



    formData.append(
      "access_key",
      "1db3a07c-8d89-4335-93f5-45aea8491c83"
    );



    formData.append(
      "subject",
      "New Portfolio Contact Request"
    );



    const response = await fetch(

      "https://api.web3forms.com/submit",

      {

        method:"POST",

        body:formData

      }

    );



    const data = await response.json();



    if(data.success){


      setResult("Message Sent Successfully 🚀");


      event.target.reset();


    }

    else{


      setResult("Something went wrong");


    }



  };







return (


<section

id="contact"

className="
relative
w-full
min-h-screen
flex
flex-col
items-center
justify-center
px-5
py-24
overflow-hidden
scroll-mt-24

"

>


{/* Glow */}


<div

className="
absolute
top-10
left-1/2
-translate-x-1/2
w-[650px]
h-[650px]
rounded-full
bg-[#ada1f9]/20
blur-[160px]
"

/>






{/* Header */}


<div className="relative z-10 text-center mb-14">


<p className="
font-Ovo
text-lg
text-gray-500
dark:text-gray-300
mb-3
">

Get In Touch

</p>



<h2

className="
text-4xl
md:text-5xl
font-bold
font-Ovo
text-black
dark:text-white
"

>

Contact Me

</h2>



<p

className="
max-w-2xl
mt-5
font-Ovo
leading-7
text-gray-500
dark:text-gray-300
"

>

Have a project or business idea?
Let's discuss how we can create growth
through smart marketing strategies.

</p>



</div>









<div

className="
relative
z-10
w-full
max-w-6xl
grid
grid-cols-1
lg:grid-cols-2
gap-10
"

>






{/* INFO */}


<div className="flex flex-col gap-5">


{

contactInfo.map((item,index)=>{


const Icon = item.icon;


return (


<div

key={index}

className="
group
flex
items-center
gap-5
p-6
rounded-3xl
bg-white/40
dark:bg-white/5
backdrop-blur-xl
border
border-gray-200
dark:border-white/10
shadow-lg
transition-all
duration-500
hover:-translate-y-2
"

>


<div

className="
w-14
h-14
rounded-2xl
flex
items-center
justify-center
bg-gradient-to-br
from-[#ada1f9]
to-[#7768c3]
shadow-lg
group-hover:scale-110
transition
duration-500
"

>


<Icon

size={28}

className="text-white"

/>


</div>





<div className="text-left">


<h3

className="
font-Outfit
text-lg
text-black
dark:text-white
"

>

{item.title}

</h3>



<p

className="
text-sm
text-gray-500
dark:text-gray-300
"

>

{item.value}

</p>



</div>



</div>


)


})

}


</div>











{/* FORM */}



<form

onSubmit={onSubmit}

className="
rounded-3xl
p-8
bg-white/40
dark:bg-white/5
backdrop-blur-xl
border
border-gray-200
dark:border-white/10
shadow-xl
flex
flex-col
gap-5
"

>




<div className="relative">


<User

className="
absolute
left-4
top-4
text-gray-400
"

/>


<input

name="name"

required

type="text"

placeholder="Your Name"

className="
w-full
pl-12
px-5
py-4
rounded-xl
outline-none
bg-white/70
dark:bg-black/20
border
border-gray-200
dark:border-gray-700
text-black
dark:text-white
"

/>


</div>








<div className="relative">


<Mail

className="
absolute
left-4
top-4
text-gray-400
"

/>


<input

name="email"

required

type="email"

placeholder="Your Email"

className="
w-full
pl-12
px-5
py-4
rounded-xl
outline-none
bg-white/70
dark:bg-black/20
border
border-gray-200
dark:border-gray-700
text-black
dark:text-white
"

/>


</div>








<div className="relative">


<MessageSquare

className="
absolute
left-4
top-4
text-gray-400
"

/>


<textarea

name="message"

required

rows="5"

placeholder="Tell me about your project..."

className="
w-full
pl-12
px-5
py-4
rounded-xl
outline-none
resize-none
bg-white/70
dark:bg-black/20
border
border-gray-200
dark:border-gray-700
text-black
dark:text-white
"

/>


</div>







<button

type="submit"

className="
flex
items-center
justify-center
gap-3
rounded-full
py-4
font-Outfit
text-white
bg-gradient-to-r
from-[#7768c3]
to-[#ada1f9]
shadow-lg
transition-all
duration-500
hover:scale-105
"

>

Send Message

<Send size={20}/>

</button>





<p

className="
text-center
text-sm
font-Ovo
text-gray-500
dark:text-gray-300
"

>

{result}

</p>




</form>






</div>





</section>


)


}



export default Contact;