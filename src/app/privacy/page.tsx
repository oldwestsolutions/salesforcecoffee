export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create an account or apply for our services</li>
            <li>Use our financial products or services</li>
            <li>Contact us for support or information</li>
            <li>Sign up for our newsletters or updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Process your transactions and maintain your account</li>
            <li>Provide customer service and respond to your inquiries</li>
            <li>Send you important information about our services</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Prevent fraud and enhance security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Information Sharing</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Financial institutions that partner with us</li>
            <li>Law enforcement or regulatory bodies when required</li>
            <li>Other parties with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. 
            However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of certain data sharing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@creditcoffee.com
            <br />
            Phone: (800) 555-0123
          </p>
        </section>

        <section>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  );
} 