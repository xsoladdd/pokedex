import React from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";

interface SwitchProps {
  status: boolean;
  onClick: () => void;
}

const DarkmodeSwitch: React.FC<SwitchProps> = ({ status, onClick }) => {
  return (
    <>
      <HeadlessSwitch
        checked={status}
        onChange={onClick}
        className={`${status ? "bg-gray-700" : "bg-gray-100"}
        relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2  border-gray-200 dark:border-transparent border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          className={`${status ? "translate-x-9 " : "translate-x-0 bg-gray-700"}
         pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        >
          {status ? (
            <div className="flex place-items-center place-content-center h-full w-full">
              <svg
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          ) : (
            <div className="flex place-items-center place-content-center h-full w-full">
              <svg
                className="h-6 w-6 text-yellow-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          )}
        </span>
      </HeadlessSwitch>
    </>
  );
};
export default DarkmodeSwitch;
