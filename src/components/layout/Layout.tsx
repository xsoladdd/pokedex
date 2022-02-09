import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className=" min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 px-5 lg:px-40 py-6 md:py-12 bg-gray-50 dark:bg-gray-800">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
