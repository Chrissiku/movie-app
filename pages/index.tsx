import { Inter } from "@next/font/google";
import SubHomePage from "@/components/pages/Home";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./_app";
const inter = Inter({ subsets: ["latin"] });

type MovieData = {
  text: String;
  setMovies: any;
  Search: any;
};

const Home = ({ data }: { data: MovieData }) => {
  const { text, setMovies } = useContext(GlobalContext);

  useEffect(() => {
    const fetchMovies = async () => {
      await fetch(`http://www.omdbapi.com/?apikey=208c5684&s=${text}`)
        .then((response) => response.json())
        .then((res) => {
          setMovies(res?.Search);
        })
        .catch((error) => {

        });
    };
    fetchMovies();
  }, [text, setMovies]);

  useEffect(() => {
    setMovies(data?.Search);
  }, [setMovies, data]);

  return (
    <>
      <div>
        <SubHomePage />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=208c5684&s=Batman`
    )
      .then((result) => result.json())
      .then((res) => res);

    return {
      props: { data: response },
    };
  } catch (error) {

  }
};

export default Home;
