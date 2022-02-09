import { useTheme } from "next-themes";
import NextImage from "next/image";
import NextLink from "next/link";
import React from "react";
import logo from "../../assets/svg/logo.svg";
import { isDarkmode } from "../../helper/isDarkmode";
import DarkmodeSwitch from "./DarkmodeSwitch";
const Header: React.FC = ({}) => {
  // const [darkMode, setDarkMode] = useState(true);

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="text-gray-600 body-font bg-red-500 dark:bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NextLink href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="w-14 h-14 text-white p-2  ">
                <NextImage src={logo} />
              </div>
              <span className="ml-3 text-xl text-white">Poke-Pedia</span>
            </a>
          </NextLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <DarkmodeSwitch
              status={isDarkmode(theme)}
              onClick={() =>
                isDarkmode(theme) ? setTheme("light") : setTheme("dark")
              }
            />
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
