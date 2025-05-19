import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { initializeIcons } from "@fluentui/react";
import { Providers } from "./providers";
import { getAllDishes } from "@/data/dishes";
const inter = Inter({ subsets: ["latin"] });

// Initialize Fluent UI icons
if (typeof window !== "undefined") {
  initializeIcons();
}

export const metadata: Metadata = {
  title: "Cuisine Pro",
  description: "Explore the rich flavors of Indian cuisine",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dishes = await getAllDishes();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header dishes={dishes} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
