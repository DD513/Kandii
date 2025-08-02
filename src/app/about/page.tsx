"use client";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-6 bg-white">
      {/* 灰白色區塊 */}
      <div className="bg-primary-gray flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/jyp">
          <Image
            src="/images/companies/jyp-logo.png"
            alt="JYP Entertainment"
            width={400}
            height={250}
            className="max-w-[300px] max-h-[200px] w-auto h-auto object-contain"
          />
        </Link>
      </div>

      {/* 黃色區塊 */}
      <div className="bg-primary-yellow flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/hybe">
          <Image
            src="/images/companies/hybe-logo.png"
            alt="HYBE"
            width={600}
            height={400}
            className="max-w-[600px] max-h-[400px] w-auto h-auto object-contain"
          />
        </Link>
      </div>

      {/* 紅色區塊 */}
      <div className="bg-primary-red flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/yg">
          <div className="relative w-[400px] h-[300px]">
            <Image
              src="/images/companies/yg-logo.png"
              alt="YG Entertainment"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-auto h-auto"
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
