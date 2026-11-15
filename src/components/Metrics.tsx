export default function Metrics() {
  const cards = [
    {
      num: "90%",
      text: "HỌC VIÊN CỦA TRANG VIẾT TỐT NGAY TỪ BUỔI HỌC ĐẦU TIÊN VÀ SAU KHOÁ HỌC ĐỀU TRỞ THÀNH SOCIAL MEDIA MANAGER TỰ DO.",
    },
    {
      num: "80%",
      text: "HỌC VIÊN CỦA TRANG KHÔNG LÀM VIỆC HAY HỌC TẬP TỪ NHỮNG NGÀNH LIÊN QUAN ĐẾN MARKETING VÀ TRUYỀN THÔNG.",
    },
    {
      num: "15%",
      text: "HỌC VIÊN CỦA TRANG SAU 2 NĂM ĐÃ TỰ XÂY DỰNG NÊN MỘT ĐỘI NHÓM/ CÔNG TY AGENCY CỦA RIÊNG MÌNH.",
    },
  ];

  return (
    <section className="bg-[#FFD2C3] border-b border-[#181818] py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FFEAE3] border border-[#181818] p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Giant Outline Number */}
              <div className="font-outersans-outline text-7xl sm:text-8xl font-black text-[#020101] leading-none mb-6">
                {item.num}
              </div>

              <div className="w-full border-t border-[#181818] my-6" />

              {/* Text in SVN-Magnificent uppercase */}
              <p className="font-magnificent text-sm sm:text-base font-bold text-[#020101] leading-relaxed uppercase">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
