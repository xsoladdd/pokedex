import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
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
  return (
    <>
      <Transition appear show={status} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => dismiss}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-700 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">{children}</div>

                <div className="mt-4 flex justify-center ">
                  <Button onClick={dismiss} variant="info">
                    Got it, Thanks!
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
