"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";

export const Terms: NextPage = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "welcome",
        "your-journey",
        "role-of-nora",
        "responsible-use",
        "subscriptions",
        "changes",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const tocItems = [
    { id: "welcome", label: "Welcome to Nora", number: 1 },
    { id: "your-journey", label: "Your Journey, Your Content", number: 2 },
    { id: "role-of-nora", label: "Roles of Nora", number: 3 },
    {
      id: "responsible-use",
      label: "Responsible use and Community Spirit",
      number: 4,
    },
    { id: "subscriptions", label: "Subscriptions and Billings", number: 5 },
    { id: "changes", label: "Changes to terms", number: 6 },
  ];
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mx-auto mb-2 max-w-2xl text-lg text-gray-600">
          These are the terms and conditions we expect our users to adhere to.
        </p>
        <p className="text-sm text-gray-500">Effective: July 28, 2025</p>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="shrink-0 md:w-72">
            <div className="md:sticky md:top-8">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Nora Terms Of Use
              </h2>
              <nav>
                <ol className="space-y-3">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left transition-colors ${
                          activeSection === item.id
                            ? "font-medium text-red-500"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {item.number}. {item.label}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>
          <main className="max-w-3xl flex-1">
            <section id="welcome" className="mb-12 scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Welcome To Nora!
              </h2>
              <p className="leading-relaxed text-gray-700">
                We&apos;re so glad you&apos;re here! NoraAI is designed to be
                your supportive digital companion throughout your motherhood
                journey, offering guidance, connection, and reassurance. These
                Terms of Service (Terms) outline the rules for using our app and
                website. By accessing or using NoraAI, you agree to these Terms.
                Please read them carefully.
              </p>
            </section>
            <section id="your-journey" className="mb-12 scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Your Journey, Your Content
              </h2>
              <p className="leading-relaxed text-gray-700">
                You&apos;ll be sharing your experiences, questions, and precious
                memories (photos!) with us. We understand how personal this
                journey is. You retain all rights to the content you create and
                upload. We will only use your content to provide and improve the
                NoraAI service to you, as outlined in our Privacy Policy.
              </p>
            </section>
            <section id="role-of-nora" className="mb-12 scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                The Role of Nora!
              </h2>
              <p className="leading-relaxed text-gray-700">
                NoraAI provides general guidance, emotional support, and
                informational resources. It is not a substitute for professional
                medical, psychological, or legal advice. Always consult with
                qualified healthcare professionals for specific concerns
                regarding your health, your baby&apos;s health, or any personal
                situation. Our AI offers companionship and information, but
                cannot diagnose, treat, or offer professional interventions.
              </p>
            </section>
            <section id="responsible-use" className="mb-12 scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Responsible Use & Community Spirit
              </h2>
              <p className="leading-relaxed text-gray-700">
                We foster a supportive and respectful environment. Please use
                NoraAI responsibly. Do not share offensive, harmful, or
                inappropriate content. We reserve the right to remove content or
                suspend accounts that violate this spirit of support and
                respect.
              </p>
            </section>
            <section id="subscriptions" className="mb-12 scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Subscriptions & Billing
              </h2>
              <p className="leading-relaxed text-gray-700">
                Access to certain features of NoraAI is provided through paid
                subscriptions (e.g., &apos;My Nurturing Hub,&apos; &apos;Always
                By Your Side&apos;). Your subscription will automatically renew
                unless cancelled. You can manage or cancel your subscription at
                any time through your account settings. Refunds are subject to
                our refund policy, available on our website.
              </p>
            </section>
            <section id="changes" className="mb-12 scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Change to Terms
              </h2>
              <p className="leading-relaxed text-gray-700">
                Motherhood evolves, and so might our app! We may update these
                Terms from time to time. We&apos;ll notify you of any
                significant changes, and your continued use of NoraAI means you
                accept the updated Terms.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
