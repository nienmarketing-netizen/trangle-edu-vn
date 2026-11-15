import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#181818] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Brand & Handle (approx 6 cols) */}
        <div className="md:col-span-6 space-y-6">
          <div className="relative h-12 w-48">
            <Image
              src="/uploads/2023/03/Logo-chu.png"
              alt="Trang Lê"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="pt-2">
            <span className="font-outersans-thin font-bold text-lg tracking-[2px] text-[#020101] uppercase block">
              @TRANGLE1010
            </span>
          </div>

          <p className="font-magnificent text-base text-[#020101] max-w-md leading-relaxed">
            Kết nối với Trang qua Facebook và các kênh mạng xã hội khác nhé!
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.facebook.com/letrang1010"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#181818] flex items-center justify-center text-[#020101] hover:bg-[#FFD2C3] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/lamkhiet.1010/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#181818] flex items-center justify-center text-[#020101] hover:bg-[#FFD2C3] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Columns: Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-outersans-thin font-bold text-xs uppercase tracking-[2px] text-[#020101]">
            DANH MỤC TRANG
          </h4>
          <ul className="space-y-3 font-magnificent text-sm text-[#020101]">
            <li>
              <Link href="/services" className="hover:text-[#487AFF] transition-colors uppercase">
                DỊCH VỤ CỦA TRANG
              </Link>
            </li>
            <li>
              <Link href="/trang-newletter" className="hover:text-[#487AFF] transition-colors uppercase">
                THÔNG ĐIỆP TỪ TRANG
              </Link>
            </li>
            <li>
              <Link href="/course" className="hover:text-[#487AFF] transition-colors uppercase">
                KHÓA HỌC CỦA TRANG
              </Link>
            </li>
            <li>
              <Link href="/register-trial-lesson" className="hover:text-[#487AFF] transition-colors uppercase">
                ĐĂNG KÝ HỌC THỬ
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="font-outersans-thin font-bold text-xs uppercase tracking-[2px] text-[#020101]">
            THÔNG TIN BỔ SUNG
          </h4>
          <ul className="space-y-3 font-magnificent text-sm text-[#020101]">
            <li>
              <span className="uppercase text-neutral-500">HƯỚNG DẪN</span>
            </li>
            <li>
              <span className="uppercase text-neutral-500">CHÍNH SÁCH BẢO MẬT</span>
            </li>
            <li className="pt-2">
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 block">
                DESIGN BY YMA CREATIVE AGENCY
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between text-xs font-magnificent text-neutral-600 gap-4">
        <p>© {new Date().getFullYear()} Trang Lê (trangle.edu.vn). All rights reserved.</p>
        <p className="font-outersans-thin font-bold tracking-wider uppercase text-[11px]">
          Next.js 14 App Router • Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
