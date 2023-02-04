import React, { useContext, useEffect } from "react";
import SubMovieDetails from "@/components/pages/MovieDetails";
import { GlobalContext } from "../_app";

const MovieDetails = ({ data }) => {
  const { setMovieDetails } = useContext(GlobalContext);

  useEffect(() => {
    setMovieDetails(data);
  }, [data, setMovieDetails]);

  return <SubMovieDetails data={data} />;
};

export const getServerSideProps = async (ctx) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=208c5684&i=${ctx?.query?.id}`
    )
      .then((result) => result.json())
      .then((res) => res);

    return {
      props: { data: response },
    };
  } catch (error) {

  }
  return {
    props: { data: null },
  };
};

export default MovieDetails;
