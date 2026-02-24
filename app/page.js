"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [result, setResult] = useState("نتیجہ یہاں ظاہر ہوگا");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
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
              required
            />
            <button type="submit">اہلیت چیک کریں</button>
          </form>

          <div className="result">
            <p>{result}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
