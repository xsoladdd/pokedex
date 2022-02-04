import { useTheme } from "next-themes";
import React from "react";
import { isDarkmode } from "../../helper/isDarkmode";
import Switch from "../../ui/switch/Switch";
import logo from "../../assets/svg/logo.svg";
import NextImage from "next/image";
import NextLink from "next/link";
const Header: React.FC = ({}) => {
  // const [darkMode, setDarkMode] = useState(true);

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NextLink href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="w-14 h-14 text-white p-2  ">
                <NextImage src={logo} />
              </div>
              <span className="ml-3 text-xl dark:text-white">Poke-Pedia</span>
            </a>
          </NextLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 hover:dark:text-gray-300 dark:text-white">
              First Link
            </a>
            <Switch
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
