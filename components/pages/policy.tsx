"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
export const Privacy: NextPage = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-balance text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg font-semibold text-gray-600">
            We respect your privacy and keep your information safe.
          </p>
          <p className="mt-2 text-sm text-gray-500">Effective: July 29, 2025</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-12">
            <section id="introduction">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Introduction
              </h2>
              <p className="leading-relaxed text-gray-600">
                This Privacy Policy explains how we collect, use, share, and
                protect your personal information when you use our services. By
                accessing or using our platform, you agree to the terms outlined
                in this policy. If you do not agree, please do not use our
                services.
              </p>
            </section>
            <section id="information-we-collect">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                We may collect personal information such as your name, email
                address, and details, and any other information you provide when
                signing up or using our services. We also collect data about the
                pages or features you access, the duration of your visits, and
                your interaction with the platform. Additionally, we
                automatically collect technical information, including your IP
                address, browser type, device information, operating system,
                location, question IP address, and other details automatically
                collected through cookies and tracking technologies.
              </p>
            </section>
            <section id="how-we-use">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                How We Use the Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Providing and Personalizing the Service
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Your information is used to deliver, personalize, customize,
                    and improve our services. This includes operating our
                    platform and responding to your requests and inquiries. Your
                    data helps us suggest relevant content, features, and
                    resources tailored to your preferences and usage patterns.
                    We rely on your data to understand user behavior, improve
                    existing features, identify issues, and introduce new
                    capabilities. This information also helps generate relevant
                    recommendations for content, activities, community support,
                    food plans, and fundraising opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Communication and Engagement
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    We use your contact information to communicate with you,
                    including sending email. This helps us improve performance,
                    fix bugs, resolve conflicts, and enhance the overall
                    experience of our platform. We also use your data to detect,
                    prevent, and address security issues, fraud, and other
                    harmful activities.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Compliance and Content Moderation
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Your information is used to detect and prevent abuse or
                    policy violations by users. We use your information to
                    ensure compliance with laws, legal processes, and our Terms
                    of Service. We may use data to enforce our platform&apos;s
                    policies and regulations to maintain a safe and positive
                    environment for all users. We may aggregate or anonymize
                    data to produce insights and statistics about platform
                    usage, always ensuring your personal information remains
                    confidential and cannot be linked back to you individually.
                  </p>
                </div>
              </div>
            </section>
            <section id="data-sharing">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Data Sharing and Disclosure
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Service Providers
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    We may share a limited amount of trusted third-party
                    providers (cloud hosting, analytics, customer support, and
                    payment processors) to operate our platform. These providers
                    are contractually bound to GDPR confidential obligations and
                    may process data on our behalf.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Legal Requirements
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    We may disclose your information if required by law, court
                    order, or to protect the rights, property, or safety of
                    Nora, our users, or the public.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Business Transfers
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    In the event of a merger, acquisition, or sale of assets,
                    your data would only be transferred under reasonable privacy
                    protections.
                  </p>
                </div>
              </div>
            </section>
            <section id="data-retention">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Data Retention and Deletion
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Conservation History
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    We retain your personal information as long as necessary to
                    support content and services, comply with legal obligations,
                    resolve disputes, and enforce agreements. If you request
                    that we delete your data, we will do so within a timely
                    manner unless it is required for compliance or operational
                    circumstances or storage purposes allowable by law.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    Account Deletion
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    If you want to delete your account and associated personal
                    data, you may submit a request or by contacting customer
                    service. All user-data is permanently deleted within 30
                    days, although local copies and anonymized copies of data
                    may be retained as needed to comply with our legal
                    obligations and improve our services.
                  </p>
                </div>
              </div>
            </section>
            <section id="security">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Security of Your Information
              </h2>
              <p className="leading-relaxed text-gray-600">
                We employ industry-leading security measures to protect your
                information. All data is encrypted in transit using HTTPS and at
                rest using AES-256 encryption. We implement strong access
                controls, regular third-party security audits and penetration
                tests to ensure the platform remains secure. Access to personal
                systems is strictly limited to authorized personnel. However, no
                system can be completely secure. While we strive to protect your
                information, all information is stored in secure data centers
                that meet SOC 2 Type II, ISO 27001 and equivalent certification
                standards. Although we employ best practices to mitigate risks,
                we treat security as our highest technical priority and
                continuously work to strengthen our protections.
              </p>
            </section>
            <section id="childrens-privacy">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Children&apos;s Privacy (COPPA Compliance)
              </h2>
              <p className="leading-relaxed text-gray-600">
                Our platform is not intended for children under the age of 13
                and we do not knowingly collect personal information from
                children under 13. If we discover we have inadvertently
                collected data from a child under 13, we will delete the
                information as quickly as possible. If you believe a child has
                provided us with their data without parental authorization, it
                is your responsibility to contact us and request that the
                information is deleted.
              </p>
            </section>
            <section id="international-transfers">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                International Data Transfers
              </h2>
              <p className="leading-relaxed text-gray-600">
                Nora is operated from Nigeria, and your information is primarily
                processed and stored within the country. We use secure,
                encrypted connections and work with partners in regions like
                South Africa and Nigeria with robust data protection standards.
                For services such as ISO 27001 and SOC 2 Type II certifications
                to ensure data protection practices. When possible, for example,
                we use services like AWS (Amazon Web Services) and Microsoft
                United States for specific technical services - those transfers
                are carried out in compliance with the Nigeria Data Protection
                Regulation (NDPR) and international frameworks where safeguards.
                These include adequacy decisions where applicable, the use of
                Standard Contractual Clauses approved by relevant authorities,
                and binding commitments from international Commission, Binding
                Corporate Rules where relevant, and additional protective
                measures such as encryption and pseudonymization. For any data
                processed by third-party sub-processors, we ensure that those
                entities continuously monitor legal requirements across
                jurisdictions and work only with partners who uphold the highest
                standards for data protection. For users in the European
                Economic Area, the United Kingdom, or Switzerland, your data
                enjoys additional safeguards - including the right to lodge a
                complaint with your local Data Protection Impact Assessment - to
                ensure that your data receives a level of protection that meets
                or exceeds the requirements of the General Data Protection
                Regulation (GDPR). Where transfers occur outside the EEA / UK,
                we have implemented appropriate safeguards in accordance with
                Article 46 of the Data Protection Act 2023 and processes
                strictly in accordance with the principles of lawfulness,
                fairness, transparency, purpose limitation, data accuracy,
                storage limitation, data integrity, confidentiality, and
                accountability.
              </p>
            </section>
            2:38
            <section id="privacy-rights">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Your Privacy Rights
              </h2>
              <p className="leading-relaxed text-gray-600">
                Depending on where you live, you may have certain rights
                regarding your personal data, which may include: The right to
                access the personal information we hold about you. The right to
                request correction of inaccurate information, and the right to
                request deletion of your data. You may also have the right to
                restrict how your information is processed and object to its
                processing. In certain circumstances, you may request a copy of
                your personal data in a structured, commonly used, and
                machine-readable format (data portability). For the right to
                withdraw consent for data processing, particularly where consent
                is the legal basis. To exercise any of these rights, please
                contact us at support@norainternational.ai. Our team is here to
                ensure that you receive personalized responses. If you believe
                that we have not responded appropriately to your request, you
                may file a complaint with your local data protection authority.
              </p>
            </section>
            <section id="policy-changes">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Changes to This Policy
              </h2>
              <p className="leading-relaxed text-gray-600">
                We may update this policy from time to time. Any changes will be
                posted here with a new &quot;Effective Date&quot;. Material
                changes will be communicated directly by email and you will be
                given a reasonable notice period.
              </p>
            </section>
            <section id="contact-us">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                If you have any questions, concerns, or requests regarding our
                privacy or how your information is handled at Nora (and related
                services), please reach out to us. We are here to support you
                and ensure your privacy is protected. You can reach us at
                support@norainternational.ai. Our team is here to ensure that
                you receive personalized responses, and you should also include
                relevant information in your email to help us respond more
                effectively.
              </p>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-600">
                  Contact us: support@norainternational.ai
                </p>
                {/* <button className="rounded-lg bg-red-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600">
                  Download PDF
                </button> */}
              </div>
            </section>
          </div>
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Table of Content
              </h3>
              <nav>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#introduction"
                      onClick={(e) => handleNavClick(e, "introduction")}
                      className={`block transition-colors ${
                        activeSection === "introduction"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#information-we-collect"
                      onClick={(e) =>
                        handleNavClick(e, "information-we-collect")
                      }
                      className={`block transition-colors ${
                        activeSection === "information-we-collect"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Information We Collect
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-we-use"
                      onClick={(e) => handleNavClick(e, "how-we-use")}
                      className={`block transition-colors ${
                        activeSection === "how-we-use"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      How We Use Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#data-sharing"
                      onClick={(e) => handleNavClick(e, "data-sharing")}
                      className={`block transition-colors ${
                        activeSection === "data-sharing"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Data Sharing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#data-retention"
                      onClick={(e) => handleNavClick(e, "data-retention")}
                      className={`block transition-colors ${
                        activeSection === "data-retention"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Data Retention and Deletion
                    </a>
                  </li>
                  <li>
                    <a
                      href="#security"
                      onClick={(e) => handleNavClick(e, "security")}
                      className={`block transition-colors ${
                        activeSection === "security"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Security of Your Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#childrens-privacy"
                      onClick={(e) => handleNavClick(e, "childrens-privacy")}
                      className={`block transition-colors ${
                        activeSection === "childrens-privacy"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Children&apos;s Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#international-transfers"
                      onClick={(e) =>
                        handleNavClick(e, "international-transfers")
                      }
                      className={`block transition-colors ${
                        activeSection === "international-transfers"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      International Data Transfers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy-rights"
                      onClick={(e) => handleNavClick(e, "privacy-rights")}
                      className={`block transition-colors ${
                        activeSection === "privacy-rights"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Your Privacy Rights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#policy-changes"
                      onClick={(e) => handleNavClick(e, "policy-changes")}
                      className={`block transition-colors ${
                        activeSection === "policy-changes"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Changes to This Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact-us"
                      onClick={(e) => handleNavClick(e, "contact-us")}
                      className={`block transition-colors ${
                        activeSection === "contact-us"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact-us"
                      onClick={(e) => handleNavClick(e, "contact-us")}
                      className={`block transition-colors ${
                        activeSection === "contact-us"
                          ? "font-medium text-red-500"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Last Updated
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
