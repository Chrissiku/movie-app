import { Inter } from "@next/font/google";
import SubHomePage from "@/components/pages/Home";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div>
        <SubHomePage />
      </div>
    </>
  );
};

export default Home;
