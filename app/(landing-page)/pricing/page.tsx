// app/(landing-page)/pricing/page.tsx
import Pricing from "@/components/pages/pricing";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

const PricingPage: NextPage = () => <Pricing />;

export default PricingPage;
