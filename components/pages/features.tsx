import { OurFeatures, NotAlone, WhyThisWorks} from "@/module/features";
import { NextPage } from "next";


const Features: NextPage = () => {
  return (
    <div>
      <OurFeatures />
      <WhyThisWorks />
      <NotAlone />
    </div>
  );
};

export default Features;
