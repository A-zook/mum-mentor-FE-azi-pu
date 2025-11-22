import About from "@/components/pages/about";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage: NextPage = () => <About />;

export default AboutPage;
