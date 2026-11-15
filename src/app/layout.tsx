import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="vi">
      <body className="min-h-screen flex flex-col font-magnificent text-[#020101] bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
