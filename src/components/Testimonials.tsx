import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Miss. Kim Oanh",
      role: "Phụ trách Marketing (BV Y Học Cổ Truyền Đà Nẵng) & Content Leader (Chuỗi Nhà Thuốc Dr. Tận Tâm)",
      quote:
        "Học Y nhưng lại thích viết, mình đồng hành cùng Cô Trang tìm hiểu về Content Marketing rồi Digital Marketing và “u mê” đến tận bây giờ. Nếu bạn thích viết và ưa tự do, như mình, hãy thử bắt đầu với Cô Trang. Lựa chọn đồng hành và kiên trì theo đuổi, mình tin bạn sẽ có một “mối tình” thật đẹp!",
      initial: "KO",
    },
    {
      name: "Mr. Trương Đình Hậu",
      role: "Freelance Content Creator & Solopreneur",
      quote:
        "Nếu bạn đang chưa biết học gì và muốn có một công việc tự do, phiêu lưu đây đó, thì hãy thử học viết cùng Cô Trang! Cô giáo dễ thương, giỏi chuyên môn, dạy hết sức nhiệt tình, bonus thêm “mai mối” luôn đấy! ^^",
      initial: "DH",
    },
    {
      name: "Miss. Ngọc Linh",
      role: "Điều hành bộ phận CSKH Viettel Post",
      quote:
        "Mình chuyển bộ phận làm việc, cần viết nhiều và biết Quản lý Fanpage nên tìm đến Cô Trang để được hướng dẫn. Mặc dù mình khá bận, nhưng thật may là có thể được chủ động học theo thời gian phù hợp với mình. Cô lại nhiệt tình “cầm tay chỉ việc”, từ một người sợ viết, giờ thì mình muốn viết cả ngày.",
      initial: "NL",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-cream/50 border-t border-brand-peachDark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-blue">
            CÂU CHUYỆN CỦA HỌC VIÊN
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Những câu chuyện tự do & thành công
          </h2>
          <p className="text-neutral-600 text-base">
            Lắng nghe chia sẻ chân thật từ những người đã đồng hành và tìm thấy ngã rẽ tự do cùng Cô Trang Lê.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-brand-peachDark/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-peachDark mb-3" />
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-peach text-brand-dark flex items-center justify-center font-bold text-sm shrink-0">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{item.name}</h4>
                  <p className="text-[12px] text-neutral-500 leading-snug">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
