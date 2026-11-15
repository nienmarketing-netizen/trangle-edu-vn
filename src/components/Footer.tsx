import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-44 invert brightness-0">
              <Image
                src="/uploads/2023/03/Logo-chu.png"
                alt="Trang Lê"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Đồng hành cùng những con người có <span className="text-white">“tâm hồn tự do”</span>, muốn thoát khỏi công việc văn phòng nhàm chán để xây dựng một sự nghiệp hoàn toàn tự do.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-brand-peachDark font-semibold">
                @TRANGLE1010
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-4">
              Khóa học & Đào tạo
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/course" className="hover:text-brand-peach transition-colors">
                  Khóa học Social Media Manager
                </Link>
              </li>
              <li>
                <Link href="/course" className="hover:text-brand-peach transition-colors">
                  Khóa học Content Marketing Thực Chiến
                </Link>
              </li>
              <li>
                <Link href="/register-trial-lesson" className="hover:text-brand-peach transition-colors">
                  Đăng ký học thử miễn phí
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-peach transition-colors">
                  Đào tạo & Tư vấn 1-on-1
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-4">
              Về Trang Lê
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/services" className="hover:text-brand-peach transition-colors">
                  Dịch vụ của Trang
                </Link>
              </li>
              <li>
                <Link href="/trang-newletter" className="hover:text-brand-peach transition-colors">
                  Thông điệp từ Trang (Newsletter)
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-peach transition-colors">
                  Câu chuyện 8+ năm tự do
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-peach transition-colors">
                  Cảm nhận của học viên
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-4">
              Kết nối mạng xã hội
            </h4>
            <p className="text-neutral-400 text-sm mb-4">
              Kết nối với Trang qua Facebook và các kênh mạng xã hội khác nhé!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/letrang1010"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lamkhiet.1010/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@trangle.edu.vn"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-amber-600 hover:border-amber-600 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Trang Lê (trangle.edu.vn). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js & Tailwind CSS • Ready for Vibe Coding
          </p>
        </div>
      </div>
    </footer>
  );
}
