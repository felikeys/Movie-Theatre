// import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

 const AnimatedSearch = () => {
  const [searchValue, setSearchValue] = useState("");
//   const debouncedSearchTerm = useDebounce(searchValue, 300);


  const [isFocused, setIsFocused] = useState(false);

  
  return (
    <div className="relative flex w-full items-center transition-all duration-300 ease-in-out">
      <IoIosSearch
        className={cn("h-5 w-5 text-neutral-400", {
          "text-primary-500": isFocused || searchValue,
        })}
      />
      <input
        type="text"
        className="ml-2 flex-1 border-none py-1 text-sm placeholder-neutral-400 outline-none focus:ring-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? "Start Typing" : "Search"}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {(isFocused || searchValue) && (
        <IoCloseOutline
          className="ml-2 cursor-pointer text-neutral-400"
        />
      )}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-500 ease-in-out ${isFocused ? "w-full" : "w-0"}`}
      />
    </div>
  );
};

export default AnimatedSearch;
