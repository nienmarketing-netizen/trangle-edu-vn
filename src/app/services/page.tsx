import Link from "next/link";
import { ArrowRight, Sparkles, Building2, UserCheck, Layers } from "lucide-react";

export const metadata = {
  title: "Dịch vụ của Trang Lê | Tư vấn & Đào tạo Content Marketing",
  description: "Dịch vụ tư vấn chiến lược nội dung, đào tạo in-house và quản trị mạng xã hội cho cá nhân và doanh nghiệp.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: UserCheck,
      title: "Coaching 1-1 Xây dựng Thương hiệu Cá nhân",
      desc: "Dành riêng cho các Founder, Chuyên gia, Freelancer muốn định vị bản thân trên mạng xã hội, thu hút khách hàng tiềm năng mà không cần phụ thuộc vào quảng cáo đắt đỏ.",
      points: [
        "Định hình phong cách và thông điệp cốt lõi độc bản",
        "Xây dựng phễu nội dung chuyển đổi từ người theo dõi thành khách hàng",
        "Kèm cặp trực tiếp hàng tuần, tối ưu từng bài đăng",
      ],
    },
    {
      icon: Building2,
      title: "Đào tạo In-house cho Doanh nghiệp & Start-up",
      desc: "Nâng cao năng lực cho đội ngũ Marketing nội bộ của công ty. Giúp nhân sự làm chủ kỹ năng sáng tạo nội dung đa kênh, tăng tương tác và hiệu quả bán hàng.",
      points: [
        "Thiết kế chương trình theo đúng ngành hàng của doanh nghiệp",
        "Thực hành trực tiếp trên các kênh truyền thông của công ty",
        "Chuẩn hóa quy trình sản xuất nội dung định kỳ",
      ],
    },
    {
      icon: Layers,
      title: "Quản trị & Phát triển Mạng Xã Hội Trọn Gói",
      desc: "Đồng hành cùng doanh nghiệp từ A-Z: lập kế hoạch nội dung, viết bài, thiết kế hình ảnh, video ngắn và tương tác chăm sóc khách hàng trên đa kênh.",
      points: [
        "Đội ngũ nhân sự chuyên môn cao được đào tạo bài bản",
        "Cam kết số lượng và chất lượng nội dung đều đặn",
        "Báo cáo chỉ số tăng trưởng hàng tháng minh bạch",
      ],
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach text-xs font-semibold tracking-wider text-brand-dark uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>GIẢI PHÁP NỘI DUNG TOÀN DIỆN</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-neutral-900">
            Dịch vụ của Trang Lê
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Dù bạn là cá nhân muốn làm chủ ngòi bút hay doanh nghiệp cần giải pháp truyền thông đột phá, Trang luôn có giải pháp đồng hành phù hợp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-neutral-200 hover:border-brand-blue/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-peach flex items-center justify-center text-brand-dark mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-blue font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-neutral-100">
                  <a
                    href="https://www.facebook.com/letrang1010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-brand-dark text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-blue transition-colors"
                  >
                    Tư vấn trực tiếp cùng Trang
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-peach/50 border border-brand-peachDark/40 p-10 rounded-3xl text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-editorial text-2xl font-bold text-neutral-900">
            Bạn cần một giải pháp thiết kế riêng biệt?
          </h3>
          <p className="text-neutral-600 text-sm">
            Hãy liên hệ trực tiếp qua Zalo hoặc Facebook của Trang để trao đổi cụ thể về nhu cầu của bạn.
          </p>
          <div className="pt-2">
            <Link
              href="/register-trial-lesson"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white text-xs uppercase font-semibold tracking-wider hover:bg-brand-blueHover transition-colors"
            >
              Để lại thông tin nhận tư vấn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
