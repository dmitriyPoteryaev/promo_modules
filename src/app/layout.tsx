import type { Metadata } from 'next';

import '../assets/styles/base/base.scss';

export const metadata: Metadata = {
  title: 'Akytec-promo-modules',
  description: 'Akytec-promo-modules',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
    {/* Google Tag Manager */}
    <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TSCDP3');
            `,
          }}
        />
        {/* End Google Tag Manager */}


      </head>
      <body>
   {/* Google Tag Manager (noscript) */}
   <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSCDP3"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div id="root">{children}</div>
      </body>
    </html>
  )
}