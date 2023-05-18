import '@/styles/globals.css'
import { Roboto } from 'next/font/google';

export const meta = {
  title: 'CV-APP',
  description: 'Application cv-online',
}
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="bg-zinc-600 text-black">{children}</body>
    </html>
  );
}