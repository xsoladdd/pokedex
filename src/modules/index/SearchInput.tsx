import React from "react";

interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setLoading: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  setSearch,
  setLoading,
}) => {
  return (
    <>
      <div className="flex items-center max-w-md  bg-gray-100 dark:bg-gray-200 border-2 border-gray-300 rounded-lg">
        <div className="w-full">
          <input
            type="text"
            className="w-full px-4 py-1 text-gray-800 bg-gray-100 dark:bg-gray-200 rounded-full focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setLoading();
            }}
          />
        </div>
        <div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-200 justify-center w-12 h-12 text-gray-600 rounded-r-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchInput;
