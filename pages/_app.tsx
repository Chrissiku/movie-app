import { createContext, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const GlobalContext = createContext({});

const App = ({ Component, pageProps }: AppProps) => {
  const [text, setText] = useState("Batman");
  const [movies, setMovies] = useState([]);

  const initialValue = {
    text,
    setText,
    movies,
    setMovies,
  };

  return (
    <GlobalContext.Provider value={initialValue}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

export default App;
