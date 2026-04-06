import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "sonner";


import "./styles/globals.scss";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  fallback: ["sans-serif"],

});

export const metadata: Metadata = {
  title: "Baver | Voda, plyn a kúrenie — spolahlivо a načas",
  description: "BAVER je vaším partnerom pre kompletnú inštaláciu a servis vody, plynu a vykurovania. Pracujeme rýchlo, poctivo a s dôrazom na každý detail. Naše služby zahŕňajú inštaláciu, opravy a údržbu, pričom kladieme dôraz na kvalitu a spokojnosť zákazníka. S BAVER získate spoľahlivého partnera pre všetky vaše potreby v oblasti vody, plynu a kúrenia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={ubuntu.className + " scroll-smooth"}
    >
      <body className="min-h-full flex flex-col">{children}

      <Toaster position="bottom-center" richColors expand={true} />
      </body>
    </html>
  );
}
