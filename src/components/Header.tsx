"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Khóa học", href: "/course" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Bản tin", href: "/trang-newletter" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDFC]/95 backdrop-blur-md border-b border-brand-peach/40">
      {/* Top Notice Marquee Bar */}
      <div className="bg-brand-peach py-2 px-4 text-xs sm:text-sm font-medium text-brand-dark overflow-hidden border-b border-brand-peachDark/30">
        <Link
          href="/register-trial-lesson"
          className="flex items-center justify-center gap-2 hover:text-brand-blue transition-colors text-center"
        >
          <span className="inline-block px-2 py-0.5 bg-brand-blue text-white rounded text-[10px] font-bold uppercase tracking-wider">
            HOT
          </span>
          <span className="font-semibold">
            [CLICK NGAY] ĐĂNG KÝ HỌC THỬ KHOÁ HỌC SOCIAL MEDIA MANAGER [KIẾM TIỀN TỰ DO NGAY LẬP TỨC]
          </span>
          <ArrowRight className="w-3.5 h-3.5 inline-block shrink-0" />
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-44">
              <Image
                src="/uploads/2023/03/Logo-chu.png"
                alt="Trang Lê"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark/80 hover:text-brand-blue transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action & Socials */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-brand-dark/70 pr-3 border-r border-gray-200">
              <a
                href="https://www.facebook.com/letrang1010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-brand-blue transition-colors rounded-full hover:bg-brand-peach/40"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lamkhiet.1010/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-brand-blue transition-colors rounded-full hover:bg-brand-peach/40"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="/register-trial-lesson"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-blue transition-all duration-300 shadow-sm hover:shadow"
            >
              Học thử miễn phí
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/register-trial-lesson"
              className="px-3 py-1.5 rounded-full bg-brand-dark text-white text-xs font-medium"
            >
              Học thử
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:text-brand-blue transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-peach/50 bg-[#FFFDFC] px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-brand-dark/90 hover:text-brand-blue transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/letrang1010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-blue"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lamkhiet.1010/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-blue"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
            <Link
              href="/register-trial-lesson"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 bg-brand-dark text-white text-xs font-semibold rounded-full uppercase"
            >
              Đăng ký học thử ngay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
