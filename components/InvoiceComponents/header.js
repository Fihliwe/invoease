import React, { useState } from 'react';
import handlePrint from "@/Buttons/handlePrint";


export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSend = () => {
    // Logic to send email (e.g., API call)
    console.log("Sending invoice to:", email);
    setModalIsOpen(false);
    setEmail(""); // Clear input
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">InvoEase</h1>
        </div>
      </header>

      <div>
        <ul className="flex items-center justify-between flex-wrap">
          <li>
            <button
              onClick={handlePrint}
              className="btn btn-print bg-black text-white font-bold py-2 px-8 rounded shadow 
              border-2 border-black hover:bg-transparent hover:text-black 
              transition-all duration-300">
              Print
            </button>
          </li>
          <li>
            <button className="btn btn-download bg-black text-white font-bold py-2 px-8 rounded shadow 
              border-2 border-black hover:bg-transparent hover:text-black 
              transition-all duration-300">
              Download
            </button>
          </li>
          <li>
            <button
              onClick={() => setModalIsOpen(true)}
              className="btn btn-print-send bg-black text-white font-bold py-2 px-8 rounded shadow 
              border-2 border-black hover:bg-transparent hover:text-black 
              transition-all duration-300"
            >
              Send
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
