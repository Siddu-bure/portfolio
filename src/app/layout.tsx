import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";
import WindowTouchPatcher from "@/components/WindowTouchPatcher";
import { SmokeyFluidCursor } from "react-smokey-fluid-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddardha Bure | AI Engineer & SDE",
  description:
    "Portfolio of Siddardha Bure — AI Engineer & SDE. B.Tech AI & Data Science @ IIT Jodhpur.",
  openGraph: {
    title: "Siddardha Bure | AI Engineer & SDE",
    description:
      "Portfolio of Siddardha Bure — AI Engineer & SDE. B.Tech AI & Data Science @ IIT Jodhpur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Aurora />
        <WindowTouchPatcher />
        <SmokeyFluidCursor
          config={{
            transparent: true,
            densityDissipation: 0.98,
            velocityDissipation: 0.98,
            curl: 30,
            splatRadius: 0.2,
            splatForce: 6000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
