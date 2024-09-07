import Link from "next/link";

const Sidebar = () => {
    return(
        <div className="h-screen w-64 bg-zinc-400 text-black xl:m-w-4xl xl:mx-auto">
            <div className="p-4">
                <h2 className="text-2xl font-semibold">InvoEase</h2>
                    <ul className="mt-4">
                        <button className="bg-black text-white font-bold py-2 px-8 rounded shadow 
                                            border-2 border-black hover:bg-transparent hover:text-black 
                                            transition-all duration-300">
                            <Link id="Customers" href="/dashboard/customers">Customers</Link>
                        </button>
                    </ul>
                    <ul className="mt-4">
                    <button className="bg-black text-white font-bold py-2 px-8 rounded shadow 
                                            border-2 border-black hover:bg-transparent hover:text-black 
                                            transition-all duration-300">
                        <Link id="invoices" href="/dashboard/invoices">Invoices</Link>
                    </button>
                    </ul>
            </div>
        </div>
    );
};
export default Sidebar;