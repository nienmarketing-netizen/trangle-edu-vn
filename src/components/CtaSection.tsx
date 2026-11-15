import Link from "next/link";
import { FeatherArrow } from "@/components/EditorialArrow";

export default function CtaSection() {
  const stats = [
    { num: "8", label: "NĂM" },
    { num: "500+", label: "HỌC VIÊN" },
    { num: "100%", label: "HỌC VIÊN HÀI LÒNG" },
  ];

  return (
    <>
      {/* Section 11: 3 Big Summary Counters on Salmon #FFD2C3 */}
      <section className="bg-[#FFD2C3] border-b border-[#181818] py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-4">
              <div className="font-outersans-outline text-7xl sm:text-8xl lg:text-9xl font-black text-[#020101] leading-none">
                {s.num}
              </div>
              <p className="font-magnificent text-base sm:text-lg font-bold tracking-[2px] uppercase text-[#020101]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 12: ĐỒNG HÀNH CÙNG NHAU NHÉ! */}
      <section className="bg-white border-b border-[#181818] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-outersans text-5xl sm:text-7xl lg:text-8xl font-black text-[#020101] uppercase tracking-tight leading-none">
            ĐỒNG HÀNH CÙNG NHAU NHÉ!
          </h2>

          <p className="font-magnificent text-lg sm:text-xl text-[#020101] max-w-2xl mx-auto leading-relaxed">
            Học thử hoàn toàn miễn phí để khám phá tiềm năng và bắt đầu sự nghiệp tự do của bạn ngay hôm nay.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/register-trial-lesson"
              className="editorial-btn text-sm tracking-[1.5px] bg-[#FFD2C3] hover:bg-white"
            >
              <FeatherArrow className="w-5 h-4" />
              <span>ĐĂNG KÝ HỌC THỬ MIỄN PHÍ</span>
            </Link>

            <Link
              href="/trang-newletter"
              className="editorial-btn text-sm tracking-[1.5px]"
            >
              <span>NHẬN BẢN TIN TỪ TRANG</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
