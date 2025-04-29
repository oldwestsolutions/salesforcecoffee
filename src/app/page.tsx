import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Minimal Hero Section with Two Columns */}
      <section className="relative min-h-[80vh] md:min-h-[60vh] flex flex-col md:flex-row">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 bg-gray-900 flex items-center justify-center p-8 md:p-12 order-2 md:order-1">
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-4">CREDIT COFFEE</h1>
            <p className="text-sm md:text-base tracking-wider text-gray-300 mb-8">SEATTLE'S FINEST ARTISAN COFFEE</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/menu" 
                className="border border-white text-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-gray-900 transition-colors"
              >
                VIEW MENU
              </Link>
              <Link 
                href="/about" 
                className="border border-white text-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-gray-900 transition-colors"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-auto order-1 md:order-2">
          <div className="relative h-full">
            <Image
              src="/images/seattle-coffee.jpg"
              alt="Seattle coffee shop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl font-light tracking-wider text-gray-800 mb-4">OUR SIGNATURE BREWS</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Handcrafted with care, our signature blends are inspired by the rich coffee culture of Seattle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "SEATTLE CLASSIC",
                description: "A smooth blend with notes of dark chocolate and cedar",
                price: "$4.50",
                image: "/images/classic.jpg"
              },
              {
                name: "MOUNTAIN MIST",
                description: "Inspired by the Cascade Mountains, with hints of berry and pine",
                price: "$5.00",
                image: "/images/mocha.jpg"
              },
              {
                name: "PUGET SOUND",
                description: "A coastal blend with subtle sea salt and caramel notes",
                price: "$5.50",
                image: "/images/caramel.jpg"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative h-48 sm:h-56 md:h-64 mb-4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-light tracking-wider text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                <p className="text-gray-800 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] order-2 md:order-1">
            <Image
              src="/images/coffee-shop.jpg"
              alt="Credit Coffee shop interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-light tracking-wider text-gray-800 mb-6">OUR STORY</h2>
            <p className="text-gray-500 text-sm mb-4">
              Nestled in the heart of Seattle, Credit Coffee was born from a passion for exceptional coffee and a love for the Pacific Northwest. Our space reflects the natural beauty of the region, with warm woods and minimalist design.
            </p>
            <p className="text-gray-500 text-sm">
              We source our beans from sustainable farms in the Pacific Northwest and beyond, roasting them in small batches to bring out their unique character. Every cup tells a story of craftsmanship and care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light tracking-wider text-gray-800 mb-6">JOIN OUR COFFEE COMMUNITY</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
            Stay updated with our latest blends, events, and coffee brewing tips. Sign up for our newsletter and be part of our Seattle coffee journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm border border-gray-200 focus:outline-none focus:border-gray-400"
            />
            <button className="bg-gray-900 text-white px-6 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
