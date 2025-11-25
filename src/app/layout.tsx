"use client";

import "./globals.css";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar/SideBar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <div className="flex  bg-white">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
              {/* Navigation Bar */}
              <NavBar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                pageTitle="My App"
              />

              {/* Children content */}
              <main className="flex-1 overflow-auto p-8 bg-white dark:bg-gray-800">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
