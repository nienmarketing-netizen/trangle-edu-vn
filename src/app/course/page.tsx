import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Clock, Users, Laptop } from "lucide-react";

export const metadata = {
  title: "Khóa học của Trang Lê | Social Media Manager & Content Marketing",
  description: "Các khóa học thực chiến giúp bạn xây dựng kỹ năng viết và quản trị mạng xã hội để kiếm tiền tự do.",
};

export default function CoursesPage() {
  const modules = [
    {
      week: "Module 01",
      title: "Giải mã Nghề Social Media Manager & Tư duy Tự do",
      desc: "Hiểu rõ bức tranh toàn cảnh về thị trường, cách định giá năng lực và thoát khỏi tâm lý nhân viên văn phòng.",
    },
    {
      week: "Module 02",
      title: "Chiến Lược Content Đa Kênh (Omnichannel Content)",
      desc: "Nắm vững thuật toán, hành vi người dùng trên Facebook, Instagram, TikTok và cách lập kế hoạch nội dung 30 ngày.",
    },
    {
      week: "Module 03",
      title: "Nghệ Thuật Viết Storytelling & Bán Hàng Chạm Cảm Xúc",
      desc: "Phương pháp đặt tiêu đề thôi miên, viết mở bài giữ chân người đọc và dẫn dắt họ đến hành động mua hàng tự nhiên.",
    },
    {
      week: "Module 04",
      title: "Thiết Kế Hình Ảnh & Video Ngắn Cơ Bản Dành Cho Dân Viết",
      desc: "Sử dụng Canva và các công cụ AI để phối hợp hình ảnh, bố cục bài viết chuyên nghiệp mà không cần biết Photoshop phức tạp.",
    },
    {
      week: "Module 05",
      title: "Quy Trình Tìm Kiếm, Đàm Phán & Ký Hợp Đồng Khách Hàng",
      desc: "Cách xây dựng Portfolio hút khách hàng inbound, mẫu hợp đồng, cách báo giá và giữ chân khách hàng lâu dài.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach text-xs font-semibold tracking-wider text-brand-dark uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>LỘ TRÌNH ĐÀO TẠO THỰC CHIẾN</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-neutral-900">
            Khóa học Social Media Manager Chuyên Sâu
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Chương trình được đúc kết từ 8+ năm kinh nghiệm quản trị nội dung thực tế. Không lý thuyết hàn lâm — học xong là có thể bắt tay làm việc và nhận dự án ngay.
          </p>
        </div>

        {/* Course Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-brand-peachLight border border-brand-peachDark/30 text-center">
            <Clock className="w-8 h-8 text-brand-blue mx-auto mb-3" />
            <h4 className="font-bold text-neutral-900 text-sm mb-1">Thời lượng học</h4>
            <p className="text-neutral-600 text-xs">6 - 8 Tuần thực chiến</p>
          </div>
          <div className="p-6 rounded-2xl bg-brand-peachLight border border-brand-peachDark/30 text-center">
            <Laptop className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bold text-neutral-900 text-sm mb-1">Hình thức học</h4>
            <p className="text-neutral-600 text-xs">Online linh hoạt + Zoom Q&A</p>
          </div>
          <div className="p-6 rounded-2xl bg-brand-peachLight border border-brand-peachDark/30 text-center">
            <BookOpen className="w-8 h-8 text-amber-600 mx-auto mb-3" />
            <h4 className="font-bold text-neutral-900 text-sm mb-1">Bài tập thực tế</h4>
            <p className="text-neutral-600 text-xs">Chấm chữa 1-1 từng bài viết</p>
          </div>
          <div className="p-6 rounded-2xl bg-brand-peachLight border border-brand-peachDark/30 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-neutral-900 text-sm mb-1">Cộng đồng</h4>
            <p className="text-neutral-600 text-xs">Hỗ trợ trọn đời & chia sẻ việc làm</p>
          </div>
        </div>

        {/* Modules Breakdown */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="font-editorial text-3xl font-bold text-neutral-900 text-center mb-8">
            Nội dung chương trình đào tạo
          </h2>

          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 hover:border-brand-blue/50 shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-blue">
                  {mod.week}
                </span>
                <span className="text-xs font-semibold text-neutral-400">Thực hành 100%</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{mod.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Course CTA */}
        <div className="bg-brand-black text-white p-10 sm:p-14 rounded-3xl text-center max-w-4xl mx-auto space-y-6">
          <h3 className="font-editorial text-3xl sm:text-4xl font-bold">
            Bạn muốn trải nghiệm phương pháp học trước khi quyết định?
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            Đăng ký học thử 1 buổi hoàn toàn miễn phí để kiểm chứng sự tiến bộ trong kỹ năng viết của bạn ngay hôm nay.
          </p>
          <div>
            <Link
              href="/register-trial-lesson"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-blueHover transition-colors shadow-lg"
            >
              Đăng ký học thử miễn phí ngay
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
