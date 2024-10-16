import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://www.luzo.app'),

    title: 'Contact Us | LUZO',
    description: 'Contact Us | LUZO',
}

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
