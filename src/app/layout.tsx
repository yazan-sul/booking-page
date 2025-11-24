"use client"; // Needed because we'll use useState

import "./globals.css";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar/SideBar";
import { ThemeProvider } from "@/context/ThemeContext"; // Import the ThemeProvider

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
          <div className="flex h-screen bg-white">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 flex flex-col">
              <NavBar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                pageTitle="My App"
              />

              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
