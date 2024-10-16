// "use client"

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically


export const metadata = {
  metadataBase: new URL('https://www.luzo.app'),
  title: 'LUZO | Avail Offers At Premium Salons and Spas',
  description: 'Best salons and spas • Trusted by 25,000+ customers • 40% OFF on your first appointment • Free booking • No cancellation fees • No pre-payment required',
  // other: {
  //   "facebook-domain-verification": "8pedts2d6xzp7soentdj3z6rlyep0z",
  // },
  openGraph: {
    // images: [posts.image,],
    title: `LUZO | Avail Offers At Premium Salons and Spas`,
    description: `Best salons and spas • Trusted by 25,000+ customers • 40% OFF on your first appointment • Free booking • No cancellation fees • No pre-payment required`,
    url: `https://luzo.app/`,
  },
  icons: {
    icon: '/img/icon.webp',
    apple: "/img/icon.webp",
    shortcut: "/img/icon.webp",
    other: [{
      url: "/appicon/safari-pinned-tab.svg",
      type: "image/svg+xml",
      sizes: "any",
      rel: "mask-icon"
    },
    {
      url: "/img/icon.webp",
      type: "image/webp",
      sizes: "16x16",
      rel: "icon"

    }, {
      url: "/img/icon.webp",
      type: "image/png",
      sizes: "32x32",
      rel: "icon"

    },
    {
      url: "/img/icon.webp",
      type: "image/png",
      sizes: "96x96",
      rel: "icon"

    },
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google analytics script */}
      <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-6V3T5CZ1YT`}
        ></Script>
        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6V3T5CZ1YT');
        `,
            }}
        ></Script>

        {/* linkedin script */}
         <Script id="linkedin-insight" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "6238060";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `
        }} />
        <Script id="linkedin-insight-load" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=6238060&fmt=gif" />
        </noscript>
      

        

      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
