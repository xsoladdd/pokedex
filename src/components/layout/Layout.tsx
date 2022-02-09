import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-5 lg:px-40 md:py-12 bg-gray-50 dark:bg-gray-800">
        {children}
      </div>
    </>
  );
};
export default Layout;
