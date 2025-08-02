"use client";
import Link from "next/link";
import Image from "next/image";
import images from "../../public/images/images";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-6 bg-white">
      {/* 灰白色區塊 */}
      <div className="bg-primary-gray flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/jyp">
          <div className="relative w-[360px] h-[280px]">
            <Image
              src={images.JYP_LOGO}
              alt="JYP Entertainment"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-auto h-auto"
              priority
            />
          </div>
        </Link>
      </div>

      {/* 黃色區塊 */}
      <div className="bg-primary-yellow flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/hybe">
          <div className="relative w-[360px] h-[280px]">
            <Image
              src={images.HYBE_LOGO}
              alt="HYBE"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-auto h-auto"
              priority
            />
          </div>
        </Link>
      </div>

      {/* 紅色區塊 */}
      <div className="bg-primary-red flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/yg">
          <div className="relative w-[360px] h-[280px]">
            <Image
              src={images.YG_LOGO}
              alt="YG Entertainment"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-auto h-auto"
              priority
            />
          </div>
        </Link>
      </div>

      {/* 藍色區塊 */}
      <div className="bg-primary-blue flex items-center justify-center min-h-[360px] shadow-md hover:opacity-90 transition">
        <Link href="/companies/sm">
          <div className="relative w-[300px] h-[240px]">
            <Image
              src={images.SM_LOGO}
              alt="SM Entertainment"
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
