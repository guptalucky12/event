import { Metadata } from "next";
import { Poppins } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'eVenTO Management Services',
  description: "eVenTO is a Platform for All Event Manage.",
  icons: {
    icon: "/assets/images/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}