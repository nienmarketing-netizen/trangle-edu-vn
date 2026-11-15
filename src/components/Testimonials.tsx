import Image from "next/image";
import Link from "next/link";
import { FeatherArrow } from "@/components/EditorialArrow";

export default function Testimonials() {
  const reviews = [
    {
      text: "Học Y nhưng lại thích viết, mình đồng hành cùng Cô Trang tìm hiểu về Content Marketing rồi Digital Marketing và “u mê” đến tận bây giờ. Nếu bạn thích viết và ưa tự do, như mình, hãy thử bắt đầu với Cô Trang. Nếu lựa chọn đồng hành và kiên trì theo đuổi, mình tin bạn sẽ có một “mối tình” thật đẹp!",
      name: "Miss. Kim Oanh",
      role: "Phụ Trách Marketing (BV Y Học Cổ Truyền Đà Nẵng) • Content Leader (Chuỗi Nhà Thuốc Dr. Tân Tâm)",
    },
    {
      text: "Nếu bạn đang chưa biết học gì và muốn có một công việc tự do, phiêu lưu đây đó, thì hãy thử học viết cùng Cô Trang! Cô giáo dễ thương, giỏi chuyên môn, dạy hết sức nhiệt tình, bonus thêm “mai mối” luôn đấy! ^^",
      name: "Mr. Trương Đình Hậu",
      role: "Freelance Content Creator & Solopreneur",
    },
    {
      text: "Mình chuyển bộ phận làm việc, cần viết nhiều và biết Quản lý Fanpage nên tìm đến Cô Trang để được hướng dẫn. Mặc dù mình khá bận, nhưng thật may là có thể được chủ động học theo thời gian phù hợp với mình, Cô lại nhiệt tình “cầm tay chỉ việc”, nên từ một người sợ viết, giờ thì mình muốn viết cả ngày.",
      name: "Miss. Ngọc Linh",
      role: "Điều hành bộ phận CSKH Viettel Post",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#FAF4E8] border-b border-[#181818] py-20 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-magnificent text-base font-semibold tracking-[2px] uppercase text-[#020101]">
              CÂU CHUYỆN CỦA HỌC VIÊN
            </h3>
            <div className="relative w-12 h-8">
              <Image
                src="/uploads/2023/03/comma-l.svg"
                alt="Quote"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full border-t border-[#181818]" />

          <h2 className="font-outersans text-4xl sm:text-5xl lg:text-6xl font-black text-[#020101] uppercase tracking-tight leading-tight">
            NHỮNG CÂU CHUYỆN<br />TỰ DO VÀ THÀNH CÔNG
          </h2>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#181818] p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <p className="font-magnificent text-base sm:text-lg text-[#020101] leading-relaxed italic mb-8">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#181818]">
                <h4 className="font-magnificent text-lg font-bold text-[#4979FB] mb-1">
                  {rev.name}
                </h4>
                <p className="font-magnificent text-xs text-[#020101] leading-snug">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            href="/course"
            className="editorial-btn text-sm tracking-[1.5px]"
          >
            <FeatherArrow className="w-5 h-4" />
            <span>ĐỒNG HÀNH CÙNG TRANG</span>
          </Link>

          <div className="relative w-14 h-10 hidden sm:block">
            <Image
              src="/uploads/2023/03/comma-r2.svg"
              alt="Quote"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
