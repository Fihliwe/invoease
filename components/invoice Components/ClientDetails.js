import React from 'react'

export default function clientDetails({clientName, clientAddress}) {
  return (
    <>
      <section className="mt-5">
        <span><h2 className="text-xl uppercase">Client's Name: </h2>{clientName}</span>
        <span><p> Client's address: </p>{clientAddress}</span>
      </section>
    </>
  )
}
