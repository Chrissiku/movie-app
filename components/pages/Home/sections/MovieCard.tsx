import React from "react";
import Image from "next/image";

const MovieCard = ({ data }: any) => {
  return (
    <div className="cursor-pointer mx-auto text-center">
      <div
        className="sm:w-[200px] sm:h-[300px] mx-auto w-[250px] h-[300px] border scale-95 hover:scale-100
      transition-all duration-300 ease-in-out overflow-hidden relative rounded"
      >
        <Image
          className="w-full h-full object-cover"
          layout="fill"
          src="/camera.jpg"
          alt="movie name"
        />
      </div>
      <div className="">
        <h5 className="text-medium truncate">Batman</h5>
        <span className="text-sm capitalize">Movie, 2000</span>
      </div>
    </div>
  );
};

export default MovieCard;
