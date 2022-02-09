import React from "react";
import Button from "../Buttons/NormalButton/Button";

interface ModalProps {
  status?: boolean;
  dismiss?: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  status = false,
  dismiss = () => console.log("Modal should dismiss"),
  children,
  title = "Title",
}) => {
  if (status === false) {
    return null;
  }
  return (
    <>
      <div className="fixed w-full h-screen overflow-hidden  bg-gray-900 bg-opacity-20 top-0 left-0 z-10 flex place-items-center">
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">{title}</p>
            <button onClick={dismiss}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* Content Container */}
          <div className="flex flex-col px-6 py-5 bg-gray-50">{children}</div>
          <div className="flex flex-row  justify-end p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            {/* <p className="font-semibold text-gray-600">Cancel</p> */}
            <Button onClick={dismiss}>Dismiss</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
