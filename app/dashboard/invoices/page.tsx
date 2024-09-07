'use client';
import React from "react";
import { useState } from "react";
import Footer from "@/components/invoice Components/footer";
import Notes from "@/components/invoice Components/notes";
import Header from "@/components/invoice Components/header";
import Details from "@/components/invoice Components/Details";
import ClientsDetails from "@/components/invoice Components/ClientDetails";
import Date from "@/components/invoice Components/Date";
import Table from "@/components/invoice Components/table";


const { InvoiceNumber } = require('invoice-number');

export default function InvoicesPage() {
    // state values to toggle between the form and invoice
    const [showInvoice, setShowInvoice] = useState(false);
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState("")
    const [emails, setEmails] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [bankName, setBankName] = useState("")

    const generateInvoiceNumber = () => {
      if (invoiceNumber) {
        const nextInvoiceNumber = InvoiceNumber.next(invoiceNumber);
        setInvoiceNumber(nextInvoiceNumber);
      }
    };



    
    return (
      <>
      <main className="m-5 p-5 xl:m-w-4xl xl:mx-auto bg-white rounded shadow flex min-h-vh">
        {showInvoice ? <div>
          <Header/>
          <div id="printableArea">
          
          <Details 
            name={name} 
            address={address} 
          />
          <ClientsDetails 
            clientName={clientName}
            clientAddress={clientAddress}
          />
          <Date 
            invoiceNumber={invoiceNumber}
            invoiceDate={invoiceDate}
            dueDate={dueDate}
          />
          <Table 

          />
          <Notes 
            notes={notes}
          />
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
          

          <button onClick={() => setShowInvoice(false)} className=" mt-5 bg-black text-white font-bold py-2 px-8 rounded shadow 
            border-2 border-black hover:bg-transparent hover:text-black 
            transition-all duration-300">Edit Invoice</button>
        </div> : (
          <>
          {/* name, address, client name, client adress, invoice number ,invoice date, due date, notes, emails, phone number, bank account, bank  */}
          <div className="flex flex-col justify-center">
            <label htmlFor="name"> Enter your name</label>
            <input className="mb-5"
              type="text"
              name="name" 
              id="name" 
              placeholder="Enter your name" 
              autoComplete="on" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* setAddress Label */}
            <label htmlFor="name"> Enter your Address</label>
            <input className="mb-5"
              type="text"
              name="address" 
              id="address" 
              placeholder="Enter your address" 
              autoComplete="on" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            {/* setClientName Label */}
            <label htmlFor="name"> Enter your Client's Name</label>
            <input className="mb-5"
              type="text"
              name="clientName" 
              id="clientName" 
              placeholder="Enter your Client's Name" 
              autoComplete="on" 
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />

            {/* setClientAddress Label */}
            <label htmlFor="name"> Enter your Client's address</label>
            <input className="mb-5"
              type="text"
              name="clientAdress" 
              id="clientAdress" 
              placeholder="Enter your Client's Address" 
              autoComplete="on" 
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />

            {/* setInvoiceNumber */}
            <label htmlFor="name"> Enter your Invoice Number</label>
            <input className="mb-5"
              type="text"
              name="invoiceNumber" 
              id="invoiceNumber" 
              placeholder="Enter your Invoice Number" 
              autoComplete="on" 
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />

            {/* setInvoiceDate */}
            <label htmlFor="name"> Enter your Invoice Date</label>
            <input className="mb-5"
              type="date"
              name="invoiceDate" 
              id="invoiceDaet" 
              placeholder="Enter your Invoice Date" 
              autoComplete="on" 
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />

            {/* setDueDate */}
            <label htmlFor="name"> Enter Due Date</label>
            <input className="mb-5"
              type="date"
              name="dueDate" 
              id="dueDate" 
              placeholder="Enter Due Date" 
              autoComplete="on" 
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

            {/* setEmails */}
            <label htmlFor="name"> Enter your email</label>
            <input className="mb-5"
              type="email"
              name="emails" 
              id="emials" 
              placeholder="Enter your email" 
              autoComplete="on" 
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />

            {/* setPhoneNumber */}
            <label htmlFor="name"> Enter your Phone Number</label>
            <input className="mb-5"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your name" 
              autoComplete="on" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {/* setBankAccount */}
            <label htmlFor="name"> Enter your Bank Account Number</label>
            <input className="mb-5"
              type="number"
              name="bankAccount" 
              id="bankAccount" 
              placeholder="Enter your bank acoount number" 
              autoComplete="off" 
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />

            {/* setBankName */}
            <label htmlFor="name"> Enter your Bank Name</label>
            <input className="mb-5"
              type="text"
              name="bankName" 
              id="bankName" 
              placeholder="Enter your bank name" 
              autoComplete="on" 
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            {/* setNotes */}
            <label htmlFor="name"> Additional Notes</label>
            <textarea name="notes" id="notes" placeholder="Additional Notes to the client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <button onClick={() => {generateInvoiceNumber(); setShowInvoice(true)}} className="bg-black text-white font-bold py-2 px-8 rounded shadow 
            border-2 border-black hover:bg-transparent hover:text-black 
            transition-all duration-300">Preview Invoice</button>
          </div>
          </>
        )}
      </main>
    </>
    );
  }