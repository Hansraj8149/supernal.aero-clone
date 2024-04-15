import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({

  subsets: ['latin'],
  weight:['400','500','300']

})

export const metadata: Metadata = {
  title: "Supernal.aero",
  description: "supernal aero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
    
        {children}
        </body>
    </html>
  );
}
