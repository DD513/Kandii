"use client";

import Navbar from "@/components/layout/Main/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-pink-50 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}