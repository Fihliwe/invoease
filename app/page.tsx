import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Pricing from "./pricing/page";
import Navigation from "@/components/HomePageNav/page";
import HomeImage from "@/images/HomeImage.png"
import Footer from "@/app/footer/page";


export default function Home() {
  
  return (
    <div>
        {/* Navigation Bar */}
        <Navigation />

        {/* Hero Section */}
        <section id="home" className="bg-gray-100 py-8 md:py-16">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-0">

            {/* Hero Text Section */}
            <div className="text-center md:text-left md:w-1/2 px-6">
              {/* Hero Heading with Animation */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 transition-transform duration-500 hover:scale-105">
                Welcome to InvoEase
              </h1>
              {/* Hero Subtitle */}
              <p className="text-lg md:text-xl mb-4 md:mb-6">Manage your invoices easily and efficiently with our platform.</p>
              {/* Animated Button */}
              <a href="/#features" className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg transition-transform duration-500 hover:scale-110 hover:bg-gray-400">
                Get Started
              </a>
            </div>

            {/* Hero SVG Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <Image src={HomeImage} width={1000} height={1000} alt="Hero Illustration" />
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-8 md:py-16 text-white shadow-lg rounded-lg transition hover:shadow-xl">
          <div className="container mx-auto px-4 md:px-0">
            {/* Animated Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 transition-transform duration-500 hover:scale-105">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Features Cards */}
              <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-black">Create Invoices</h3>
                <p className="text-black">Generate invoices for your clients with a few clicks. Save time and ensure accuracy.</p>
              </div>
              <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-black">Track Payments</h3>
                <p className="text-black">Easily monitor which invoices have been paid and which are outstanding.</p>
              </div>
              <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-black">Manage Clients</h3>
                <p className="text-black">Store all your client information in one place for easier management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-0">
            {/* Animated Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 transition-transform duration-500 hover:scale-105">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Testimonials Cards */}
              <div className="bg-black p-4 md:p-6 shadow-lg rounded-lg transition hover:shadow-xl text-white">
                <p className="italic">"This invoicing dashboard has streamlined my billing process and saved me so much time!"</p>
                <p className="mt-4 text-right">— Sarah, Freelancer</p>
              </div>
              <div className="bg-black text-white p-4 md:p-6 shadow-lg rounded-lg transition hover:shadow-xl">
                <p className="italic">"The best invoicing tool for small businesses, hands down."</p>
                <p className="mt-4 text-right">— John, Small Business Owner</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-0">
            <About />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-50 py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-0">
            <Pricing />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-16">
          <div className="container mx-auto px-4 md:px-0">
            <Contact />
          </div>
        </section>
        <Footer />
      </div>
  );
}