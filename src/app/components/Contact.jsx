import { assets } from '../../../assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "1db3a07c-8d89-4335-93f5-45aea8491c83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong");
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center text-center gap-4 mt-24 px-6 sm:px-12 scroll-mt-24
      bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-contain sm:bg-cover py-20
      transition-colors duration-700 dark:bg-[url('/footer-bg-color-dark.png')]"
    >
      {/* Header */}
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300 tracking-wide">
        Get in touch
      </p>

      <h2 className="text-4xl md:text-5xl font-bold font-Ovo text-black dark:text-white">
        Let’s Work Together
      </h2>

      <p className="text-center max-w-3xl text-gray-500 font-Ovo mt-4 mb-8 dark:text-gray-300 leading-relaxed">
        Have a project in mind or need help building something meaningful?
        I’m always open to new opportunities and collaborations.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl w-full mx-auto px-4 sm:px-6"
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg outline-none border border-gray-300
            bg-white dark:bg-gray-900 dark:text-white
            transition-all duration-300
            focus:border-[#ada1f9] focus:ring-2 focus:ring-[#ada1f9]/30
            hover:shadow-sm"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg outline-none border border-gray-300
            bg-white dark:bg-gray-900 dark:text-white
            transition-all duration-300
            focus:border-[#ada1f9] focus:ring-2 focus:ring-[#ada1f9]/30
            hover:shadow-sm"
          />
        </div>

        <textarea
          rows={6}
          name="message"
          required
          placeholder="Your Message"
          className="w-full p-3 rounded-lg outline-none border border-gray-300
          bg-white dark:bg-gray-900 dark:text-white mb-6
          transition-all duration-300
          focus:border-[#ada1f9] focus:ring-2 focus:ring-[#ada1f9]/30
          hover:shadow-sm resize-none"
        />

        {/* Button */}

    <button
          type="submit"
          className="w-max px-8  flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
             bg-[#ada1f9] rounded-full p-4 text-white dark:text-[#11001f] font-Ovo text-lg gap-3 
             hover:opacity-80 transition duration-500"
        >
          Send Message
        </button>

        {/* Status */}
        {result && (
          <p className="mt-6 text-gray-600 dark:text-gray-300 transition-all duration-300">
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;



