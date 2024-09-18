import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Pricing from "./pricing/page";
import Navigation from "@/components/HomePageNav/page";
import HomeImage from "@/images/HomeImage.png"

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Welcome to InvoEase</h1>
            <p className="text-lg md:text-xl mb-4 md:mb-6">Manage your invoices easily and efficiently with our platform.</p>
            <a href="/#features" className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg transition hover:bg-blue-700">
              Get Started
            </a>
          </div>
          
          {/* Hero SVG Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <Image src={HomeImage} width={300} height={300} alt="Hero Illustration" />
          </div>
        
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
              <h3 className="text-lg md:text-xl font-bold mb-4">Create Invoices</h3>
              <p>Generate invoices for your clients with a few clicks. Save time and ensure accuracy.</p>
            </div>
            <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
              <h3 className="text-lg md:text-xl font-bold mb-4">Track Payments</h3>
              <p>Easily monitor which invoices have been paid and which are outstanding.</p>
            </div> 
            <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
              <h3 className="text-lg md:text-xl font-bold mb-4">Manage Clients</h3>
              <p>Store all your client information in one place for easier management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg transition hover:shadow-xl">
              <p className="italic">"This invoicing dashboard has streamlined my billing process and saved me so much time!"</p>
              <p className="mt-4 text-right">— Sarah, Freelancer</p>
            </div>
            <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg transition hover:shadow-xl">
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
    </div>
  );
}
