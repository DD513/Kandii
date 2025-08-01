"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

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
    <nav className="bg-white dark:bg-white sticky top-0 z-50 shadow border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div>
          <Link href="/" className="flex items-baseline space-x-2 group">
            <span className="text-xl font-bold text-[#00A5E2] group-hover:opacity-80 transition">
              Kandii - Sweet picks. Pure K-pop.
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <NavLink href="/companies" label="公司介紹" />
            <NavLink href="/campaigns" label="發起代購" />
            <NavLink href="#" label="語言切換" />
            <NavLink href="/about" label="關於我們" />
            <NavLink href="/login" label="登入/註冊" />
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-[#00A5E2] transition">
        {label}
      </Link>
    </li>
  );
}
