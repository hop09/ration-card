import "./globals.css";

export const metadata = {
  title: "Ramzan Nigehban Program",
  description: "رمضان نگہبان پروگرام - اپنا CNIC درج کریں اور اپنی اہلیت چیک کریں",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
