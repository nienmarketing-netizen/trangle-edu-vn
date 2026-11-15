import Link from "next/link";
import { FeatherArrow } from "@/components/EditorialArrow";

export default function CoursesSection() {
  const topCourses = [
    { title: "Content Marketing", href: "/course" },
    { title: "Social Media Manager", href: "/course" },
    { title: "Personal Branding", href: "/course" },
    {
      title: "Money Master",
      href: "https://www.youtube.com/watch?v=PyOG4fbziyQ&list=PLcDAePPn7pxSzpaBiqkGZhDhk9GZgzqkj",
      external: true,
    },
    { title: "Design Website in One Day", href: "/course" },
  ];

  return (
    <section id="courses" className="border-b border-[#181818] bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="font-magnificent text-base font-semibold tracking-[2px] uppercase text-[#020101]">
            NIỀM TỰ HÀO CỦA TRANG
          </h3>

          <div className="w-full border-t border-[#181818]" />

          <h2 className="font-outersans text-4xl sm:text-5xl lg:text-6xl font-black text-[#020101] uppercase tracking-tight leading-tight">
            CÁC KHÓA HỌC ĐƯỢC CHÀO ĐÓN NHẤT
          </h2>

          <p className="font-magnificent text-base sm:text-lg text-[#020101] leading-relaxed pt-2 max-w-3xl">
            Trong hơn 8 năm chia sẻ, đào tạo về Content Marketing và Digital Marketing, những khóa học của Trang được các học viên ủng hộ vì xây dựng phù hợp cho bất kỳ ai, bất kỳ độ tuổi, bất kỳ ngành nghề nào.
          </p>
        </div>

        {/* Top 5 Boxed Courses List */}
        <div className="pt-6 space-y-4">
          <h4 className="font-magnificent text-xl font-bold tracking-[1.5px] uppercase text-[#020101]">
            TOP 5 KHÓA HỌC
          </h4>

          <div className="border border-[#181818] divide-y divide-[#181818] bg-white">
            {topCourses.map((c, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 flex items-center justify-between hover:bg-[#FFEAE3] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-outersans text-lg font-bold text-[#020101]/40 group-hover:text-[#020101]">
                    0{i + 1}
                  </span>
                  {c.external ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-magnificent text-lg sm:text-xl font-bold text-[#020101] group-hover:text-[#487AFF] transition-colors"
                    >
                      {c.title} ↗
                    </a>
                  ) : (
                    <Link
                      href={c.href}
                      className="font-magnificent text-lg sm:text-xl font-bold text-[#020101] group-hover:text-[#487AFF] transition-colors"
                    >
                      {c.title}
                    </Link>
                  )}
                </div>

                <Link
                  href="/register-trial-lesson"
                  className="font-outersans-thin text-xs font-bold uppercase tracking-wider text-[#020101] border border-[#181818] px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-all hidden sm:inline-block"
                >
                  Đăng ký
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/course"
            className="editorial-btn text-sm tracking-[1.5px]"
          >
            <FeatherArrow className="w-5 h-4" />
            <span>XEM THÊM KHÓA HỌC</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
