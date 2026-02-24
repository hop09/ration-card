import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Ramzan Nigehban Program",
  description: "رمضان نگہبان پروگرام - اپنا CNIC درج کریں اور اپنی اہلیت چیک کریں",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        {children}

        {/* Popunder Ad */}
        <Script
          src="https://pl28782145.effectivegatecpm.com/38/19/c0/3819c0aa2fc0a5a630ac060365ea7ed4.js"
          strategy="afterInteractive"
        />

        {/* Social Bar Ad */}
        <Script
          src="https://pl28782159.effectivegatecpm.com/40/18/9e/40189e7ac5d4e463c003358f251019eb.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
