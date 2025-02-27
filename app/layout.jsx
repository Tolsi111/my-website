import { Inter } from "next/font/google";
import "./globals.scss";
import styles from "./page.module.scss";
import AnimatedBackground from "@/components/animated-background/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {//${'light-theme'}
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.main}`}>
        <AnimatedBackground/>
        {children}
      </body>
    </html>
  );
}
