import FAQAccordion from "@/components/faq";
import HeroSection from "@/module/waitlist/HeroSection";
import ImageGallery from "@/module/waitlist/ImageGallery";
import PerksSection from "@/module/waitlist/PerkSection";

export default function Waitlist() {
  return (
    <main>
      <HeroSection />
      <ImageGallery />
      <PerksSection />
      <FAQAccordion />
    </main>
  );
}
