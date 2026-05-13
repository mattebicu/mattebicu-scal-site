// src/app/layout.js

import './globals.css';

export const revalidate = 0;

export const metadata = {
  title: "SCAL – Materie Plastiche",
  description: "Soluzioni sostenibili e innovative nel mondo delle materie plastiche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="h-full">
      <body className="flex flex-col min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}