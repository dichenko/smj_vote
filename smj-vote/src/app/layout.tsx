import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Голосование за Lego-мультфильм",
  description: "Форма для голосования за Lego-мультфильм. Номинация 'Выбор зрителя'",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#346cdb"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
