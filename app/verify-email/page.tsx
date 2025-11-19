import { VerifyEmail } from "@/components/pages/verify-email";
import { NextPage } from "next";
import { Suspense } from "react";
import Loading from "../loading";

const VerifyEmailPage: NextPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <VerifyEmail />
    </Suspense>
  );
};

export default VerifyEmailPage;
