import React from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ data }: any) => {
  return (
    <Link href={`/movie/${data?.imdbID}`}>
      <div className="cursor-pointer mx-auto text-center">
        <div
          className="sm:w-[200px] sm:h-[300px] mx-auto w-[250px] h-[300px] scale-100 hover:scale-105
      transition-all duration-300 ease-in-out overflow-hidden relative rounded"
        >
          {data?.Poster === "N/A" ? (
            <Image
              className="w-full h-full object-cover"
              layout="fill"
              src="/not_found.jpg"
              alt={data?.Title}
            />
          ) : (
            <Image
              className="w-full h-full object-cover"
              layout="fill"
              src={data?.Poster}
              alt={data?.Title}
            />
          )}
        </div>
        <div className="">
          <h5 className="text-medium truncate">{data?.Title}</h5>
          <span className="text-sm capitalize">
            {data?.Type}, {data?.Year}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
