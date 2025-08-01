"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-6 bg-white">
      {/* 灰白色區塊 */}
      <div className="bg-[#E1DED9] flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/jyp">
          <Image
            src="/images/companies/jyp-logo.png"
            alt="JYP Entertainment"
            width={300}
            height={200}
          />
        </Link>
      </div>

      {/* 黃色區塊 */}
      <div className="bg-[#F5D84B] flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/hybe">
          <Image
            src="/images/companies/hybe-logo.png"
            alt="HYBE"
            width={300}
            height={200}
          />
        </Link>
      </div>

      {/* 紅色區塊 */}
      <div className="bg-[#E54B5D] flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/yg">
          <Image
            src="/images/companies/yg-logo.png"
            alt="YG Entertainment"
            width={300}
            height={200}
          />
        </Link>
      </div>

      {/* 藍色區塊 */}
      <div className="bg-[#274884] flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/sm">
          <Image
            src="/images/companies/sm-logo.png"
            alt="SM Entertainment"
            width={300}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
}
