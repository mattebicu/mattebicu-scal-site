import './globals.css';

export const metadata = {
  title: "Scal Plastica | Circular Economy",
  description: "Servizi di consulenza e produzione plastica",
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