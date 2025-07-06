'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contractAddress = "4mu1ig6ML6ZQm5sVkWHVjuCttYADn9wguMsyvXsCbonk";

  // Meme gallery images
  const memeImages = [
    { src: "/memes_gallery/WsgEl7rO.jpg", alt: "FONK - The Original Farting Dog" },
    { src: "/memes_gallery/VtA3pL5E.jpg", alt: "FONK You Pump - Anti-Pump Message" },
    { src: "/memes_gallery/6gNto0Ut.jpg", alt: "FONK Moon Mission - Space Farting" },
    { src: "/memes_gallery/7N74WrBa.jpg", alt: "FONK Elon's Fuel Source - Mars Mission" },
    { src: "/memes_gallery/A9CxNSxn.jpg", alt: "FONK Market Insider Gas" },
    { src: "/memes_gallery/nHnMk2Oo.jpg", alt: "FONK Poot Rocket Launch" },
    { src: "/memes_gallery/P6ngp8MA.jpg", alt: "FONK Fart Mic'd Lobby Cleared" },
    { src: "/memes_gallery/planet.jpg", alt: "FONK Galactic Farting Mission" },
    { src: "/memes_gallery/sCk5WAew.jpg", alt: "FONK vs BONK - Drake Meme" },
    { src: "/memes_gallery/zkTqKLg6.jpg", alt: "FONK Classic Logo Design" },
    { src: "/memes_gallery/fonk.jpg", alt: "FONK Official Mascot" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400">
      {/* Navigation */}
      <nav className="relative z-10 bg-gradient-to-r from-orange-800/60 to-orange-900/70 backdrop-blur-lg border-b border-orange-400/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black text-white drop-shadow-lg">
            💨 $FONK 💨
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-white hover:text-yellow-200 transition-all duration-300 font-bold text-lg hover:scale-105">
              About
            </a>
            <a href="#memes" className="text-white hover:text-yellow-200 transition-all duration-300 font-bold text-lg hover:scale-105">
              Memes
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white text-2xl">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                $FONK
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white mb-3 drop-shadow-xl font-bold">
              💨 FARTING BONK 💨
            </p>
            
            <p className="text-lg md:text-xl text-white mb-8 drop-shadow-lg font-medium max-w-2xl mx-auto">
              The most <span className="text-yellow-200 font-bold">EXPLOSIVE</span> meme coin on Solana! 
              <br />Join the FONK revolution! 🚀
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <Image
                src="/memes_gallery/WsgEl7rO.jpg"
                alt="FONK - The Farting Bonk"
                width={300}
                height={300}
                className="relative z-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* X Community and Contract Address in One Line */}
          <div className={`flex flex-col md:flex-row gap-6 items-center justify-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* X Community Button */}
            <a
              href="https://x.com/i/communities/1941912851263979927"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-black text-lg transition-all duration-300 shadow-2xl transform hover:scale-105 flex items-center gap-3"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              JOIN NOW
            </a>

            {/* Contract Address */}
            <div className="bg-orange-900/60 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30 flex items-center gap-3">
              <span className="text-white text-sm font-medium">Contract:</span>
              <code className="text-white text-sm font-mono flex-1 max-w-xs truncate">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="text-white hover:text-yellow-200 transition-colors p-1"
                title="Copy Contract Address"
              >
                {copied ? (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://dexscreener.com/solana/4mu1ig6ML6ZQm5sVkWHVjuCttYADn9wguMsyvXsCbonk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-3xl text-center border-2 border-orange-400/30"
            >
              📈 VIEW CHART
            </a>
            <a
              href="https://raydium.io/swap"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-700 to-orange-900 hover:from-orange-800 hover:to-orange-950 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-3xl text-center border-2 border-orange-400/30"
            >
              🚀 BUY $FONK
            </a>
          </div>
        </div>
      </main>

      {/* Meme Gallery Section */}
      <section id="memes" className="relative z-10 py-20 px-4 bg-orange-900/40">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
             FONK MEMES 
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg">
            The funniest memes in the crypto space! 😂
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memeImages.map((meme, index) => (
              <div 
                key={index} 
                className="bg-orange-800/30 backdrop-blur-lg rounded-3xl p-6 border-2 border-orange-400/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <Image
                  src={meme.src}
                  alt={meme.alt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-2xl mb-4 hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white text-sm font-medium">{meme.alt}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <p className="text-2xl text-white font-bold mb-4">
              🔥 Share the FONK! 🔥
            </p>
            <p className="text-lg text-white opacity-90">
              Right-click and save any meme to spread the FONK revolution across the internet!
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 bg-orange-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 drop-shadow-2xl">
            🎯 About FONK 🎯
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-orange-700/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-orange-400/30">
              <h3 className="text-3xl font-bold text-yellow-200 mb-6">💨 What is FONK?</h3>
              <p className="text-white text-lg leading-relaxed">
                FONK is the <span className="text-yellow-200 font-bold">most hilarious</span> and 
                <span className="text-orange-200 font-bold"> explosive</span> meme coin on Solana! 
                Combining the power of <span className="text-green-200 font-bold">farting</span> with 
                the energy of <span className="text-pink-200 font-bold">bonking</span>, FONK brings 
                chaos, laughter, and potential gains to the crypto world!
              </p>
            </div>
            <div className="bg-orange-700/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-orange-400/30">
              <h3 className="text-3xl font-bold text-yellow-200 mb-6">🚀 Join the Movement!</h3>
              <p className="text-white text-lg leading-relaxed">
                This isn't just another meme coin - it's a <span className="text-yellow-200 font-bold">revolution</span> of fun! 
                Join thousands of FONK holders who believe in the power of memes, 
                community, and making crypto <span className="text-orange-200 font-bold">FUN</span> again!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 bg-orange-900/60">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-white text-sm max-w-3xl mx-auto leading-relaxed">
            ⚠️ $FONK is a meme coin created for entertainment purposes only. It has no intrinsic value or expectation of financial return. 
            Cryptocurrency investments are highly volatile and risky. Always do your own research (DYOR) and never invest more than you can afford to lose.
          </p>
        </div>
      </footer>
    </div>
  );
}
