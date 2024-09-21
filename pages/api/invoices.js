import connectToDatabase from "@/lib/mongodb";
import Invoice from "@/lib/invoiceModel";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const invoice = new Invoice(req.body);
      await invoice.save();
      res.status(201).json({ success: true, invoice });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
