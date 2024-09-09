import React from 'react'

export default function Date({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <>
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoice Number: </span>{invoiceDate}{invoiceNumber}</li>
            <li><span className="font-bold"> Invoice Date: </span>{invoiceDate}</li>
            <li><span className="font-bold">Due Date: </span>{dueDate}</li>
          </ul>
        </article>
    </>
  )
}
