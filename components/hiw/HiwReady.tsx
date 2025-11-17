import AppsButton from "@/components/hiw/AppsButton";
import Ready from "@public/assets/images/ready.png";

import Image from "next/image";

export default function HiwReady() {
  return (
    <div className="px-6 md:py-[60px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-32 rounded-[8px] px-5 py-8 md:flex-row md:border md:border-[#E2E2E2] md:px-16">
        <div className="flex flex-col items-center md:w-[50%] md:items-start lg:max-w-[590px]">
          <div className="flex flex-col gap-4">
            <h4 className="text-primaryText-black text-center text-[32px] leading-tight font-semibold md:text-left">
              Ready to Download NORA?
            </h4>

            <p className="text-primaryText-black text-center text-lg md:text-left lg:max-w-[590px]">
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
