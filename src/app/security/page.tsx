export default function SecurityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider text-gray-900 mb-8">Security</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Our Commitment to Security</h2>
          <p>
            At Credit Coffee, we prioritize the security of your financial information and personal data. 
            We implement industry-standard security measures and continuously update our practices to 
            protect against emerging threats.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Data Protection</h2>
          <p className="mb-4">
            We employ multiple layers of security to protect your information:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>End-to-end encryption for all data transmission</li>
            <li>Secure socket layer (SSL) technology for website security</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication for account access</li>
            <li>Advanced fraud detection systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Account Security</h2>
          <p className="mb-4">
            To help protect your account:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use strong, unique passwords</li>
            <li>Enable two-factor authentication</li>
            <li>Regularly monitor your account activity</li>
            <li>Keep your contact information up to date</li>
            <li>Never share your login credentials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Secure Transactions</h2>
          <p>
            All financial transactions are protected by:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>PCI DSS compliance for payment processing</li>
            <li>Tokenization for sensitive payment data</li>
            <li>Real-time transaction monitoring</li>
            <li>Secure payment gateways</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Security Certifications</h2>
          <p className="mb-4">
            We maintain the following security certifications and standards:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>ISO 27001 Information Security Management</li>
            <li>PCI DSS Level 1 Service Provider</li>
            <li>SOC 2 Type II compliance</li>
            <li>Regular third-party security audits</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability or have concerns about our security practices, 
            please contact our security team immediately at:
            <br />
            Email: security@creditcoffee.com
            <br />
            Phone: (800) 555-0123 (Security Hotline)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Security Updates</h2>
          <p>
            We regularly update our security measures and will notify you of any significant changes 
            that may affect your account security.
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