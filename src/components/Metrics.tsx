export default function Metrics() {
  const stats = [
    {
      value: "90%",
      label: "Học viên viết tốt ngay từ buổi học đầu tiên",
      desc: "Và sau khóa học đều tự tin nhận dự án, trở thành Social Media Manager tự do.",
    },
    {
      value: "80%",
      label: "Học viên là người trái ngành hoàn toàn",
      desc: "Không xuất phát từ Marketing hay Truyền thông (dược sĩ, ngân hàng, văn phòng, mẹ bỉm).",
    },
    {
      value: "15%",
      label: "Xây dựng agency của riêng mình",
      desc: "Sau 2 năm kiên trì, tự lập đội nhóm và mở công ty dịch vụ sáng tạo độc lập.",
    },
    {
      value: "500+",
      label: "Học viên đồng hành & tự do",
      desc: "Hơn 8 năm đào tạo thực chiến và tạo tác động thực tế tới học viên khắp cả nước.",
    },
  ];

  return (
    <section className="py-20 bg-brand-peach/40 border-y border-brand-peachDark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-blue">
            KẾT QUẢ ĐÃ ĐƯỢC CHỨNG MINH
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-neutral-900">
            Điều gì tạo ra kết quả khác biệt đó?
          </h2>
          <p className="text-neutral-600 text-base">
            Phương pháp đào tạo “Cầm tay chỉ việc”, thực chiến 100% dựa trên kinh nghiệm lăn lộn thương trường, nói không với lý thuyết giáo điều.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-brand-peachDark/30 text-center flex flex-col justify-between"
            >
              <div>
                <span className="block font-editorial text-5xl sm:text-6xl font-extrabold text-brand-dark mb-4">
                  {item.value}
                </span>
                <h3 className="font-semibold text-neutral-900 text-base mb-2">
                  {item.label}
                </h3>
              </div>
              <p className="text-neutral-500 text-xs sm:text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
