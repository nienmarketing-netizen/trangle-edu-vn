"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "TRANG CHỦ", href: "/" },
    { name: "KHÓA HỌC", href: "/course" },
    { name: "DỊCH VỤ", href: "/services" },
    { name: "BẢN TIN", href: "/trang-newletter" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Notice Marquee Bar - EXACT original style */}
      <div className="bg-[#FFD2C3] hover:bg-white transition-colors duration-300 border-b border-[#181818] py-3 px-4 text-center">
        <Link
          href="/register-trial-lesson"
          className="font-magnificent text-xs sm:text-sm md:text-base font-semibold tracking-[1.5px] text-[#020101] inline-flex items-center justify-center gap-2 group"
        >
          <span>
            [CLICK NGAY] ĐĂNG KÝ HỌC THỬ KHOÁ HỌC SOCIAL MEDIA MANAGER [KIẾM TIỀN TỰ DO NGAY LẬP TỨC]
          </span>
          <span className="inline-block transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-[#181818] px-4 sm:px-8 lg:px-12 bg-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 sm:h-12 w-40 sm:w-52">
              <Image
                src="/uploads/2023/03/Logo-chu.png"
                alt="Trang Lê"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav in SVN-OuterSans-Thin */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-outersans-thin font-bold text-sm tracking-[1.2px] text-[#020101] hover:text-[#487AFF] transition-colors uppercase whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-3 text-[#020101]">
              <a
                href="https://www.facebook.com/letrang1010"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#487AFF] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lamkhiet.1010/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#487AFF] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/register-trial-lesson"
              className="editorial-btn text-xs py-2 px-4 sm:px-6 whitespace-nowrap"
            >
              <span>Học thử miễn phí</span>
            </Link>

            {/* Menu Drawer Toggle Button */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="p-2 border border-[#181818] rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <span className="w-full h-0.5 bg-[#020101] block" />
                <span className="w-full h-0.5 bg-[#020101] block" />
                <span className="w-full h-0.5 bg-[#020101] block" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Off-canvas Right Drawer (Original Elementor Post 22 Modal style) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm bg-[#FFEAE3] h-full shadow-2xl border-l border-[#181818] p-8 flex flex-col justify-between z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-[#181818]">
                <div className="relative h-10 w-36">
                  <Image
                    src="/uploads/2023/03/Logo-chu.png"
                    alt="Trang Lê"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-[#020101] hover:rotate-90 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav Links in SVN-Magnificent bold (Post 22 style) */}
              <nav className="py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block font-magnificent font-extrabold text-2xl text-[#020101] hover:text-[#487AFF] transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Socials & Handle */}
            <div className="pt-8 border-t border-[#181818] space-y-4">
              <p className="font-outersans-thin font-bold text-sm tracking-[2px] text-[#020101] uppercase">
                @letrang1010
              </p>
              <div className="flex items-center gap-4 text-[#020101]">
                <a
                  href="https://www.facebook.com/letrang1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#181818] rounded-full hover:bg-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/lamkhiet.1010/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#181818] rounded-full hover:bg-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
