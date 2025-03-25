import React from "react";

const TermsOfService = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#3A703F] mb-8">
        Terms of Service
      </h2>
      <p className="text-xl text-gray-700 mb-6">
        Welcome to Attohfield! These Terms of Service ("Terms") govern your use
        of our website and services, and by accessing or using our website, you
        agree to comply with these Terms. Please read them carefully.
      </p>

      {/* 1. Acceptance of Terms */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          1. Acceptance of Terms
        </h3>
        <p className="text-gray-700">
          By accessing or using Attohfield’s website and services, you agree to
          be bound by these Terms. If you do not agree with these Terms, you may
          not use our services.
        </p>
      </section>

      {/* 2. Services Provided */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          2. Services Provided
        </h3>
        <p className="text-gray-700">
          Attohfield offers online agricultural services, including information
          on farming, supplies, and community engagement. These services are
          provided through our website and any associated mobile applications or
          platforms.
        </p>
      </section>

      {/* 3. User Responsibilities */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          3. User Responsibilities
        </h3>
        <p className="text-gray-700">
          As a user of our website, you agree to:
          <ul className="list-disc pl-6 mt-2">
            <li>
              Provide accurate, current, and complete information when using our
              services.
            </li>
            <li>
              Refrain from any unlawful activities or actions that may harm the
              functionality of our website.
            </li>
            <li>
              Not engage in spamming, phishing, or other malicious activities.
            </li>
          </ul>
        </p>
      </section>

      {/* 4. Limitation of Liability */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          4. Limitation of Liability
        </h3>
        <p className="text-gray-700">
          To the fullest extent permitted by law, Attohfield is not liable for
          any damages or losses arising from the use of our services. This
          includes direct, indirect, incidental, or consequential damages, even
          if we were advised of the possibility of such damages.
        </p>
      </section>

      {/* 5. Intellectual Property */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          5. Intellectual Property
        </h3>
        <p className="text-gray-700">
          All content on our website, including text, images, logos, and
          trademarks, are the property of Attohfield and are protected by
          copyright and intellectual property laws in Ghana and internationally.
          You may not use any content without prior written consent.
        </p>
      </section>

      {/* 6. Termination */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          6. Termination
        </h3>
        <p className="text-gray-700">
          We reserve the right to suspend or terminate your access to our
          services at any time if we believe you have violated these Terms or
          engaged in any unlawful activity. You may also terminate your account
          by contacting us.
        </p>
      </section>

      {/* 7. Consumer Protection */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          7. Consumer Protection
        </h3>
        <p className="text-gray-700">
          We are committed to ensuring that your rights as a consumer under
          Ghana’s Consumer Protection Act, 2019 (Act 978) are upheld. This
          includes your right to:
          <ul className="list-disc pl-6 mt-2">
            <li>
              Receive accurate information about our products and services.
            </li>
            <li>
              Request refunds or replacements for defective products as per
              applicable laws.
            </li>
            <li>
              Access dispute resolution mechanisms in the event of a complaint.
            </li>
          </ul>
        </p>
      </section>

      {/* 8. Governing Law */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          8. Governing Law
        </h3>
        <p className="text-gray-700">
          These Terms will be governed by and construed in accordance with the
          laws of Ghana. Any disputes arising from the use of our services will
          be subject to the exclusive jurisdiction of the courts in Ghana.
        </p>
      </section>

      {/* 9. Privacy and Data Collection */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          9. Privacy and Data Collection
        </h3>
        <p className="text-gray-700">
          By using our services, you consent to the collection and processing of
          your personal data as described in our{" "}
          <a href="/privacy-policy" className="text-[#83CA13]">
            Privacy Policy
          </a>
          . We take your privacy seriously and comply with Ghana’s Data
          Protection Act, 2012 (Act 843).
        </p>
      </section>

      {/* 10. Changes to Terms */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          10. Changes to Terms
        </h3>
        <p className="text-gray-700">
          We may update these Terms of Service from time to time. Any changes
          will be posted on this page with an updated "Last Modified" date.
          Please review this page periodically to stay informed of any updates.
        </p>
      </section>

      {/* 11. Contact Information */}
      <section>
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          11. Contact Information
        </h3>
        <p className="text-gray-700">
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <span className="font-semibold">attohfields@gmail.com</span>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
