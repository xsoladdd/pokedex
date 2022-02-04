import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { sizeVariantTypes } from "../../../utils/constants";
import SocialMediaWrapper from "./SocialMediaWrapper";
import { socialMediaVariantTypes } from "./types";

interface SocialMediaButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "type" | "label"> {
  onClick: () => void;
  size?: sizeVariantTypes;
  type: socialMediaVariantTypes;
  label?: boolean;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  size,
  label,
  type,
  ...rest
}) => {
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
  switch (type) {
    case "instagram":
      return (
        <SocialMediaWrapper
          Icon={FaInstagram}
          className={`${sizeClass} bg-red-500 hover:bg-red-600`}
          label={label ? "Instagram" : ""}
          {...rest}
        />
      );
    case "youtube":
      return (
        <SocialMediaWrapper
          Icon={FaYoutube}
          className={`${sizeClass} bg-red-500 hover:bg-red-600`}
          label={label ? "Youtube" : ""}
          {...rest}
        />
      );
    case "google":
      return (
        <SocialMediaWrapper
          Icon={FaGoogle}
          className={`${sizeClass} bg-green-500 hover:bg-green-600`}
          label={label ? "Google" : ""}
          {...rest}
        />
      );
    case "github":
      return (
        <SocialMediaWrapper
          Icon={FaGithub}
          className={`${sizeClass} bg-gray-500 hover:bg-gray-600`}
          label={label ? "Github" : ""}
          {...rest}
        />
      );

    default:
      return (
        <SocialMediaWrapper
          Icon={FaFacebookF}
          className={`${sizeClass} bg-blue-500 hover:bg-blue-600`}
          label={label ? "Facebook" : ""}
          {...rest}
        />
      );
  }
};
export default SocialMediaButton;
