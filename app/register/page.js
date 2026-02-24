"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Script from "next/script";

function AdSlot({ type, id }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        // Clear previous content
        containerRef.current.innerHTML = "";

        if (type === "native") {
            const script = document.createElement("script");
            script.async = true;
            script.setAttribute("data-cfasync", "false");
            script.src =
                "https://pl28782156.effectivegatecpm.com/f6426ee948d2461b520759b788f3d50e/invoke.js";
            const div = document.createElement("div");
            div.id = "container-f6426ee948d2461b520759b788f3d50e";
            containerRef.current.appendChild(div);
            containerRef.current.appendChild(script);
        } else if (type === "banner468") {
            const optScript = document.createElement("script");
            optScript.innerHTML = `
        atOptions = {
          'key' : '6459a8cba4ca9c4be9c95b2c626d8d91',
          'format' : 'iframe',
          'height' : 60,
          'width' : 468,
          'params' : {}
        };
      `;
            const invokeScript = document.createElement("script");
            invokeScript.src =
                "https://www.highperformanceformat.com/6459a8cba4ca9c4be9c95b2c626d8d91/invoke.js";
            containerRef.current.appendChild(optScript);
            containerRef.current.appendChild(invokeScript);
        } else if (type === "banner728") {
            const optScript = document.createElement("script");
            optScript.innerHTML = `
        atOptions = {
          'key' : 'bd6202b3617b4d18ab165c53447bdda1',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
            const invokeScript = document.createElement("script");
            invokeScript.src =
                "https://www.highperformanceformat.com/bd6202b3617b4d18ab165c53447bdda1/invoke.js";
            containerRef.current.appendChild(optScript);
            containerRef.current.appendChild(invokeScript);
        }
    }, [type]);

    return <div ref={containerRef} className="adBetween" id={`ad-slot-${id}`} />;
}

export default function RegisterPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cnic = e.target.cnic.value;
        const cnicRegex = /^\d{13}$/;

        if (!cnicRegex.test(cnic)) {
            alert("براہ کرم 13 ہندسوں والا درست CNIC نمبر درج کریں۔");
            return;
        }

        setSubmitted(true);
    };

    return (
        <>
            {/* Top Banner 728x90 */}
            <div className="adBanner adBannerTop">
                <Script
                    id="reg-banner-728-options"
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

            {/* Header */}
            <header className="regHeader">
                <div className="regLogo">آن لائن راشن کارڈ پورٹل</div>
            </header>

            <div className="regWrapper">
                {/* Image Section */}
                <div className="regImageSection">
                    <div className="regImageLogos">
                        <img
                            src="https://images.seeklogo.com/logo-png/23/1/government-of-punjab-logo-png_seeklogo-230804.png"
                            alt="حکومت پنجاب"
                            height={60}
                        />
                    </div>
                    <Image
                        src="/maryamnawaz.jpg"
                        alt="نگہبان پروگرام پنجاب"
                        width={600}
                        height={400}
                        className="regMainImg"
                        style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                        priority
                    />

                    {/* Native Banner Ad in image section */}
                    <AdSlot type="native" id="img-native" />
                </div>

                {/* Form Section */}
                <div className="regFormSection">
                    <div className="regTitleWrapper">
                        <h2 className="regTitleUrdu">درخواست فارم 2026</h2>
                    </div>

                    <p className="regSubtitle">
                        براہ کرم راشن کارڈ کے لیے اپنی تفصیلات درج کریں۔
                    </p>

                    {!submitted ? (
                        <form id="rationForm" onSubmit={handleSubmit}>
                            <div className="regFormGroup">
                                <label>پورا نام</label>
                                <input type="text" name="fullName" required />
                            </div>

                            <AdSlot type="native" id="after-name" />

                            <div className="regFormGroup">
                                <label>شناختی کارڈ نمبر (13 ہندسے)</label>
                                <input type="text" name="cnic" maxLength={13} required />
                            </div>

                            <AdSlot type="banner468" id="after-cnic" />

                            <div className="regFormGroup">
                                <label>فون نمبر</label>
                                <input type="tel" name="phone" required />
                            </div>

                            <AdSlot type="banner728" id="after-phone" />

                            <div className="regFormGroup">
                                <label>خاندان کے افراد</label>
                                <input type="number" name="familyMembers" min="1" required />
                            </div>

                            <AdSlot type="native" id="after-family" />

                            <div className="regFormGroup">
                                <label>رہائشی پتہ</label>
                                <textarea name="address" rows={2} required></textarea>
                            </div>

                            <AdSlot type="banner468" id="after-address" />

                            <div className="regFormGroup">
                                <label>ماہانہ آمدن (روپے)</label>
                                <input type="number" name="income" required />
                            </div>

                            <AdSlot type="banner728" id="after-income" />

                            <button type="submit" className="regSubmitBtn">
                                درخواست جمع کریں
                            </button>
                        </form>
                    ) : (
                        <div className="successMsg">
                            <div className="successIcon">✓</div>
                            <h3>کامیابی!</h3>
                            <p>
                                آپ کی درخواست کامیابی سے جمع کر دی گئی ہے۔ آپ کی درخواست کا
                                جائزہ لیا جائے گا اور آپ کو جلد مطلع کیا جائے گا۔
                            </p>
                            <p className="successNote">
                                براہ کرم اپنا CNIC نمبر محفوظ رکھیں تاکہ آپ اپنی درخواست کی
                                صورتحال چیک کر سکیں۔
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="regFooter">
                <p>&copy; 2026 راشن کارڈ پورٹل - حکومت پنجاب</p>
            </footer>

            {/* Bottom Banner 468x60 */}
            <div className="adBanner adBannerBottom">
                <Script
                    id="reg-banner-468-options"
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
