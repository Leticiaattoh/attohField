import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#3A703F] mb-8">Privacy Policy</h2>
      <p className="text-xl text-gray-700 mb-6">
        This Privacy Policy explains how we collect, use, and protect your
        personal data in compliance with the Data Protection Act, 2012 (Act 843)
        of Ghana.
      </p>

      {/* 1. Introduction */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          1. Introduction
        </h3>
        <p className="text-gray-700">
          At Attohfield, we respect your privacy and are committed to protecting
          your personal data. This Privacy Policy outlines the types of personal
          data we collect, how we use it, and the measures we take to ensure it
          is protected.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          2. Information We Collect
        </h3>
        <p className="text-gray-700">
          We collect the following types of personal data:
          <ul className="list-disc pl-6 mt-2">
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing and shipping information (for purchases)</li>
            <li>
              Cookies and usage data (e.g., browsing behavior on our website)
            </li>
          </ul>
        </p>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          3. How We Use Your Information
        </h3>
        <p className="text-gray-700">
          Your personal data is used for the following purposes:
          <ul className="list-disc pl-6 mt-2">
            <li>To process your orders and deliver products to you</li>
            <li>To send you updates about your orders</li>
            <li>To improve our website and services</li>
            <li>For marketing purposes (with your consent)</li>
          </ul>
        </p>
      </section>

      {/* 4. User Rights */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          4. Your Rights
        </h3>
        <p className="text-gray-700">
          Under the Data Protection Act, you have the following rights:
          <ul className="list-disc pl-6 mt-2">
            <li>The right to access your personal data</li>
            <li>The right to correct any inaccurate or incomplete data</li>
            <li>The right to request the deletion of your data</li>
            <li>The right to withdraw consent for data processing</li>
          </ul>
          If you wish to exercise any of these rights, please contact us at{" "}
          <span className="font-semibold">attohfields@gmail.com</span>.
        </p>
      </section>

      {/* 5. Data Security */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          5. Data Security
        </h3>
        <p className="text-gray-700">
          We take appropriate technical and organizational measures to protect
          your personal data from unauthorized access, disclosure, alteration,
          and destruction. This includes encryption and secure servers.
        </p>
      </section>

      {/* 6. Sharing Your Data */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          6. Sharing Your Data
        </h3>
        <p className="text-gray-700">
          We do not sell or rent your personal data to third parties. However,
          we may share your data with trusted third-party service providers who
          assist us in delivering our services (e.g., payment processors,
          delivery companies). These third parties are obligated to maintain the
          confidentiality and security of your data.
        </p>
      </section>

      {/* 7. International Data Transfers */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          7. International Data Transfers
        </h3>
        <p className="text-gray-700">
          If we transfer your data outside of Ghana, we will ensure that the
          recipient country has adequate data protection laws or we will
          implement appropriate safeguards to protect your data.
        </p>
      </section>

      {/* 8. Changes to This Policy */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          8. Changes to This Policy
        </h3>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Last Modified" date. Please
          review this policy periodically to stay informed about how we are
          protecting your data.
        </p>
      </section>

      {/* 9. Contact Us */}
      <section>
        <h3 className="text-2xl font-semibold text-[#3A703F] mb-4">
          9. Contact Us
        </h3>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy or how
          we handle your personal data, please contact us at{" "}
          <span className="font-semibold">attohfields@gmail.com</span>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
