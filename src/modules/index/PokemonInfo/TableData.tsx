import React from "react";

const TableData: React.FC = ({ children }) => {
  return (
    <>
      <td className="py-3 px-6 border-b border-grey-light dark:border-gray-500">
        {children}
      </td>
    </>
  );
};
export default TableData;
