import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col items-center mt-20"> {/* Centering the entire form */}
      <h2  className="text-4xl mb-3 font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text">Contact Me</h2>
      
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-80 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow "
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-80 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>

      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-80 grid grid-rows-3 gap-4 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>

      <button className="w-96 px-6 py-3 sm:w-fit rounded-lg bg-gradient-to-br from-red-600 to-yellow-600 hover:bg-slate-200 text-black text-lg mt-2">
        Send a message
      </button>
        </form>
  );
};

export default ContactForm;
