import Image from "next/image";

export default function PressMedia() {
  return (
    <section className="py-12 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-8">
          TRANG LÊ VÀ BÁO CHÍ • TRUYỀN THÔNG NÓI GÌ
        </p>

        <div className="relative max-w-4xl mx-auto h-16 sm:h-20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          <Image
            src="/uploads/2023/03/BAO-CHI.png"
            alt="Trang Lê trên các trang báo chí uy tín"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
