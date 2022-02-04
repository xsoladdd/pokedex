import React from "react";
import { IconType } from "react-icons";

interface SocialMediaWrapperProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "type"> {
  label?: string | undefined;
  Icon: IconType;
}

const SocialMediaWrapper: React.FC<SocialMediaWrapperProps> = ({
  className,
  Icon,
  label,
  ...rest
}) => {
  return (
    <>
      <button
        className={`border-0 focus:outline-none disabled:opacity-75 rounded py-2 px-3 text-white ${className} flex place-items-center gap-2`}
        {...rest}
      >
        <Icon />

        {label}
      </button>
    </>
  );
};
export default SocialMediaWrapper;
