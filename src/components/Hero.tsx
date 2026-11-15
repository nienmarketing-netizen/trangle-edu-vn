import Image from "next/image";
import Link from "next/link";
import { FeatherArrow } from "@/components/EditorialArrow";

export default function Hero() {
  return (
    <section className="border-b border-[#181818] bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        {/* Left Column: Image on #CBD1CF Sage Background (approx 45%) */}
        <div className="md:col-span-5 bg-[#CBD1CF] md:border-r border-b md:border-b-0 border-[#181818] flex items-center justify-center p-6 sm:p-8 lg:p-12 relative">
          <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] overflow-hidden">
            <Image
              src="/uploads/2023/03/9-1-1-842x1024.jpg"
              alt="Trang Lê - Lam Khiết"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>

        {/* Right Column: Exact Typography and Layout (approx 55%) */}
        <div className="md:col-span-7 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div className="max-w-2xl space-y-6">
            {/* Title Block */}
            <div>
              <h1 className="font-outersans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#020101] tracking-tight uppercase leading-[0.95]">
                TRANG LÊ
              </h1>
              
              <div className="w-full my-4 lg:my-6 border-t border-[#181818]" />

              <h2 className="font-outersans stroke-blue-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.95]">
                LAM KHIẾT
              </h2>
            </div>

            {/* Description in SVN-Magnificent serif italic */}
            <p className="font-magnificent text-lg sm:text-xl lg:text-2xl text-[#020101] leading-relaxed pt-2">
              Đồng hành cùng những con người có <span className="italic font-bold">“tâm hồn tự do”</span>, muốn thoát khỏi công việc văn phòng nhàm chán, để xây dựng một sự nghiệp hoàn toàn tự do.
            </p>

            {/* Pill Action Button */}
            <div className="pt-4 lg:pt-6">
              <Link
                href="/register-trial-lesson"
                className="editorial-btn text-xs sm:text-sm tracking-[1.5px]"
              >
                <FeatherArrow className="w-5 h-4" />
                <span>BẮT ĐẦU NGAY</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
