import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#050b0f] py-24 px-6 md:px-20 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-green-400">
        Contact Me
      </h2>
      <p className="text-center text-gray-400 mb-16">
        Feel free to reach out for projects, internships, or collaboration.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            Get In Touch
          </h3>

          <p className="text-gray-400 mb-6">
            I am always open to discussing new opportunities and ideas.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>Email: vishakhadeshmukh24@Navgurukul.org</p>
            <p>Location: India</p>
            <p>Number : 8770898876</p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/vishakhadeshmukh23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-4xl"
            >
             <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vishakha-deshmukh-860180326/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-4xl"
            >
             <FaLinkedin />
            </a>
              <a
              href="https://www.codechef.com/users/vishakhad24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-4xl"
            >
             <SiCodechef />
            </a>
          </div>
        </div>

        <form className="bg-[#04130d] p-8 rounded-2xl border border-green-500/20">
          <div className="mb-4">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-black border border-green-500/20 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-black border border-green-500/20 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-black border border-green-500/20 focus:outline-none focus:border-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
