import React from "react";
import Footer from "@/components/layout/Footer";
import Button from "@/components/UI/Button";
import HeroSection from "@/components/layout/HeroSection";

const TermsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-center bg-white px-4 py-8 text-gray-800 sm:px-6 md:px-8 lg:px-12">
      <HeroSection />
      <div className="w-full max-w-3xl md:max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          Terms & Conditions
        </h1>

        {/* ===================== TERMS OF SERVICE ===================== */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold md:text-2xl">
            Mum Mentor AI: Terms of Service
          </h2>

          <div>
            <h3 className="font-semibold">1. Welcome to Mum Mentor AI:</h3>
            <p className="text-base leading-relaxed md:text-lg">
              We&apos;re so glad you&apos;re here! Mum Mentor AI is designed to
              be your supportive digital companion throughout your motherhood
              journey, offering guidance, connection, and reassurance. By
              accessing or using Mum Mentor AI, you agree to these Terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. Your Journey, Your Content:</h3>
            <p className="text-base leading-relaxed md:text-lg">
              You&apos;ll be sharing your experiences, questions, and precious
              memories with us. You retain all rights to the content you create
              and upload. We only use your content to improve the service, as
              explained in our Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. The Role of Mum Mentor AI</h3>
            <p className="text-base leading-relaxed md:text-lg">
              Mum Mentor AI provides general guidance, emotional support, and
              informational resources. It is not a substitute for professional
              medical, psychological, or legal advice.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              4. Responsible Use & Community Spirit
            </h3>
            <p className="text-base leading-relaxed md:text-lg">
              Please use Mum Mentor AI responsibly. Do not share offensive,
              harmful, or inappropriate content. We may suspend accounts that
              violate these rules.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">5. Subscriptions & Billing</h3>
            <p className="text-base leading-relaxed md:text-lg">
              Some features require a paid subscription. Subscriptions renew
              automatically unless cancelled. Refunds follow our refund policy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">6. Changes to Terms</h3>
            <p className="text-base leading-relaxed md:text-lg">
              We may update these Terms when necessary. Continued use of the app
              means you accept the updated Terms.
            </p>
          </div>
        </section>

        {/* ===================== PRIVACY POLICY ===================== */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl font-semibold md:text-2xl">
            Mum Mentor AI: Privacy Policy
          </h2>

          <div>
            <h3 className="font-semibold">1. Your Privacy, Our Priority</h3>
            <p className="text-base leading-relaxed md:text-lg">
              We respect your privacy and collect information only to support
              your experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. What We Collect</h3>
            <ul className="ml-6 list-disc space-y-1 text-base leading-relaxed md:text-lg">
              <li>Account details (name, email, baby&apos;s age)</li>
              <li>Photos & memories you upload</li>
              <li>Anonymous usage data</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">3. How We Use Your Information</h3>
            <ul className="ml-6 list-disc space-y-1 text-base leading-relaxed md:text-lg">
              <li>Personalized guidance</li>
              <li>Curated content</li>
              <li>App improvements</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">4. Sharing Your Information</h3>
            <p className="text-base leading-relaxed md:text-lg">
              We never sell your data. We only share information with trusted
              service providers who help us run the app securely.
            </p>
          </div>
        </section>

        {/* ===================== EXTRA SECTION FROM IMAGE ===================== */}
        <section className="mt-10 space-y-6">
          <h3 className="text-base font-semibold md:text-lg">
            3. How We Use Your Information (for Your Benefit)
          </h3>
          <ul className="ml-6 list-disc space-y-1 text-base leading-relaxed md:text-lg">
            <li>Deliver personalized emotional support and guidance.</li>
            <li>Proactively send stage-specific advice and reminders.</li>
            <li>
              Curate your &apos;Memory Lane&apos; and provide
              &apos;flashback&apos; reminders.
            </li>
            <li>
              Communicate with you about updates, features, and offers (you can
              opt-out).
            </li>
            <li>Ensure the security and stability of our service.</li>
          </ul>

          <h3 className="text-base font-semibold md:text-lg">
            4. Sharing Your Information (Never Without Your Trust)&quot;We will
            never sell your personal data to third parties :
          </h3>
          <p className="text-base leading-relaxed md:text-lg">
            We may share anonymized, aggregated data for research or service
            improvement. We may use trusted third-party service providers (e.g.,
            cloud hosting, payment processors) who are contractually bound to
            protect your data and only use it for the services we specify.
          </p>

          <h3 className="text-base font-semibold md:text-lg">
            5. Data Security
          </h3>
          <p className="text-base leading-relaxed md:text-lg">
            We employ robust security measures (encryption, access controls) to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. While no system is 100%
            secure, we are committed to safeguarding your data.
          </p>

          <h3 className="text-base font-semibold md:text-lg">
            6. Your Choices & Rights
          </h3>
          <ul className="ml-6 list-disc space-y-1 text-base leading-relaxed md:text-lg">
            <li>
              Access, review, or update your personal information through your
              account settings.
            </li>
            <li>Request deletion of your account and personal data.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Disable the &apos;Memory Lane&apos; feature at any time.</li>
          </ul>

          <h3 className="text-base font-semibold md:text-lg">7. Contact Us</h3>
          <p className="text-base leading-relaxed md:text-lg">
            If you have any questions or concerns about your privacy, please
            don&apos;t hesitate to contact us at support@mummentor.ai.com
          </p>

          {/* ACCEPT BOX */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border bg-gray-50 p-4 sm:flex-row sm:items-center">
            <label className="flex items-start gap-2 text-sm sm:items-center">
              <input type="checkbox" className="mt-1 h-4 w-4 sm:mt-0" />
              <span>
                By continuing, you agree to our{" "}
                <span className="font-semibold">Terms & Conditions</span>
              </span>
            </label>
            <div className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Accept
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
