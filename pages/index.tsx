import { Inter } from "@next/font/google";
import SubHomePage from "@/components/pages/Home";
const inter = Inter({ subsets: ["latin"] });

type Data = {
  data: any;
};

const Home = ({ data }: Data) => {
  console.log({ movieData: data });
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
      "http://www.omdbapi.com/?apikey=208c5684&s=Batman"
    )
      .then((result) => result.json())
      .then((res) => res);

    return {
      props: { data: response },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Home;
