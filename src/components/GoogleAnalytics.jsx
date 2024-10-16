import Script from "next/script";

const GoogleAnalytics = () => (
    <>
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
    </>
);
export default GoogleAnalytics;