import { AIInsight, Hero } from "@/module/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AIInsight />
    </div>
  );
};

export default Home;
