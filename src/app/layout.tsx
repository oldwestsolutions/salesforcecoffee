import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credit Coffee - Seattle's Artisan Coffee",
  description: "Experience Seattle's finest artisan coffee in a cozy, woodsy atmosphere. Where every cup is crafted with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-gray-50`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-light text-gray-800 tracking-wider">
                CREDIT COFFEE
              </Link>
              <Link 
                href="/login" 
                className="text-sm tracking-wider text-gray-800 hover:text-gray-600 transition-colors"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-light tracking-wider text-gray-800 mb-4">CREDIT COFFEE</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Empowering small businesses through innovative financial solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-light tracking-wider text-gray-800 mb-4">PRODUCTS</h3>
                <ul className="space-y-2">
                  <li><Link href="/business-loans" className="text-gray-500 hover:text-gray-700 text-sm">Business Loans</Link></li>
                  <li><Link href="/merchant-services" className="text-gray-500 hover:text-gray-700 text-sm">Merchant Services</Link></li>
                  <li><Link href="/credit-cards" className="text-gray-500 hover:text-gray-700 text-sm">Credit Cards</Link></li>
                  <li><Link href="/pos-systems" className="text-gray-500 hover:text-gray-700 text-sm">POS Systems</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-light tracking-wider text-gray-800 mb-4">COMPANY</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-500 hover:text-gray-700 text-sm">About Us</Link></li>
                  <li><Link href="/careers" className="text-gray-500 hover:text-gray-700 text-sm">Careers</Link></li>
                  <li><Link href="/press" className="text-gray-500 hover:text-gray-700 text-sm">Press</Link></li>
                  <li><Link href="/contact" className="text-gray-500 hover:text-gray-700 text-sm">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-light tracking-wider text-gray-800 mb-4">LEGAL</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</Link></li>
                  <li><Link href="/security" className="text-gray-500 hover:text-gray-700 text-sm">Security</Link></li>
                  <li><Link href="/compliance" className="text-gray-500 hover:text-gray-700 text-sm">Compliance</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-8 pt-8">
              <div className="text-center text-gray-400 text-sm">
                <p className="mb-2">© {new Date().getFullYear()} Credit Coffee. All rights reserved.</p>
                <p className="text-xs">
                  Credit Coffee is a financial technology company, not a bank. Banking services provided by our partner banks. 
                  Brokerage services provided by Credit Coffee Securities LLC, member FINRA/SIPC.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
