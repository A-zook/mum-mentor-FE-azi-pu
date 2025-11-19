"use client";

import React from "react";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 py-10">
      <Image
        src="/assets/images/policy_img.png"
        alt="Background"
        className="h-full w-full object-cover"
        width={800}
        height={600}
        priority
      />
      <div className="flex min-h-screen justify-center bg-white px-4 py-10 text-gray-800">
        <div className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row">
          {/* MOBILE FIRST: TABLE OF CONTENTS */}
          <aside className="order-1 rounded-lg bg-gray-50 p-8 lg:hidden">
            <h2 className="mb-6 text-xl font-bold">Table of contents</h2>
            <ul className="space-y-4 text-red-600">
              <li>1. Introduction</li>
              <li>2. Information We Collect</li>
              <li>3. How We Use the Information We Collect</li>
              <li>4. Data Sharing and Disclosure</li>
              <li>5. Data Retention and Deletion</li>
              <li>6. Security of Your Information</li>
              <li>
                7. Children&apos;s Privacy <br />
                (COPPA Compliance)
              </li>
              <li>8. International Data Transfers</li>
              <li>9. Your Privacy Rights</li>
              <li>10. Changes to This Policy</li>
              <li>11. Contact Us</li>
            </ul>
          </aside>

          {/* LEFT CONTENT */}
          <div className="order-2 flex-1 space-y-12 lg:order-1">
            {/* INTRODUCTION */}
            <section className="p-8">
              <h1 className="mb-4 text-3xl font-bold text-red-600">
                Introduction
              </h1>
              <p>
                This Privacy Policy explains how we collect, use, store, share,
                and protect your information when you use NORA Mum Mentor AI
                (the mobile app, website, and all related services).
              </p>
              <p className="mt-3">
                By using NORA, you agree to the practices described in this
                policy. We may update this policy from time to time. Any changes
                will be posted here with a new &quot;Effective&quot; date at the top, and
                we&apos;ll let you know inside the app or by email if the changes are
                important. Continuing to use NORA after the update means you
                accept the new version.
              </p>
            </section>

            {/* INFORMATION WE COLLECT */}
            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Information We Collect
              </h2>

              <h3 className="mb-2 text-lg font-semibold">
                Things you choose to share with Nora
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>Your conversations and questions</li>
                <li>Any photos, files, documents, or voice notes you send</li>
                <li>
                  Your email or a name, only if you decide to create a profile
                </li>
              </ul>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Things we collect automatically
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>Basic device info (like phone model and OS)</li>
                <li>
                  How you use the app (timestamps, chat length, features you
                  use)
                </li>
                <li>Anonymous crash reports so we can fix bugs quickly</li>
                <li>
                  Very rough location from your IP (only to stop fraud or abuse,
                  we delete it fast and never store it long-term)
                </li>
              </ul>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Things we promise we never collect
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Your real name, phone number, or email (unless you give them)
                </li>
                <li>Your exact GPS location</li>
                <li>
                  Contacts, calendar, photos, microphone, or camera (unless you
                  specifically allow it)
                </li>
                <li>Payment or card details</li>
                <li>Biometric data (fingerprints, face ID, etc.)</li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                How We Use the Information We Collect
              </h2>

              <h3 className="mb-2 text-lg font-semibold">
                Providing and Personalizing the Service
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Deliver responses, remember conversation context, and offer
                  continuity (e.g., &quot;Last week you mentioned your toddler is
                  allergic to eggs, so here are egg-free breakfast ideas&quot;).
                </li>
                <li>
                  Generate tailored suggestions for routines, activities,
                  emotional support, meal plans, and scheduling.
                </li>
              </ul>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Improving the AppThings we collect automatically
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Analyse usage patterns (anonymously) to understand which
                  features moms love most.
                </li>
                <li>Identify and fix bugs, crashes, or slow performance.</li>
              </ul>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Safety and Content Moderation
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Detect and prevent abuse, harmful advice, or policy
                  violations.
                </li>
                <li>Keep the community safe for all parents.</li>
              </ul>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Research and Model Training
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  We may use fully anonymized and aggregated conversation data
                  to train and improve future versions of the AI.
                </li>
                <li>
                  No personal identifiers, no raw conversations, and no way to
                  re-identify you or your family ever.
                </li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Data Sharing and Disclosure
              </h2>

              <h3 className="mb-2 text-lg font-semibold">Service Providers</h3>
              <p className="ml-6">
                We work with a small number of trusted third-party providers
                (cloud hosting, analytics, error monitoring) who are bound by
                strict contractual obligations and only process data on our
                behalf.
              </p>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Business Transfers
              </h3>
              <p className="ml-6">
                In the unlikely event of a merger, acquisition, or sale of
                assets, your data would only be transferred under equivalent or
                stronger privacy protections.
              </p>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Data Retention and Deletion
              </h2>

              <h3 className="mb-2 text-lg font-semibold">
                Conversation History
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Chats are retained only as long as necessary for context and
                  functionality (typically 90 days).
                </li>
                <li>
                  You can delete individual conversations or your entire history
                  at any time with one tap.
                </li>
              </ul>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Account Deletion
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Request full deletion via Settings → &quot;Delete My Account&quot; or by
                  emailing support@mommentor.ai.
                </li>
                <li>
                  All personal data is permanently erased within 30 days (most
                  requests are completed within 24–48 hours).
                </li>
                <li>
                  After deletion, no trace of your chats or profile remains
                  recoverable.
                </li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Security of Your Information
              </h2>

              <h3 className="mb-2 text-lg font-semibold">
                We employ industry-leading security measures, including:
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  End-to-end encryption for all messages in transit and at rest
                </li>
                <li>
                  Regular third-party security audits and penetration testing
                </li>
                <li>
                  Strict access controls (only a handful of authorized team
                  members can access systems, and never raw user data)
                </li>
                <li>
                  Secure data centers with ISO 27001, SOC 2 Type II, and
                  equivalent certifications
                </li>
                <li>
                  While no system can be 100% immune, we treat security as our
                  highest technical priority.
                </li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Children&apos;s Privacy (COPPA Compliance)
              </h2>
              <p>
                Mom Mentor AI is designed exclusively for parents and guardians
                aged 18 and older. We do not knowingly collect personal
                information from children under 13. If we discover any
                child-related data has been uploaded inadvertently, it is
                immediately and permanently deleted.
              </p>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                International Data Transfers
              </h2>
              <p>
                Mom Mentor AI is operated from Nigeria. Your information will be
                processed and stored primarily in Nigeria. We use secure,
                regionally-compliant data centers located in Africa (primarily
                South Africa and Nigeria) that meet or exceed international
                standards, including ISO 27001 and SOC 2 Type II certifications.
              </p>
              <p className="mt-4">
                If any data needs to be transferred outside Africa (for example,
                to trusted subprocessors in the European Union or the United
                States for specific technical services), such transfers are
                governed by:
              </p>
              <ul className="mt-2 ml-6 list-disc space-y-1">
                <li>The Nigeria Data Protection Act (NDPA) 2023.</li>
                <li>Adequacy decisions where applicable</li>
                <li>
                  Standard Contractual Clauses (SCCs) approved by the European
                  Commission and/or the Nigeria Data Protection Commission.
                </li>
                <li>Binding Corporate Rules (where applicable)</li>
                <li>
                  Additional supplementary measures (encryption,
                  pseudonymization, etc.) to ensure protection essentially
                  equivalent to Nigerian and GDPR-level standards
                </li>
              </ul>
              <p className="mt-4">
                We continuously monitor the legal landscape in all jurisdictions
                and only work with partners who provide the highest level of
                data protection.
              </p>
              <p className="mt-4">
                For users in the European Economic Area, United Kingdom, or
                Switzerland: Although our primary processing takes place in
                Nigeria, we have implemented safeguards (including the latest EU
                Standard Contractual Clauses and a Transfer Impact Assessment)
                so that your data receives a level of protection that meets or
                exceeds GDPR requirements.
              </p>
              <p className="mt-4">
                For Nigerian users: Your data is protected under the Nigeria
                Data Protection Act 2023 and handled exclusively in accordance
                with the principles of lawfulness, fairness, transparency,
                purpose limitation, data minimization, accuracy, storage
                limitation, integrity, confidentiality, and accountability.
              </p>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Your Privacy Rights
              </h2>
              <p className="mb-4">
                Depending on where you live, you may have the following rights:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Access – receive a copy of your data</li>
                <li>Rectification – correct inaccurate information</li>
                <li>Deletion – erase your data</li>
                <li>Restriction – limit processing in certain cases</li>
                <li>Portability – receive your data in a structured format</li>
                <li>Objection – object to certain types of processing</li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. Any changes will be
                posted here with a new &quot;Effective Date.&quot; Material changes will
                be communicated inside the app and/or via email (if you&apos;ve
                provided one).
              </p>
            </section>

            <section className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding your
                privacy or how your information is handled on MUM Mentor AI, you
                can contact our support team directly. We are committed to
                addressing all inquiries promptly and providing clear guidance
                regarding our privacy practices. For immediate assistance,
                please reach out via email at{" "}
                <a href="mailto:support@mummentor.ai" className="text-red-300">
                  support@mummentor.ai
                </a>
                . Our team is here to ensure that you remain informed,
                empowered, and confident while using MUM Mentor AI.
              </p>
            </section>

            <section className="flex flex-col items-center justify-between gap-6 p-8 text-red-500 sm:flex-row">
              <a href="mailto:suppoert@mummentor.ai">
                contact us: suppoert@mummentor.ai
              </a>
            </section>
          </div>

          {/* DESKTOP/TABLET: TABLE OF CONTENTS */}
          <aside className="sticky top-10 order-2 hidden h-fit rounded-lg bg-gray-50 p-8 lg:block lg:w-1/3">
            <h2 className="mb-6 text-xl font-bold">Table of contents</h2>
            <ul className="space-y-4 text-red-600">
              <li>1. Introduction</li>
              <li>2. Information We Collect</li>
              <li>3. How We Use the Information We Collect</li>
              <li>4. Data Sharing and Disclosure</li>
              <li>5. Data Retention and Deletion</li>
              <li>6. Security of Your Information</li>
              <li>
                7. Children&apos;s Privacy <br />
                (COPPA Compliance)
              </li>
              <li>8. International Data Transfers</li>
              <li>9. Your Privacy Rights</li>
              <li>10. Changes to This Policy</li>
              <li>11. Contact Us</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}