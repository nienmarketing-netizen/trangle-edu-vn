import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F1] via-[#FFFDFC] to-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-peach/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-peachDark/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach border border-brand-peachDark/50 text-xs font-semibold tracking-widest text-brand-dark uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>TRANG LÊ • LAM KHIẾT</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black leading-[1.15]">
              Đồng hành cùng những con người có{" "}
              <span className="italic relative whitespace-nowrap">
                <span className="relative z-10 text-brand-blue">“tâm hồn tự do”</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-peachDark/40 -rotate-1 z-0" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Muốn thoát khỏi công việc văn phòng nhàm chán, để xây dựng một sự nghiệp{" "}
              <strong className="text-neutral-900 font-semibold">hoàn toàn tự do</strong>{" "}
              cả về không gian lẫn thời gian nhờ đòn bẩy Content Marketing & Social Media.
            </p>

            {/* Checkpoints */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Viết tốt ngay buổi đầu tiên</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Không cần xuất phát từ Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hơn 500+ học viên đã tự do</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/register-trial-lesson"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-dark text-white font-semibold text-sm uppercase tracking-wider hover:bg-brand-blue hover:shadow-lg transition-all duration-300"
              >
                Đăng ký học thử ngay
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-neutral-300 text-brand-dark font-semibold text-sm uppercase tracking-wider hover:bg-brand-peach hover:border-brand-peachDark transition-all duration-300"
              >
                Khám phá khóa học
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-brand-peachDark rounded-[2.5rem] rotate-3 scale-95 opacity-70 -z-10" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-neutral-100">
                <Image
                  src="/uploads/2023/03/9-1-1.jpg"
                  alt="Trang Lê (Lam Khiết)"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-neutral-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center font-bold text-brand-dark text-sm shrink-0">
                    8+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 uppercase">Kinh nghiệm thực chiến</p>
                    <p className="text-[11px] text-neutral-500">Đồng hành & truyền cảm hứng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
