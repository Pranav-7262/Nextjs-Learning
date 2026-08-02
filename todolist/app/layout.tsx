import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Manage your daily tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-100">
        <NavBar />

        <main className="flex-1 max-w-6xl w-full mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
