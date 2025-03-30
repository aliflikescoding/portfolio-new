import "./globals.css";

export const metadata = {
  title: "Alif Wibowo",
  description: "Personal website of Alif Wibowo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
