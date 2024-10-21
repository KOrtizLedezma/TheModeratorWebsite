"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';
const QRCode = require('qrcode');

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      QRCode.toCanvas(
        canvas,
        'https://discord.com/oauth2/authorize?client_id=1297779637317009519',
        { width: 200 },
        function (error) {
          if (error) console.error(error);
          console.log('QR code generated successfully!');
        }
      );
    }
  }, []);

  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <div className="logo">The Moderator</div>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Help">Help</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-design">
        <h1 className="animate__animated animate__bounceInDown">
          The Moderator
        </h1>
      </div>

      <div className="qr-container">
        <canvas ref={canvasRef}></canvas>
      </div>
      
      <div className="buttons-design">
        <button className="button" onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1297779637317009519')}>
          Add me to your Discord
        </button>
        <button className="button" onClick={() => window.open('https://github.com/KOrtizLedezma/TheModeratorWebsite')}>
          Check out our Github
        </button>
      </div>
    </div>
  );
}
