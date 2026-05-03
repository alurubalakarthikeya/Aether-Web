import { Poppins, Doto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const doto = Doto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-doto'
});

export const metadata = {
  title: 'Aether | Mental Wellness',
  description: 'A calm space to reflect, understand yourself, and build a better you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${doto.variable}`}>
        {children}
      </body>
    </html>
  );
}
