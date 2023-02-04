import React, { useContext } from "react";
import { GlobalContext } from "@/pages/_app";
import { DebounceInput } from "react-debounce-input";

const Search = () => {
  const { text, setText } = useContext(GlobalContext);
  return (
    <div className="container text-white inline-flex justify-center items-center gap-4 mt-14">
      {text ? (
        <span>Search :</span>
      ) : (
        <span>
          <span className="text-lg">Not Found</span>
        </span>
      )}
      <DebounceInput
        debounceTimeout={10}
        type="text"
        className="border-b-2 border-white focus-within:outline-none bg-transparent py-2 px-3"
        placeholder=".  .  .  .  .  .  ."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
    </div>
  );
};

export default Search;
