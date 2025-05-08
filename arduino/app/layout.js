// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My Website',
  description: 'Generated with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
