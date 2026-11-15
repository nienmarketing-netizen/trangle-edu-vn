import Image from "next/image";
import Link from "next/link";
import { FeatherArrow } from "@/components/EditorialArrow";

export default function AboutTrang() {
  return (
    <section id="about" className="border-b border-[#181818] bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: Text & Story */}
        <div className="lg:col-span-7 px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24 space-y-6">
          {/* Eyebrow */}
          <div>
            <h3 className="font-magnificent text-base font-semibold tracking-[2px] uppercase text-[#020101]">
              TRANG LÀ AI?
            </h3>
            <div className="w-full my-4 border-t border-[#181818]" />
          </div>

          {/* Big Stacked Heading */}
          <div className="space-y-2">
            <h2 className="font-outersans stroke-blue-text text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none">
              TRANG LÊ
            </h2>
            <div className="w-full my-3 border-t border-[#181818]" />
            <h2 className="font-outersans text-5xl sm:text-6xl lg:text-7xl font-black text-[#020101] uppercase leading-none">
              CONTENT
            </h2>
          </div>

          {/* Narrative in SVN-Magnificent */}
          <div className="space-y-4 pt-4 text-base sm:text-lg text-[#020101] leading-relaxed font-magnificent">
            <p>
              Năm 2014, Trang từ Đà Nẵng vào Sài Gòn và bắt đầu công việc Content Leader cho một công ty Start-up Top 10 trong ngành F&amp;B.
            </p>
            <p>
              Nhưng công việc văn phòng <span className="italic font-bold">“sáng cắp ô đi, tối cắp ô về”</span> khiến cho một “tâm hồn tự do” như Trang trở nên bí bách.
            </p>
            <p>
              Rồi Trang quyết định <span className="font-bold">“MÌNH PHẢI THẬT TỰ DO”</span> và rời khỏi công ty, trở thành một Content Freelancer.
            </p>
            <p>
              Sau hơn 8 năm, vừa xây dựng sự nghiệp, vừa học tập liên tục vừa chia sẻ và dạy về nghề viết Content, hiện tại Trang luôn tự hào vì đã truyền nhiều cảm hứng, kiến thức và kinh nghiệm cho hơn 500 học viên xây dựng được một sự nghiệp <span className="font-bold uppercase">HOÀN TOÀN TỰ DO</span>.
            </p>
          </div>

          {/* Button */}
          <div className="pt-6">
            <Link
              href="/services"
              className="editorial-btn text-sm tracking-[1.5px]"
            >
              <FeatherArrow className="w-5 h-4" />
              <span>KẾT NỐI VỚI TRANG</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Portrait on Clean Border */}
        <div className="lg:col-span-5 bg-neutral-50 lg:border-l border-t lg:border-t-0 border-[#181818] relative min-h-[420px] lg:min-h-full">
          <Image
            src="/uploads/2023/03/2021Feb11-VanessaTeamShoot-Final-Webt0009.jpg"
            alt="Trang Lê Content"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
