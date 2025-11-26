import Link from "next/link";
import playstoreBadge from "@/public/assets/images/play-store.svg";
import appstoreBadge from "@/public/assets/images/app-store.svg";
import Image from "next/image";

interface AppStoreButtonProps {
  href?: string;
  className?: string;
}

// Google Play Button Component
export const GooglePlayButton = ({
  href = "https://appetize.io/embed/b_3b2wefjpzmqffiemrlhk26zjum",
  className = "",
}: AppStoreButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex transition-transform hover:scale-105 ${className}`}
    >
      <div className="flex h-14 items-center gap-3 rounded-lg border border-white bg-black px-5">
        <Image
          src={playstoreBadge}
          alt="Google Play Badge"
          width={32}
          height={32}
          className="h-6 w-6 sm:h-8 sm:w-8"
        />
        <div className="text-center">
          <p className="text-[8px] leading-tight font-normal text-gray-300 uppercase">
            GET IT ON
          </p>
          <p className="text-sm leading-tight font-semibold text-white sm:text-lg">
            Google Play
          </p>
        </div>
      </div>
    </Link>
  );
};

// App Store Button Component
export const AppStoreButton = ({
  href = "https://appetize.io/embed/b_3b2wefjpzmqffiemrlhk26zjum",
  className = "",
}: AppStoreButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex transition-transform hover:scale-105 ${className}`}
    >
      <div className="flex h-14 items-center gap-3 rounded-lg border border-white bg-black px-5">
        <Image
          src={appstoreBadge}
          alt="App Store Badge"
          width={32}
          height={32}
          className="h-6 w-6 sm:h-8 sm:w-8"
        />
        <div className="text-center">
          <p className="text-[8px] leading-tight font-normal text-gray-300 uppercase">
            Download on the
          </p>
          <p className="text-sm leading-tight font-semibold text-white sm:text-lg">
            App Store
          </p>
        </div>
      </div>
    </Link>
  );
};

// Combined Component (for convenience)
export const AppStoreButtons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col gap-4 md:flex-row ${className}`}>
      <GooglePlayButton />
      <AppStoreButton />
    </div>
  );
};

export default AppStoreButtons;
