import { NextPage } from "next";

const Terms: NextPage = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-0 lg:py-20">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Terms and Conditions
      </h1>
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to Nora. These Terms and Conditions govern your use of our
          services. By accessing or using our services, you agree to comply with
          these terms.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">
          2. User Responsibilities
        </h2>
        <p>
          You agree to use our services responsibly and not engage in any
          activities that may harm the platform or other users.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">3. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and protect your information.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">
          4. Limitation of Liability
        </h2>
        <p>
          Nora shall not be liable for any damages arising from the use or
          inability to use our services.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be effective upon posting on our website.
        </p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">6. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at <a href="mailto:info@nora.com">info@nora.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Terms;
