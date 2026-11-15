import Link from "next/link";
import { ArrowRight, Check, Sparkles, BookOpen, Users, Compass } from "lucide-react";

export default function CoursesSection() {
  const courses = [
    {
      id: "social-media-manager",
      title: "Social Media Manager",
      tag: "FLAGSHIP COURSE",
      badgeColor: "bg-brand-blue text-white",
      desc: "Vũ khí tối thượng để bạn bước ra làm chủ sự nghiệp tự do. Học cách sáng tạo nội dung, vận hành mạng xã hội và kiếm tiền ở bất kỳ đâu.",
      icon: Users,
      highlights: [
        "Xây dựng chiến lược nội dung đa nền tảng",
        "Nghệ thuật viết bài thu hút và chuyển đổi cao",
        "Quy trình tìm kiếm & chốt khách hàng tự do",
        "Tư duy vận hành công việc như một Solopreneur",
      ],
      featured: true,
    },
    {
      id: "content-marketing",
      title: "Content Marketing Thực Chiến",
      tag: "VIẾT ĐỂ BÁN HÀNG",
      badgeColor: "bg-emerald-600 text-white",
      desc: "Nâng cao năng lực viết lách thương mại. Từ một người sợ viết trở thành người viết có chiều sâu, chạm trúng tâm lý độc giả.",
      icon: BookOpen,
      highlights: [
        "Vượt qua nỗi sợ trang giấy trắng ngay buổi 1",
        "Công thức viết Storytelling & Copywriting",
        "Xây dựng phễu nội dung tự động hút khách",
        "Cầm tay sửa bài chi tiết từng câu chữ",
      ],
      featured: false,
    },
    {
      id: "mentorship-1on1",
      title: "Mentorship 1-on-1",
      tag: "ĐÀO TẠO ĐẶC BIỆT",
      badgeColor: "bg-amber-600 text-white",
      desc: "Chương trình huấn luyện cá nhân hóa trực tiếp cùng Cô Trang Lê. Thiết kế lộ trình riêng theo đúng mục tiêu nghề nghiệp và thế mạnh của bạn.",
      icon: Compass,
      highlights: [
        "Kèm cặp trực tiếp 1-1 không qua trung gian",
        "Định vị thương hiệu cá nhân độc bản",
        "Hỗ trợ kết nối dự án thực tế ngay khi học",
        "Đồng hành trọn đời trong cộng đồng riêng",
      ],
      featured: false,
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-peach text-xs font-semibold tracking-wider text-brand-dark uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>NIỀM TỰ HÀO CỦA TRANG</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Các khóa học được chào đón nhất
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Được thiết kế phù hợp cho bất kỳ ai, bất kỳ độ tuổi, ngành nghề nào để bạn tự tin tạo nguồn thu nhập độc lập.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  course.featured
                    ? "bg-[#FFFDFC] border-2 border-brand-blue shadow-xl lg:-translate-y-2"
                    : "bg-[#FFFDFC] border border-neutral-200 hover:border-brand-peachDark shadow-sm hover:shadow-md"
                }`}
              >
                {course.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold tracking-widest uppercase shadow">
                    ĐƯỢC ĐĂNG KÝ NHIỀU NHẤT
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${course.badgeColor}`}
                    >
                      {course.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-peach/60 flex items-center justify-center text-brand-dark">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-neutral-900 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <p className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                      Điểm nổi bật:
                    </p>
                    {course.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-neutral-100">
                  <Link
                    href="/register-trial-lesson"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-xs uppercase tracking-wider transition-all ${
                      course.featured
                        ? "bg-brand-blue text-white hover:bg-brand-blueHover shadow-md"
                        : "bg-brand-dark text-white hover:bg-neutral-800"
                    }`}
                  >
                    Đăng ký học thử ngay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/course"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline uppercase tracking-wider"
          >
            Xem chi tiết giáo trình tất cả các khóa học
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
