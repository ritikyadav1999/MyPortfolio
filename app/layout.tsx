import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ritik Yadav - Home',
  description: 'The official portfolio of Ritik Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ritikyadav.vercel.app',
    title: "Aritra Bose - Home",
    siteName: 'Aritra Bose',
    description: "The official portfolio of Ritik Yadav",
    images: [
      {
        url: 'icon.svg',
        width: 256,
        height: 256,
      }
    ],
  },
  twitter: {
    title: "Ritik Yadav - Home",
    description: "The official portfolio of Ritik Yadav",
    card: "summary_large_image",
    images: [
      {
        url: 'apple-icon.png',
        width: 256,
        height: 256,
      }
    ],
  }
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased cursor-none", inter.className)}>
        <Cursor/>
        <Navbar />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout;
