import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search"
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-circle btn-active btn-accent text-white">
        <FaSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
