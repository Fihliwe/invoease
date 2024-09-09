export default function About() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
          <p className="text-xl text-center mb-6">
            Our invoicing platform is designed to make managing invoices simple and effective for freelancers, small businesses, and enterprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p>To provide an easy-to-use invoicing solution that helps businesses of all sizes manage their billing needs more efficiently.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p>We envision a world where billing is no longer a burden, freeing businesses to focus on growth and customer relationships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
