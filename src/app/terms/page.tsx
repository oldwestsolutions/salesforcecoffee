export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider text-gray-900 mb-8">Terms and Conditions</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Agreement to Terms</h2>
          <p>
            By accessing or using Credit Coffee's services, you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Financial Services</h2>
          <p className="mb-4">
            Our services include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Business lending and financing solutions</li>
            <li>Merchant services and payment processing</li>
            <li>Credit card services</li>
            <li>Point of sale systems</li>
          </ul>
          <p className="mt-4">
            Credit Coffee is a financial technology company, not a bank. Banking services are provided 
            by our partner banks. Brokerage services are provided by Credit Coffee Securities LLC, 
            member FINRA/SIPC.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">User Responsibilities</h2>
          <p className="mb-4">
            You agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized use</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Fees and Payments</h2>
          <p>
            Fees for our services will be clearly disclosed before any transaction. You agree to pay 
            all fees associated with your use of our services. We reserve the right to modify our 
            fees with appropriate notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Intellectual Property</h2>
          <p>
            The Credit Coffee name, logo, website, and all content remain our exclusive property. 
            You may not use our intellectual property without express written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Limitation of Liability</h2>
          <p>
            Credit Coffee shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the State 
            of Washington, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any 
            material changes via email or through our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Contact Information</h2>
          <p>
            For questions about these Terms and Conditions, please contact us at:
            <br />
            Email: legal@creditcoffee.com
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