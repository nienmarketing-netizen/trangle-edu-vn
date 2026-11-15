export default function SectionWhyAndJourney() {
  return (
    <>
      {/* Section 6: ĐIỀU GÌ TẠO RA KẾT QUẢ ĐÓ? */}
      <section className="border-b border-[#181818] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Yellow Badge Accent (#F5FE6C) */}
          <div className="lg:col-span-5 bg-[#F5FE6C] lg:border-r border-b lg:border-b-0 border-[#181818] flex items-center justify-center p-8 sm:p-14 lg:p-20">
            <h2 className="font-outersans text-4xl sm:text-5xl lg:text-6xl font-black text-[#020101] uppercase tracking-tight leading-[1.05] text-center lg:text-left">
              ĐIỀU GÌ TẠO RA KẾT QUẢ ĐÓ?
            </h2>
          </div>

          {/* Right Column: Explanatory Text */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 space-y-6">
            <div className="font-magnificent text-base sm:text-lg text-[#020101] leading-relaxed space-y-4">
              <p>
                Mạng xã hội là một công cụ tuyệt vời để xây dựng nội dung cho cả doanh nghiệp lẫn cá nhân.
              </p>
              <p>
                Khóa học Content Marketing và Social Media là 02 khóa học giúp học viên nhanh chóng bước một bước đầu tiên vào hành trình chinh phục sự tự do hoàn toàn bằng mạng xã hội.
              </p>
              <p>
                Mạng xã hội cho phép bất kỳ ai ở bất kỳ ngành nghề nào chia sẻ câu chuyện của mình, cung cấp dịch vụ và bắt đầu kinh doanh online.
              </p>
              <p>
                Những khóa học của Trang được xây dựng phù hợp với đa dạng đối tượng, để bất kỳ ai cũng có thể bắt đầu tạo ra một nguồn thu nhập không giới hạn ở bất kỳ đâu và bất kỳ lúc nào.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CON ĐƯỜNG CỦA TRANG */}
      <section className="border-b border-[#181818] bg-white py-16 sm:py-20 px-6 sm:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="font-magnificent text-xl sm:text-2xl font-bold tracking-[2px] uppercase text-[#020101]">
            CON ĐƯỜNG CỦA TRANG
          </h3>
          
          <div className="w-24 mx-auto border-t-2 border-[#181818]" />

          <p className="font-magnificent text-lg sm:text-xl text-[#020101] leading-relaxed italic">
            “Hơn 8 năm qua, ngoài xây dựng sự nghiệp cá nhân, nhiệm vụ của Trang là đồng hành cùng hơn 500 học viên — những người có <span className="font-bold">“tâm hồn tự do”</span> xây dựng một sự nghiệp và kiếm tiền <span className="font-bold uppercase">HOÀN TOÀN TỰ DO</span> cả về không gian lẫn thời gian.”
          </p>
        </div>
      </section>
    </>
  );
}
