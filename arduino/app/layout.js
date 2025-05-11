// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Arduino Workshop',
  description: 'Join us for an exciting Arduino workshop!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
