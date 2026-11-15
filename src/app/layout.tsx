import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trang Lê (Lam Khiết) | Đào tạo nghề viết Content Marketing & Social Media",
  description:
    "Đồng hành cùng những con người có tâm hồn tự do, thoát khỏi công việc văn phòng nhàm chán để xây dựng một sự nghiệp hoàn toàn tự do.",
  keywords: [
    "Trang Lê",
    "Lam Khiết",
    "Content Marketing",
    "Social Media Manager",
    "Khóa học Content",
    "Freelancer",
  ],
  authors: [{ name: "Trang Lê" }],
  openGraph: {
    title: "Trang Lê (Lam Khiết) | Đào tạo nghề viết Content Marketing",
    description: "Đồng hành cùng những con người có tâm hồn tự do xây dựng sự nghiệp hoàn toàn tự do.",
    url: "https://trangle.edu.vn",
    siteName: "Trang Lê Content Marketing",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans text-brand-dark bg-[#FFFDFC] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
