import React from 'react';
export default function footer({ name, bankName, accountNumber, contactNumber, yourEmail }) {
  return (
    <>
      <footer>
        <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your Name:</span> {name}</li>
            <li><span className="font-bold">Bank Name:</span> {bankName}</li>
            <li><span className="font-bold">Account Number:</span> {accountNumber}</li>
            <li><span className="font-bold">Contact Number: {contactNumber}</span> {contactNumber}</li>
            <li><span className="font-bold">Your Email:</span> {yourEmail}</li>
        </ul>
      </footer>
    </>
  )
}
