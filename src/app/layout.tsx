import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "I'm Oriol Fontcuberta Aduart",
  description: "I'm a software engineer based in Barcelona, Spain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body> 
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <div>
              {children}
              <Navbar />
              <Analytics />
            </div>
            </ThemeProvider>
          </body>
      </html>
  );
}
