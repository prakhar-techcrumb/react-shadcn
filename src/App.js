import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/Sidebar"
import { ThemeProvider } from "@/providers/theme-provider"
import AppRoutes from './router';

import './App.css';
import { ThemeToggle } from './hooks/theme-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-ui-theme">
      <Router>
        <SidebarProvider>
          <AppSidebar />
            <div className="flex flex-1 flex-col p-4">
              <AppRoutes />
            </div>
        </SidebarProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
