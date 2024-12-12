import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BlackHoleBackground from "@/components/BlackHoleBackground";
import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import { ThemeProvider } from "../components/theme-provider";
import BlackHoleBackgroundDark from "@/components/BlackHoleBackgroundDark";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    "Eliude",
    "Francisco",
    "eliudefrancisco.com",
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
      className={cx(
        "text-base font-sans",
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body
        className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto"
      >
        <BlackHoleBackground />
        <BlackHoleBackgroundDark />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
