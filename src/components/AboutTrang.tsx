import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function AboutTrang() {
  return (
    <section id="about" className="py-24 bg-brand-cream/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Photo Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/uploads/2023/03/2021Feb11-VanessaTeamShoot-Final-Webt0009.jpg"
                alt="Trang Lê hành trình tự do"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
            
            {/* Quote Badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-brand-peach p-6 rounded-2xl shadow-xl max-w-xs border border-brand-peachDark">
              <Quote className="w-8 h-8 text-brand-dark/30 mb-2" />
              <p className="font-editorial italic text-sm text-neutral-800 leading-snug">
                “Mục tiêu cuối cùng của viết lách không chỉ là kiếm tiền, mà là sở hữu sự tự do đích thực.”
              </p>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-blue">
                TRANG LÀ AI? • CON ĐƯỜNG CỦA TRANG
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Từ công việc văn phòng gò bó đến sự nghiệp tự do hoàn toàn
              </h2>
            </div>

            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                Năm 2014, Trang rời Đà Nẵng vào Sài Gòn và bắt đầu với vị trí{" "}
                <strong className="text-neutral-900 font-semibold">Content Leader</strong> cho một startup Top 10 trong ngành F&amp;B.
              </p>
              <p>
                Nhưng guồng quay công sở “sáng cắp ô đi, tối cắp ô về” khiến một “tâm hồn tự do” như Trang cảm thấy bí bách. Rồi Trang đưa ra quyết định táo bạo nhất cuộc đời:{" "}
                <span className="font-bold text-neutral-900">“MÌNH PHẢI THẬT TỰ DO”</span> — rời bỏ văn phòng để trở thành một Content Freelancer toàn thời gian.
              </p>
              <p>
                Sau hơn 8 năm kiên định, vừa thực chiến trên thị trường, vừa liên tục học tập và chia sẻ, Trang luôn tự hào vì đã truyền cảm hứng và đào tạo cho{" "}
                <strong className="text-neutral-900 font-semibold">hơn 500 học viên</strong>{" "}
                xây dựng được một sự nghiệp kiếm tiền hoàn toàn độc lập, làm chủ thời gian và không gian sống.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white font-medium text-sm hover:bg-brand-blue transition-colors"
              >
                Khám phá dịch vụ của Trang
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.facebook.com/letrang1010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-800 font-medium text-sm hover:bg-brand-peach transition-colors"
              >
                Kết nối với Trang qua Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
