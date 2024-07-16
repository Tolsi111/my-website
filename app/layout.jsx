import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./page.module.scss";
import AnimatedBackground from "@/components/animated-background/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AnimatedBackground/>
      <body className={`${inter.className} ${styles.main}`}>{children}</body>
    </html>
  );
}
