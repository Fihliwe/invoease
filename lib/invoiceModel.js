import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  clientName: { type: String, required: true },
  clientAddress: { type: String, required: true },
  invoiceNumber: { type: String, required: true, unique: true },
  invoiceDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  emails: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bankAccount: { type: String, required: true },
  bankName: { type: String, required: true },
  notes: { type: String },
}, { timestamps: true });

const Invoice = mongoose.models.Invoice || mongoose.model("Invoice", InvoiceSchema);

export default Invoice;
