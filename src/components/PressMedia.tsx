import Image from "next/image";

export default function PressMedia() {
  return (
    <section className="bg-[#020101] text-white py-10 px-6 sm:px-12 lg:px-20 border-b border-[#181818]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <h3 className="font-magnificent text-lg sm:text-xl font-semibold tracking-[2px] uppercase text-white whitespace-nowrap">
          TRANG LÊ VÀ BÁO CHÍ
        </h3>

        <div className="relative w-full max-w-2xl h-14 sm:h-16 invert">
          <Image
            src="/uploads/2023/03/BAO-CHI.png"
            alt="Trang Lê và Báo chí"
            fill
            className="object-contain object-center md:object-right"
          />
        </div>
      </div>
    </section>
  );
}
