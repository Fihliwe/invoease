'use client';
import React, { useState } from "react";
import Footer from "@/components/InvoiceComponents/footer";
import Notes from "@/components/InvoiceComponents/notes";
import Header from "@/components/InvoiceComponents/header";
import Details from "@/components/InvoiceComponents/Details";
import ClientsDetails from "@/components/InvoiceComponents/ClientDetails";
import Date from "@/components/InvoiceComponents/Date";
import Table from "@/components/InvoiceComponents/table";

const { InvoiceNumber } = require('invoice-number');

export default function InvoicesPage() {
  // state values to toggle between the form and invoice
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [emails, setEmails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");

  const generateInvoiceNumber = () => {
    if (invoiceNumber) {
      const nextInvoiceNumber = InvoiceNumber.next(invoiceNumber);
      setInvoiceNumber(nextInvoiceNumber);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh

    const invoiceData = {
      name,
      address,
      clientName,
      clientAddress,
      invoiceNumber,
      invoiceDate,
      dueDate,
      notes,
      emails,
      phoneNumber,
      bankAccount,
      bankName,
    };

    try {
      const res = await fetch('/api/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Invoice submitted successfully:", data);
        setShowInvoice(true); // Show invoice preview
      } else {
        console.error("Failed to submit invoice");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      {/* Invoice Page */}
      <main className="m-5 p-5 xl:m-w-4xl xl:mx-auto bg-white rounded shadow flex min-h-vh">
        {showInvoice ? (
          <div>
            <Header />
            <div id="printableArea">
              <Details name={name} address={address} />
              <ClientsDetails clientName={clientName} clientAddress={clientAddress} />
              <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Table />
              <Notes notes={notes} />
              <Footer
                name={name}
                bankName={bankName}
                accountNumber={bankAccount}
                contactNumber={phoneNumber}
                yourEmail={emails}
              />
              <style jsx>{`
                @media print {
                  body * {
                    visibility: hidden;
                  }
                  #printableArea, #printableArea * {
                    visibility: visible;
                  }
                  #printableArea {
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                }
              `}</style>
            </div>

            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-black text-white font-bold py-2 px-8 rounded shadow border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
            >
              Edit Invoice
            </button>
          </div>
        ) : (
          <>
            {/* Invoice Form */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-center">
              <label htmlFor="name">Enter your name</label>
              <input
                className="mb-5"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoComplete="on"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Enter your Address</label>
              <input
                className="mb-5"
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="on"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="clientName">Enter your Client's Name</label>
              <input
                className="mb-5"
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your Client's Name"
                autoComplete="on"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Enter your Client's Address</label>
              <input
                className="mb-5"
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your Client's Address"
                autoComplete="on"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber">Enter your Invoice Number</label>
              <input
                className="mb-5"
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter your Invoice Number"
                autoComplete="on"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">Enter your Invoice Date</label>
              <input
                className="mb-5"
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your Invoice Date"
                autoComplete="on"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate">Enter Due Date</label>
              <input
                className="mb-5"
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Enter Due Date"
                autoComplete="on"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              <label htmlFor="emails">Enter your email</label>
              <input
                className="mb-5"
                type="email"
                name="emails"
                id="emails"
                placeholder="Enter your email"
                autoComplete="on"
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
              />

              <label htmlFor="phoneNumber">Enter your Phone Number</label>
              <input
                className="mb-5"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
                autoComplete="on"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <label htmlFor="bankAccount">Enter your Bank Account Number</label>
              <input
                className="mb-5"
                type="number"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your Bank Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="bankName">Enter your Bank Name</label>
              <input
                className="mb-5"
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your Bank Name"
                autoComplete="on"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                placeholder="Additional Notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <button
                type="submit" // Change button to submit
                className="bg-black text-white font-bold py-2 px-8 rounded shadow border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Submit Invoice
              </button>
            </form>
          </>
        )}
      </main>
    </>
  );
}
