import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-peach via-[#FFF7F4] to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-peachDark text-xs font-semibold tracking-wider text-brand-dark uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span>BƯỚC ĐI ĐẦU TIÊN CỦA BẠN</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
          Đồng hành cùng nhau nhé!
        </h2>

        <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Bạn đã sẵn sàng để bắt đầu hành trình tự do của mình chưa? Học thử hoàn toàn miễn phí khóa học{" "}
          <strong className="text-neutral-900 font-semibold">Social Media Manager</strong> để khám phá tiềm năng viết lách của chính bạn.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register-trial-lesson"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-dark text-white font-semibold text-sm uppercase tracking-wider hover:bg-brand-blue shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Đăng ký học thử ngay (Miễn phí)
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/trang-newletter"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-neutral-300 text-neutral-800 font-semibold text-sm uppercase tracking-wider hover:bg-brand-peach transition-colors"
          >
            Đăng ký nhận bản tin
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Không mất phí • Nhận tài liệu học thử qua Zalo / Email ngay lập tức</span>
        </div>
      </div>
    </section>
  );
}
