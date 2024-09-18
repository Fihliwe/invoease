export default function Footer() {
    return (
      <footer id="footer" className="bg-black py-6 mt-16 ">
        <div className="container mx-auto text-center">
          <div className="text-white mb-4">
            <p>&copy; {new Date().getFullYear()} InvoEase. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>|
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  