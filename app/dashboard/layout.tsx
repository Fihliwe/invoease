import { ReactNode } from 'react';
import Sidebar from '@/components/DashboardSidebar/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - fixed position */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <Sidebar />
      </div>

      {/* Main content - with left margin equal to sidebar width */}
      <main className="ml-64 flex-1 p-5 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
