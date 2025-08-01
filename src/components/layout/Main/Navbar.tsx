"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

   useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-pink-200 hover:text-pink-400 transition">
          Double D
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          <NavLink href="/" label="Home" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6 text-pink-200" />
          ) : (
            <SunIcon className="h-6 w-6 text-yellow-300" />
          )}
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
      <Link
        href={href}
        className="hover:text-pink-400 transition font-medium"
      >
        {label}
      </Link>
    );
  }