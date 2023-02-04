import { createContext, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const GlobalContext = createContext({});

const App = ({ Component, pageProps }: AppProps) => {
  const [text, setText] = useState("Batman");
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  const initialValue = {
    text,
    setText,
    movies,
    setMovies,
    movieDetails,
    setMovieDetails,
  };

  return (
    <GlobalContext.Provider value={initialValue}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

export default App;
