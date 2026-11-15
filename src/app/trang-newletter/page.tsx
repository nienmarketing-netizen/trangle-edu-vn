"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Sparkles, Send } from "lucide-react";

export default function NewsletterPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-brand-peachLight via-[#FFFDFC] to-white min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach border border-brand-peachDark/40 text-xs font-semibold tracking-wider text-brand-dark uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>THÔNG ĐIỆP TỪ TRANG • WEEKLY NEWSLETTER</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
            Confessions of a Content Creator to CEO
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Nâng tầm tư duy, làm giàu thương hiệu cá nhân và xây dựng cuộc sống tự do. Bản tin gửi vào mỗi sáng đầu tuần với những câu chuyện hậu trường chưa từng công khai.
          </p>
        </div>

        {/* Newsletter Signup Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-brand-peachDark/40 max-w-2xl mx-auto">
          {subscribed ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-neutral-900">
                Chào mừng bạn đến với bản tin!
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Trang đã ghi nhận email <strong className="text-neutral-900">{email}</strong>. Hãy kiểm tra hộp thư (cả mục Spam/Promotions) vào thứ Hai tuần tới nhé!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs uppercase font-bold tracking-wider text-neutral-700">
                  Địa chỉ Email của bạn
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-brand-dark text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-blue shadow-md transition-all"
              >
                Đăng ký nhận bản tin miễn phí
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-neutral-400">
                Không spam. Hủy đăng ký bất kỳ lúc nào chỉ bằng một cú nhấp chuột.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
