import { ReactNode } from 'react';
import Sidebar from '@/components/DashboardSidebar/Sidebar';
import DashboardPage from './page';
import InvoicesPage from './invoices/page';
import CustomersPage from './customers/page';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-vh">
      {/* Sidebar components */}
      <Sidebar/>
      <main className='flex-1 p-20 overflow-y-auto'>
        {children}
      </main>
    </div>
    
  );
};

export default Layout;