import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer id="footer" className="bg-white py-6 mt-16 ">
      <div className="container mx-auto text-center text-black">
        <div className="text-black mb-4">
          <p>&copy; {new Date().getFullYear()} InvoEase. All rights reserved.</p>
        </div>

        {/* Links Section */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-black">Home</a>
          <a href="#about" className="text-gray-400 hover:text-black">About</a>
          <a href="#pricing" className="text-gray-400 hover:text-black">Pricing</a>
          <a href="#contact" className="text-gray-400 hover:text-black">Contact</a>
        </div>

        {/* Privacy & Terms Section */}
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-black mx-2">Privacy Policy</a>|
          <a href="#" className="text-gray-400 hover:text-black mx-2">Terms of Service</a>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center space-x-6 mt-6">
          <i className="fas fa-file-invoice text-gray-400 hover:text-black text-2xl"></i>
          <i className="fas fa-calculator text-gray-400 hover:text-black text-2xl"></i>
          <i className="fas fa-dollar-sign text-gray-400 hover:text-black text-2xl"></i>
          <i className="fas fa-credit-card text-gray-400 hover:text-black text-2xl"></i>
          <i className="fas fa-handshake text-gray-400 hover:text-black text-2xl"></i>
        </div>
      </div>
    </footer>
  );
}
