import type { Metadata } from 'next';

import '../assets/styles/base/base.scss';

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created...'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
