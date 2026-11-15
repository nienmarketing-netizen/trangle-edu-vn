"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Send, Sparkles, ShieldCheck, ArrowLeft } from "lucide-react";

export default function RegisterTrialLessonPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    facebook: "",
    job: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form submission
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF5F1] via-[#FFFDFC] to-white min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-brand-blue mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-brand-peachDark/40 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-brand-peach p-8 sm:p-10 border-b border-brand-peachDark/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-[11px] font-bold tracking-wider text-brand-dark uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>MIỄN PHÍ 100%</span>
              </div>
              <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                Đăng ký học thử khóa học Social Media Manager
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
                Bạn đã sẵn sàng để bắt đầu hành trình tự do của mình chưa? Khám phá cách sáng tạo nội dung và kiếm tiền ngay cả khi bạn là “newbie” hoàn toàn.
              </p>
            </div>

            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow border-2 border-white shrink-0 hidden sm:block">
              <Image
                src="/uploads/2023/03/9-1-1.jpg"
                alt="Trang Lê"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900">
                  Đăng ký thành công!
                </h3>
                <p className="text-neutral-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Cảm ơn bạn <strong className="text-neutral-900">{formData.fullName || "bạn"}</strong> đã quan tâm. Trang và trợ lý sẽ liên hệ gửi tài liệu học thử qua Zalo / Email ({formData.email || "email của bạn"}) trong vòng 24 giờ tới nhé!
                </p>
                <div className="pt-6">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white text-xs uppercase font-semibold tracking-wider hover:bg-brand-blue transition-colors"
                  >
                    Về lại trang chủ
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Họ tên */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                      Họ và tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Thị Mai"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                      Địa chỉ Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Số điện thoại / Zalo */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                      Số điện thoại / Zalo <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: 0912345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    />
                  </div>

                  {/* Facebook Link */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                      Link Facebook của bạn
                    </label>
                    <input
                      type="text"
                      placeholder="facebook.com/username"
                      value={formData.facebook}
                      onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Công việc hiện tại */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                    Công việc hoặc ngành nghề hiện tại
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Dược sĩ, Nhân viên văn phòng, Sinh viên..."
                    value={formData.job}
                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                  />
                </div>

                {/* Ghi chú / Mục tiêu */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                    Mục tiêu hoặc khó khăn bạn đang gặp phải
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Bạn mong muốn điều gì nhất khi học viết và làm việc tự do?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm transition-all"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Cam kết bảo mật thông tin cá nhân</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-blueHover shadow-md hover:shadow-lg transition-all"
                  >
                    Gửi đăng ký học thử
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
