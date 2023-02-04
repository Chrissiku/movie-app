import React from "react";
import Image from "next/image";
import MovieCard from "./MovieCard";

const Body = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="container my-14 text-white">
      {arr?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 border">
          {arr.map((data, index) => (
            <MovieCard key={index} data={data} />
          ))}
        </div>
      ) : (
        <div className="w-full mt-20">
          <Image
            src="/not_found.jpg"
            alt="not found"
            className="mx-auto w-[300px]"
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default Body;
