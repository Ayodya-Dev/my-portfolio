import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ayodya.dev'),
  title: {
    default: 'Ayodya Sasanka | Full-Stack Developer & Founder',
    template: '%s | Ayodya Sasanka'
  },
  description: 'Full-Stack Developer specializing in React, Next.js, and scalable web applications. Software Engineering student at Cardiff Metropolitan University. Founder of Codexeed Software Company.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Cardiff Metropolitan University'],
  authors: [{ name: 'Ayodya Sasanka' }],
  openGraph: {
    title: 'Ayodya Sasanka | Full-Stack Developer & Founder',
    description: 'Full-Stack Developer specializing in React, Next.js, and scalable web applications.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ayodya.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayodya Sasanka | Full-Stack Developer & Founder',
    description: 'Full-Stack Developer specializing in React, Next.js, and scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
