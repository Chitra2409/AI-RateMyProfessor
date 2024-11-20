import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import toast, { Toaster } from 'react-hot-toast';

import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProfSpector",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {<Navbar /> }
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
