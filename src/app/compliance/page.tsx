export default function CompliancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-light tracking-wider text-gray-900 mb-8">Compliance</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Regulatory Compliance</h2>
          <p>
            Credit Coffee operates in full compliance with applicable federal, state, and local laws 
            and regulations governing financial services. We maintain a robust compliance program 
            to ensure adherence to all regulatory requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Key Regulations</h2>
          <p className="mb-4">
            Our operations comply with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bank Secrecy Act (BSA) and Anti-Money Laundering (AML) regulations</li>
            <li>USA PATRIOT Act requirements</li>
            <li>Gramm-Leach-Bliley Act (GLBA) privacy provisions</li>
            <li>Fair Credit Reporting Act (FCRA)</li>
            <li>Electronic Fund Transfer Act (EFTA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Compliance Program</h2>
          <p className="mb-4">
            Our comprehensive compliance program includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dedicated compliance team and officer</li>
            <li>Regular risk assessments and audits</li>
            <li>Employee training and awareness programs</li>
            <li>Internal controls and monitoring systems</li>
            <li>Third-party compliance reviews</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Anti-Money Laundering</h2>
          <p>
            We maintain a robust AML program that includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Customer identification and verification</li>
            <li>Transaction monitoring and reporting</li>
            <li>Suspicious activity detection</li>
            <li>Sanctions screening</li>
            <li>Record keeping and reporting requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Consumer Protection</h2>
          <p className="mb-4">
            We are committed to protecting consumer rights and ensuring fair treatment:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Transparent fee structures and disclosures</li>
            <li>Fair lending practices</li>
            <li>Responsible underwriting standards</li>
            <li>Clear communication of terms and conditions</li>
            <li>Accessible customer service and dispute resolution</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Data Privacy</h2>
          <p>
            Our data privacy practices comply with:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>State-specific privacy laws</li>
            <li>Industry best practices for data protection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Compliance Reporting</h2>
          <p>
            For compliance-related inquiries or to report potential violations, please contact:
            <br />
            Email: compliance@creditcoffee.com
            <br />
            Phone: (800) 555-0123 (Compliance Hotline)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Regulatory Disclosures</h2>
          <p>
            Credit Coffee is a financial technology company, not a bank. Banking services are provided 
            by our partner banks, Member FDIC. Brokerage services are provided by Credit Coffee 
            Securities LLC, member FINRA/SIPC.
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