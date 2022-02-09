import Image from "next/image";
import React from "react";
import logo from "../../assets/svg/logo.svg";

const Footer: React.FC = ({}) => {
  return (
    <>
      <footer className="text-gray-600 bg-red-100 dark:bg-gray-900">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className="w-14 h-14 text-white p-2  ">
              <Image src={logo} alt="logo" />
            </div>
            <span className="ml-3 text-xl dark:text-white">Poke-Pedia</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-200 sm:py-2 sm:mt-0 mt-4 ">
            ©Poke-Pedia —
            <a
              className="text-gray-600 ml-1"
              href="https://eof-dev.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @eof-dev
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-500"
              href="https://web.facebook.com/eofdotdev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/eof.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-Linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/in/ericson-funtanar-3b42091a4/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
