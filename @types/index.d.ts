interface FAQItem {
  question: string;
  answer: string;
}

interface DesktopNavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  hasNotification?: boolean;
}

interface StepBlockProps {
  step: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
  };
}

interface WaitlistPayload {
  full_name: string;
  email: string;
}

interface WaitlistResponse {
  message: string;
}
