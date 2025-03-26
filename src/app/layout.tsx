import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Голосование за Lego-мультфильм",
  description: "Форма для голосования за Lego-мультфильм. Номинация 'Выбор зрителя'"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#6366f1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
