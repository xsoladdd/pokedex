import React from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import { colorVariantTypes, sizeVariantTypes } from "../../utils/constants";

interface SwitchProps {
  status: boolean;
  disabled?: boolean;
  onClick: () => void;
  variant?: colorVariantTypes;
  size?: sizeVariantTypes;
}

const Switch: React.FC<SwitchProps> = ({
  status,
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
}) => {
  let variantClass = "";
  switch (variant) {
    case "secondary":
      variantClass = "bg-secondary-500";
      break;
    case "warning":
      variantClass = "bg-yellow-500";
      break;
    case "danger":
      variantClass = "bg-red-500";
      break;
    default:
      variantClass = "bg-primary-500";
      break;
  }

  let sizeClass = {
    circle: ``,
    bodyWidth: ``,
    bodyHeight: ``,
    travelPosition: ``,
  };
  switch (size) {
    case "small":
      sizeClass = {
        travelPosition: `translate-x-6`,
        bodyHeight: `h-5`,
        bodyWidth: `w-10`,
        circle: `w-3 h-3`,
      };
      break;
    case "large":
      sizeClass = {
        travelPosition: `translate-x-7`,
        bodyHeight: `h-8`,
        bodyWidth: `w-14`,
        circle: `w-6 h-6`,
      };
      break;
    default:
      sizeClass = {
        travelPosition: `translate-x-6`,
        bodyHeight: `h-6`,
        bodyWidth: `w-11`,
        circle: `w-4 h-4`,
      };
      break;
  }

  const disabledClass = `opacity-50 `;
  return (
    <>
      <HeadlessSwitch
        disabled={disabled}
        checked={status}
        onChange={onClick}
        className={`${status ? variantClass : "bg-gray-300"} ${
          disabled ? disabledClass : ``
        }
        disabled:opacity-75
         relative inline-flex items-center ${
           sizeClass.bodyHeight
         } rounded-full  ${sizeClass.bodyWidth} `}
      >
        <span
          className={`${
            status ? sizeClass.travelPosition : "translate-x-1"
          } inline-block ${
            sizeClass.circle
          } bg-white rounded-full transform transition ease-in-out duration-200`}
        />
      </HeadlessSwitch>
    </>
  );
};
export default Switch;
