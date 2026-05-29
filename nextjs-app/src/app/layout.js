import { Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import NotificationPopup from "../components/NotificationPopup";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Quảng Vị - Hương Vị Miền Trung",
  description: "Hương vị truyền thống, đậm đà khó quên",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${lora.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <NotificationPopup />
          <Header />
          <HeroBanner />
          <main className="content-container flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
