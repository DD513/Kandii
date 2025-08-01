"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
      {/* 個人介紹 */}
      <section className="flex items-center justify-between px-10 lg:px-20 py-20 bg-pink-50 min-h-screen">
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Discover the <span className="text-pink-500">Double D</span> Style
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          I craft beautiful and intuitive digital experiences. Let’s build something amazing together.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition">
          View My Work
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block w-[45%]">
        <Image
          src="/hero-visual.png" // 這裡請放你的圖（可以先用 placeholder）
          alt="Hero Visual"
          width={500}
          height={500}
          className="rounded-3xl shadow-xl object-cover"
        />
      </div>
    </section>
    </div>
  );
}