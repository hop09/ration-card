"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const [result, setResult] = useState(null);
  const [cnic, setCnic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cnic.length === 13 && /^[0-9]{13}$/.test(cnic)) {
      setResult("not-eligible");
    }
  };

  return (
    <>
      {/* Top Banner 728x90 */}
      <div className="adBanner adBannerTop">
        <Script
          id="banner-728-options"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : 'bd6202b3617b4d18ab165c53447bdda1',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          src="https://www.highperformanceformat.com/bd6202b3617b4d18ab165c53447bdda1/invoke.js"
          strategy="afterInteractive"
        />
      </div>

      <section className="container">
        {/* Left Side Image */}
        <div className="left">
          <Image
            src="/maryam.png"
            alt="Maryam Nawaz"
            width={400}
            height={400}
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="right">
          <div className="formBox">
            <h1>رمضان نگہبان پروگرام</h1>
            <p>اپنا CNIC درج کریں اور اپنی اہلیت چیک کریں</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="13 ہندسوں والا CNIC درج کریں"
                maxLength={13}
                pattern="[0-9]{13}"
                value={cnic}
                onChange={(e) => setCnic(e.target.value.replace(/\D/g, ""))}
                required
              />
              <button type="submit">اہلیت چیک کریں</button>
            </form>

            {/* Result Area */}
            {result === null && (
              <div className="result">
                <p>نتیجہ یہاں ظاہر ہوگا</p>
              </div>
            )}

            {result === "not-eligible" && (
              <div className="resultNotEligible">
                <div className="resultIcon">✕</div>
                <h3>آپ اہل نہیں ہیں</h3>
                <p>
                  معذرت! آپ کا CNIC نمبر <strong>{cnic}</strong> رمضان نگہبان
                  پروگرام کے لیے اہل نہیں ہے۔
                </p>
                <p className="registerText">
                  اگر آپ اس پروگرام میں رجسٹر ہونا چاہتے ہیں تو نیچے دیے گئے
                  لنک پر کلک کریں:
                </p>
                <Link href="/register" className="registerLink">
                  ابھی رجسٹر کریں
                </Link>
              </div>
            )}

            {/* Native Banner Ad - below result */}
            <div className="adNative">
              <Script
                async
                data-cfasync="false"
                src="https://pl28782156.effectivegatecpm.com/f6426ee948d2461b520759b788f3d50e/invoke.js"
                strategy="afterInteractive"
              />
              <div id="container-f6426ee948d2461b520759b788f3d50e"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner 468x60 */}
      <div className="adBanner adBannerBottom">
        <Script
          id="banner-468-options"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '6459a8cba4ca9c4be9c95b2c626d8d91',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
              };
            `,
          }}
        />
        <Script
          src="https://www.highperformanceformat.com/6459a8cba4ca9c4be9c95b2c626d8d91/invoke.js"
          strategy="afterInteractive"
        />
      </div>
    </>
  );
}
