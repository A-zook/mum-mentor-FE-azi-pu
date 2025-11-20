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

type PerkCardProps = {
  title: string;
  description: string;
};

type VerificationStatus = "loading" | "success" | "error";

interface VerifyEmailPayload {
  token: string;
}

interface VerifyEmailResponse {
  message: string;
}

interface ResendVerificationPayload {
  email: string;
}

interface ResendVerificationResponse {
  message: string;
}

interface VerificationStatusProps {
  status: Status;
}
