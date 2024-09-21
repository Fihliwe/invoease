import React from 'react';

export default function InvoiceTable() {
  return (
    <>
      <div className="my-5">
        <h2>Invoice Table</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Item</th>
              <th className="border px-4 py-2 text-right">Quantity</th>
              <th className="border px-4 py-2 text-right">Unit Price</th>
              <th className="border px-4 py-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Service/Product 1</td>
              <td className="border px-4 py-2 text-right">2</td>
              <td className="border px-4 py-2 text-right">$50.00</td>
              <td className="border px-4 py-2 text-right">$100.00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Service/Product 2</td>
              <td className="border px-4 py-2 text-right">3</td>
              <td className="border px-4 py-2 text-right">$75.00</td>
              <td className="border px-4 py-2 text-right">$225.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
          <tfoot>
            <tr>
              <td className="border px-4 py-2 font-bold text-right" colSpan="3">Total</td>
              <td className="border px-4 py-2 text-right">$325.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
