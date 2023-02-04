/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { GlobalContext } from "@/pages/_app";

interface Movie {
  movies: Array<{
    Title: string;
    Poster: string;
    Country: string;
    Genre: string;
    Language: string;
    BoxOffice: string;
    Runtime: string;
    Director: string;
    Writer: string;
    Actors: string;
    imdbVotes: string;
    Plot: string;
    Awards: string;
    Released: string;
    Website: string;
  }>;
}

type GlobalContextType = {
  movies: Movie[] | any;
};

const Banner = () => {
  // const { movieDetails } = useContext(GlobalContext);
  const context = useContext(GlobalContext) as GlobalContextType;
  const { movieDetails } = context;
  // const { movies } = useContext(GlobalContext) as GlobalContextType;
  // const movieDetails = movies[0];

  return (
    <div className="container text-white">
      <div className="flex lg:flex-row flex-col my-10">
        <div className="overflow-hidden sm:w-[300px] w-full h-auto">
          {movieDetails?.Poster === "N/A" ? (
            <img
              className="w-full h-full object-cover"
              src="/not_found.jpg"
              alt={movieDetails?.Title}
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={movieDetails?.Poster}
              alt={movieDetails?.Title}
            />
          )}
        </div>
        <div className="flex-1 lg:pt-0 pt-3 lg:ml-5 lg:p-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
            {movieDetails?.Title}
          </h3>
          <div className="pt-3 space-y-3">
            <p>
              Country :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.Country}
              </span>
            </p>
            <p>
              Genre :
              <span className="text-[lightgreen]"> {movieDetails?.Genre}</span>
            </p>
            <p>
              Language :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.Language}
              </span>
            </p>

            <p>
              Box-Office :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.BoxOffice}
              </span>
            </p>
            <p>
              Runtime :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.Runtime}
              </span>
            </p>
            <p>
              Director :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.Director}
              </span>
            </p>
            <p>
              Writer :
              <span className="text-[lightgreen]"> {movieDetails?.Writer}</span>
            </p>
            <p>
              Actors :
              <span className="text-[lightgreen]"> {movieDetails?.Actors}</span>
            </p>
            <p>
              imdb Votes :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.imdbVotes}
              </span>
            </p>
            <p>
              Plot :
              <span className="text-[lightgreen]"> {movieDetails?.Plot}</span>
            </p>
            <p>
              Awards :
              <span className="text-[lightgreen]"> {movieDetails?.Awards}</span>
            </p>
            <p>
              Released :
              <span className="text-[lightgreen]">
                {" "}
                {movieDetails?.Released}
              </span>
            </p>
            <p>
              Website :
              <span className="text-[lightgreen]">
                {movieDetails?.Website === "N/A" ? (
                  <span className="text-red-600"> N/A</span>
                ) : (
                  <a href="{movieDetails?.Website}" target="_blank">
                    {movieDetails?.Website}
                  </a>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
