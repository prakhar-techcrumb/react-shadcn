import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/Sidebar"
import AppRoutes from './router';

import './App.css';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-1 flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <h1 className="text-lg font-semibold">My App Dashboard</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <AppRoutes />
          </div>
        </main>
      </SidebarProvider>
    </Router>
  );
}

export default App;
