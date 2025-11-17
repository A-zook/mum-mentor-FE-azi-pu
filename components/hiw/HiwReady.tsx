import AppsButton from "@/components/hiw/AppsButton";
import Ready from "@/public/assets/images/ready.png";

import Image from "next/image";

export default function HiwReady() {
  return (
    <div className="md:py-[60px] px-6">
      <div className="md:border md:border-[#E2E2E2] max-w-[1240px] mx-auto flex items-center justify-between flex-col md:flex-row gap-32 py-8 px-5 md:px-16 rounded-[8px]">
        <div className="flex items-center flex-col lg:max-w-[590px] md:items-start md:w-[50%] ">
          <div className="gap-4 flex-col flex">
            <h4 className="text-[32px] font-semibold text-center leading-tight text-primaryText-black md:text-left">
              Ready to Download NORA?
            </h4>

            <p className="text-lg text-center text-primaryText-black md:text-left lg:max-w-[590px]">
              Join women who want calm, caring guidance through pregnancy and
              motherhood. Download the app and start your journey today!
            </p>
          </div>

          <AppsButton />
        </div>

        <div>
          <Image
            src={Ready}
            alt="An image of 2 phones with nora app"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
