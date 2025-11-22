import WhoAreWeImage from "@public/assets/images/WhoAreWeImage.png";
import Image from "next/image";

export default function WhoWeAreImage({ className }: { className: string }) {
  return (
    <div
      className={`relative h-[287px] overflow-hidden rounded-md md:w-1/2 ${className}`}
    >
      <Image
        src={WhoAreWeImage}
        alt="Who are we image, A mother sleeping near her baby"
        quality={100}
        placeholder="blur"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
