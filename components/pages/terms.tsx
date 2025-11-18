import React from "react";
import Button from "@/components/UI/Button";

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 text-gray-800 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-justify">
        <h1 className="mb-6 text-center font-[HankenGrotesk] text-4xl font-bold md:text-5xl">
          Terms & Conditions
        </h1>

        {/* ===================== TERMS OF SERVICE ===================== */}
        <section className="space-y-6">
          <h2 className="text-center font-[HankenGrotesk] text-3xl font-semibold md:text-2xl">
            Mum Mentor AI: Terms of Service
          </h2>

          <div>
            <p className="font-[HankenGrotesk] text-3xl md:text-lg">
              <span className="font-[HankenGrotesk] text-3xl font-bold">
                1. Welcome to Mum Mentor AI! :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                We&apos;re so glad you&apos;re here! Mum Mentor AI is designed
                to be your supportive digital companion throughout your
                motherhood journey, offering guidance, connection, and
                reassurance. These Terms of Service (Terms) outline the rules
                for using our app and website. By accessing or using Mum Mentor
                AI, you agree to these Terms. Please read them carefully.
              </span>
            </p>
          </div>
          <div>
            <p className="font-[HankenGrotesk] text-xl font-medium md:text-lg">
              <span className="font-[HankenGrotesk] text-2xl font-bold">
                2. Your Journey, Your Content :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                You&apos;ll be sharing your experiences, questions, and precious
                memories (photos!) with us. We understand how personal this
                journey is. You retain all rights to the content you create and
                upload. We will only use your content to provide and improve the
                Mum Mentor AI service to you, as outlined in our Privacy Policy.
              </span>
            </p>
          </div>

          <div>
            <p className="font-[HankenGrotesk] text-xl font-medium md:text-lg">
              <span className="font-[HankenGrotesk] text-2xl font-bold">
                3. The Role of Mum Mentor AI :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                Mum Mentor AI provides general guidance, emotional support, and
                informational resources.{" "}
                <span className="font-[HankenGrotesk] text-2xl font-bold">
                  It is not a substitute for professional medical,
                  psychological, or legal advice.
                </span>{" "}
                Always consult with qualified healthcare professionals for
                specific concerns regarding your health, your baby&apos;s
                health, or any personal situation. Our AI offers companionship
                and information, but cannot diagnose, treat, or offer
                professional interventions.
              </span>
            </p>
          </div>

          <div>
            <p className="font-[HankenGrotesk] text-xl font-medium md:text-lg">
              <span className="font-[HankenGrotesk] text-2xl font-bold">
                4. Responsible Use & Community Spirit :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                We foster a supportive and respectful environment. Please use
                Mum Mentor AI responsibly. Do not share offensive, harmful, or
                inappropriate content. We reserve the right to remove content or
                suspend accounts that violate this spirit of support and
                respect.
              </span>
            </p>
          </div>

          <div>
            <p className="font-[HankenGrotesk] text-xl font-medium md:text-lg">
              <span className="font-[HankenGrotesk] text-2xl font-bold">
                5. Subscriptions & Billing :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                Access to certain features of Mum Mentor AI is provided through
                paid subscriptions (e.g., &apos;My Nurturing Hub,&apos;
                &apos;Always By Your Side&apos;). Your subscription will
                automatically renew unless cancelled. You can manage or cancel
                your subscription at any time through your account settings.
                Refunds are subject to our refund policy, available on our
                website.
              </span>
            </p>
          </div>

          <div>
            <p className="font-[HankenGrotesk] text-xl font-medium md:text-lg">
              <span className="font-[HankenGrotesk] text-2xl font-bold">
                6. Changes to Terms :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                Motherhood evolves, and so might our app! We may update these
                Terms from time to time. We&apos;ll notify you of any
                significant changes, and your continued use of Mum Mentor AI
                means you accept the updated Terms.
              </span>
            </p>
          </div>
        </section>

        {/* ===================== PRIVACY POLICY ===================== */}
        <section className="mt-10 space-y-8">
          <div className="text-center">
            <h1 className="mb-4 text-left font-[HankenGrotesk] text-3xl font-bold md:text-4xl">
              Mum Mentor AI: Privacy Policy
            </h1>
          </div>

          <div>
            <p className="font-[HankenGrotesk] text-xl font-medium md:text-lg">
              <span className="font-[HankenGrotesk] text-2xl font-bold">
                1. Your Privacy, Our Priority :{" "}
              </span>
              <span className="font-[HankenGrotesk] text-xl">
                At Mum Mentor AI, we deeply respect your privacy. We understand
                that the information you share with us about your motherhood
                journey, your child, and your feelings is incredibly personal.
                This Privacy Policy explains how we collect, use, and protect
                your data.
              </span>
            </p>
          </div>

          {/* Section 2 - What Information We Collect */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="font-[HankenGrotesk] text-2xl font-bold">
                2. What Information We Collect (and why)
              </h2>
            </div>

            <ul className="ml-6 list-disc space-y-3 font-[HankenGrotesk] text-base text-xl leading-relaxed md:text-lg">
              <li>
                <span className="font-[HankenGrotesk] text-2xl font-bold">
                  Information You Provide:
                </span>{" "}
                <span className="font-[HankenGrotesk] text-xl">
                  When you create an account, subscribe, or interact with our
                  AI, you provide us with details like your name, email,
                  baby&apos;s age, and your conversational inputs. We use this
                  to personalize your experience, provide relevant guidance, and
                  offer tailored support.
                </span>
              </li>
              <li>
                <span className="font-[HankenGrotesk] text-2xl font-bold">
                  Photos & Memories:
                </span>{" "}
                <span className="font-[HankenGrotesk] text-xl">
                  If you choose to upload photos for the &apos;Memory Lane&apos;
                  feature, they are securely stored and used only to create your
                  personal memory timelines within the app.
                </span>
              </li>
              <li>
                <span className="font-[HankenGrotesk] text-2xl font-bold">
                  Usage Data:
                </span>{" "}
                <span className="font-[HankenGrotesk] text-xl">
                  We collect anonymous data about how you use the app (e.g.,
                  features used, duration of sessions). This helps us understand
                  what works well and how to improve Mum Mentor AI, making it
                  more helpful for you and other mums.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 - What Information We Collect */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="font-[HankenGrotesk] text-2xl font-bold">
                3. How We Use Your Information (for Your Benefit) : We use your
                information to:
              </h2>
            </div>

            <ul className="ml-6 list-disc space-y-3 font-[HankenGrotesk] text-base leading-relaxed md:text-lg">
              <li>
                <span className="font-[HankenGrotesk] text-2xl font-bold">
                  Information You Provide:
                </span>{" "}
                Deliver personalized emotional support and guidance.
              </li>
              <li className="font-[HankenGrotesk] text-xl">
                Proactively send stage-specific advice and reminders.
              </li>
              <li className="font-[HankenGrotesk] text-xl">
                Curate your &apos;Memory Lane&apos; and provide
                &apos;flashback&apos; reminders.
              </li>
              <li className="font-[HankenGrotesk] text-xl">
                Improve our AI&apos;s understanding and responsiveness.
              </li>
              <li className="font-[HankenGrotesk] text-xl">
                Communicate with you about updates, features, and offers (you
                can opt-out).
              </li>
              <li className="font-[HankenGrotesk] text-xl">
                Ensure the security and stability of our service.
              </li>
            </ul>
          </div>

          {/* Section 4 - Sharing Your Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <p>
                <span className="font-[HankenGrotesk] text-xl font-semibold md:text-2xl">
                  4. Sharing Your Information (Never Without Your Trust)
                  &quot;we will never sell your personal data to third parties:
                </span>{" "}
                <span className="font-[HankenGrotesk] text-xl">
                  We may share anonymized, aggregated data for research or
                  service improvement. We may use trusted third-party service
                  providers (e.g., cloud hosting, payment processors) who are
                  contractually bound to protect your data and only use it for
                  the services we specify.
                </span>
              </p>
            </div>
          </div>

          {/* Section 5 - Data Security */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <p>
                <span className="font-[HankenGrotesk] text-xl font-semibold md:text-2xl">
                  5. Data Security :{" "}
                </span>{" "}
                <span className="font-[HankenGrotesk] text-base leading-relaxed md:text-lg">
                  We employ robust security measures (encryption, access
                  controls) to protect your personal information from
                  unauthorized access, alteration, disclosure, or destruction.
                  While no system is 100% secure, we are committed to
                  safeguarding your data.
                </span>
              </p>
            </div>
          </div>

          {/* Section 6 - Your Choices & Rights */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="font-[HankenGrotesk] text-xl font-semibold md:text-2xl">
                6. Your Choices & Rights{" "}
                <span className="font-[HankenGrotesk] text-2xl font-bold">
                  You have control over your data! You can:
                </span>
              </h2>
            </div>

            <ul className="ml-6 list-disc space-y-2 font-[HankenGrotesk] text-base leading-relaxed md:text-lg">
              <li>
                Access, review, or update your personal information through your
                account settings.
              </li>
              <li>Request deletion of your account and personal data.</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable the &apos;Memory Lane&apos; feature at any time</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <p>
                <span className="font-[HankenGrotesk] text-xl font-semibold md:text-2xl">
                  7. Contact Us :{" "}
                </span>{" "}
                <span className="font-[HankenGrotesk] text-base leading-relaxed md:text-lg">
                  If you have any questions or concerns about your privacy,
                  please don&apos;t hesitate to contact us at
                  support@mummentor.ai.com
                </span>
              </p>
            </div>
          </div>

          {/* ACCEPT BOX */}
          <div className="text-2lx mt-8 p-4 sm:flex-row sm:items-center">
            <label className="text-lx flex items-center justify-center gap-2 justify-self-center font-[HankenGrotesk] sm:items-center">
              <input type="checkbox" className="mt-1 h-4 w-4 sm:mt-0" />
              <span>
                By continuing, you agree to our{" "}
                <span className="font-semibold">Terms & Conditions</span>
              </span>
            </label>
          </div>
          <div className="flex w-full justify-center justify-self-center sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              Accept
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
