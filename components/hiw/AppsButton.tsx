import AppStoreBtn from "@/public/assets/icons/app-store.svg";
import PlayStoreBtn from "@/public/assets/icons/play-store.svg";

import Image from "next/image";

export default function AppsButton() {
  return (
    <div className="flex items-center gap-6 mt-24">
      <button aria-label="play store button">
        <Image
          src={PlayStoreBtn}
          alt="play store button"
          quality={100}
          priority
        />
      </button>

      <button aria-label="app store button">
        <Image
          src={AppStoreBtn}
          alt="app store button"
          quality={100}
          priority
        />
      </button>
    </div>
  );
}
