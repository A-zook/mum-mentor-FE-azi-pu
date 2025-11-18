// pages/terms.tsx
import Head from "next/head";
import { NextPage } from "next";
import HeroSection from "@/components/layout/HeroSection";
const TermsAndConditions: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <HeroSection />
      <Head>
        <title>Terms & Conditions | UXTheme</title>
        <meta name="description" content="UXTheme Terms and Conditions" />
      </Head>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
        <div className="bg-gray-800 px-6 py-4 text-white">
          <h1 className="text-2xl font-bold">Terms & Conditions</h1>
        </div>

        <div className="px-6 py-4">
          <div className="prose max-w-none">
            <p className="mb-4">
              By accessing and placing an order with UXTheme, you confirm that
              you are in agreement with and bound by the terms and conditions.
            </p>

            <p className="mb-4">
              By accessing and placing an order with UXTheme, you confirm that
              you are in agreement with and bound by the terms and conditions
              contained in the Terms Of Use outlined below. These terms apply to
              the entire website and any email or other type of communication
              between you and UXTheme. Under no circumstances, and UXTheme team
              be liable for any direct, indirect, special, incidental or
              consequential damages, including, but not limited to, use of data
              or profit, arising out of the value, or the facility&apos;s value,
              the material misuse, where UXTheme teams are authorised
              representative has been advised of the possibility of such
              damages. If you use of materials from this site results in the
              need for servicing, repair or correction of equipment or data, you
              assume any costs thereof. UXTheme will not be responsible for any
              outcome that may occur during the course of usage of our
              resources.
            </p>

            <h2 className="mt-6 mb-4 text-xl font-semibold">License</h2>

            <p className="mb-4">
              By purchasing or downloading resource (&quot;team&quot; or
              &quot;site&quot;) you are being granted a license to use these
              files for specific uses since certain conditions. Ownership
              remains with UXTheme, and you are required to quickly try to
              inform a licensing terms.
            </p>

            <h2 className="mt-6 mb-4 text-xl font-semibold">Security</h2>

            <ul className="mb-4 list-disc pl-6">
              <li className="mb-2">
                You have rights for royalty fees use of our resources for any as
                all of your personal.
              </li>
              <li className="mb-2">
                You are not required to attribute or link to UXTheme in any of
                projects.
              </li>
              <li className="mb-2">
                We reserve the rights to change prices and revise the resources
                usage policy in any moment.
              </li>
            </ul>

            <h2 className="mt-6 mb-4 text-xl font-semibold">
              Embedded content from other websites
            </h2>

            <p className="mb-4">
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behooves in the exact same way as if the visitor has visited the
              other website.
            </p>

            <p className="mb-4">
              These websites may collect data about you, use cookies, embed
              additional third-party tradings, and monitor your
            </p>

            <div className="mt-8 border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500">Changes above</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
