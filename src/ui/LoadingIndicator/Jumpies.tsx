import React from "react";

// interface JumpiesProps {}

const Jumpies: React.FC = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center space-x-2 ">
        <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-red-400 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
      </div>
    </>
  );
};
export default Jumpies;
