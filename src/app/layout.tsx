import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aradhyam Multi Cultural School, Gwalior",
  description: "Official website of Aradhyam Multi Cultural School, Gulabpuri, Badagaon, Morar, Gwalior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

