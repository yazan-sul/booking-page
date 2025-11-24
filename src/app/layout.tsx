// app/layout.tsx
"use client"; // Needed because we'll use useState

import "./globals.css";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar/SideBar";

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
        <div className="flex h-screen">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex flex-col">
            <NavBar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              pageTitle="My App"
            />
            <main className="flex-1 overflow-auto p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
