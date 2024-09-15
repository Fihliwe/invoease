import { url } from "inspector";
import About from "./about/page";
import Contact from "./contact/page";
import Pricing from "./pricing/page";
import Navigation from "@/components/HomePageNav/page";


export default function Home() {
  return (
    <div>
      <Navigation/>
      <section id="home" 
        className="bg-gray-100 py-16 bg-cover bg center">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">Welcome to InvoEase</h1>
            <p className="text-xl mb-6">Manage your invoices easily and efficiently with our platform.</p>
            <a href="/#features" className="bg-black text-white px-6 py-3 rounded-lg  transition">
              Get Started
            </a>
          </div>
      </section>
      

      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Create Invoices</h3>
              <p>Generate invoices for your clients with a few clicks. Save time and ensure accuracy.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Track Payments</h3>
              <p>Easily monitor which invoices have been paid and which are outstanding.</p>
            </div> 
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Manage Clients</h3>
              <p>Store all your client information in one place for easier management.</p>
            </div>
          </div>
        </div>
      </section>

      <section  className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="italic">"This invoicing dashboard has streamlined my billing process and saved me so much time!"</p>
              <p className="mt-4 text-right">— Sarah, Freelancer</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="italic">"The best invoicing tool for small businesses, hands down."</p>
              <p className="mt-4 text-right">— John, Small Business Owner</p>
            </div>
          </div>
        </div>
      </section>
      {/** for navbar to scroll to about section */}
      <section id="about">
        <About/>
      </section>

      {/** for navbar to scroll to the pricing section */}
      <section id="pricing">
        <Pricing/>
      </section>

      {/** for navbar to scroll to contact section */}
      <section id="contact">
        <Contact/>
      </section>
      
    </div>
  );
}