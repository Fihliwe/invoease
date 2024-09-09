
export default function Pricing() {
  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12">Pricing</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Basic Plan</h2>
              <p className="text-2xl mb-6">$9/month</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Manage up to 50 invoices</li>
                <li>Email support</li>
              </ul>
              <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Started</a>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Pro Plan</h2>
              <p className="text-2xl mb-6">$29/month</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Unlimited invoices</li>
                <li>Priority support</li>
                <li>Custom branding</li>
              </ul>
              <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Started</a>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Enterprise</h2>
              <p className="text-2xl mb-6">Contact us</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Custom invoice limits</li>
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
              </ul>
              <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
