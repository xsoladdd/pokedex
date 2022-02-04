import React from "react";
import { colorVariantTypes, sizeVariantTypes } from "../../../utils/constants";

interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "type"> {
  onClick: () => void;
  variant?: colorVariantTypes;
  size?: sizeVariantTypes;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant,
  size,
  ...rest
}) => {
  let colorClass = ``;
  switch (variant) {
    case "danger":
      colorClass = "bg-red-500 hover:bg-red-600";
      break;
    case "secondary":
      colorClass = "bg-secondary-500 hover:bg-secondary-600";
      break;
    case "warning":
      colorClass = "bg-yellow-500 hover:bg-yellow-600";
      break;
    case "info":
      colorClass = "bg-blue-500 hover:bg-blue-600";
      break;
    default:
      colorClass = "bg-primary-500 hover:bg-primary-600";
      break;
  }
  let sizeClass = ``;
  switch (size) {
    case "large":
      sizeClass = "py-2 px-6 text-xl";
      break;
    case "small":
      sizeClass = "py-2 px-6 text-xs";
      break;
    default:
      sizeClass = "py-2 px-6 text-base";
      break;
  }

  return (
    <button
      className={`text-white border-0 px-3 disabled:opacity-75 focus:outline-none rounded ${sizeClass} ${colorClass} ${className}`}
      onClick={onClick}
      {...rest}
      // type={typeof type === "string" ? "button" : type}
    >
      {children}
    </button>
  );
};
export default Button;
