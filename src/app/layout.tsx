import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BlackHoleBackground from "@/components/BlackHoleBackground";
import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import { ThemeProvider } from "../components/theme-provider";

import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";

// Fonte para títulos
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Fonte para textos corridos
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const meta = {
  title: "Eliude Francisco",
  description: "",
};

export const metadata: Metadata = {
  //metadataBase: new URL(baseUrl),
  title: {
    default: meta.title,
    template: "%s | Eliude Francisco",
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    //url: baseUrl,
    siteName: meta.title,
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Eliude Francisco",
    "Eliude Paulo Quintas Francisco",
    "Eliude",
    "Quintas",
    "Francisco",
    "eliudefrancisco14",
    "Back-End Developer",
    "Back-End",
    "Developer",
    "Software",
    "Engineer",
    "Angola",
    "Luanda",
    "Vercel",
    "Next.js",
    "TailwindCSS",
    "Blog",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${montserrat.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BlackHoleBackground />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
