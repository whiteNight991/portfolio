import '../index.css';
import '../App.css';
import React, { useEffect, useState, useRef } from 'react';

function Hero() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.$ && window.$.fn.fullpage && typeof window.$.fn.fullpage.reBuild === 'function') {
      window.$.fn.fullpage.reBuild();
    }
  }, [loading]);

  // 입자 생성 (크기 확대: 4px ~ 10px)
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,          // 4px ~ 10px
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    color: `rgba(200, 180, 150, 0.6)`     // 배경보다 어두운 크림톤
  }));

  return (
    <section
    ref={containerRef}
    className="w-full flex flex-col items-center justify-center h-screen relative overflow-hidden"
    style={{
      background: 'linear-gradient(to bottom, rgb(250 245 235), rgb(215 200 180))'
    }}
    >
      {/* 입자 배경 */}
      <div className="absolute inset-0">
        {particles.map(p => (
          <span
            key={p.id}
            className="absolute rounded-full animate-particle-custom"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      {/* 로딩 화면 */}
      <div className={loading ? 'flex flex-col items-center justify-center z-10' : 'hidden'}>
        <div className="w-64 h-16 bg-amber-200 rounded mb-8 animate-pulse" />
        <div className="w-1/2 h-6 bg-amber-100 rounded mb-4 animate-pulse" />
        <div className="w-1/3 h-6 bg-amber-100 rounded mb-4 animate-pulse" />
        <div className="w-6 h-6 bg-amber-300 rounded-full animate-bounce mt-10" />
      </div>

      {/* Hero 콘텐츠 */}
      <div className={loading ? 'hidden' : 'flex flex-col items-center text-center z-10 animate-fadeIn'}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-amber-900">GO!portfolio</h1>
        <p className="text-xl md:text-2xl mb-8 text-amber-800">
          웹 개발자 고영상의 포트폴리오 사이트
        </p>
        <button
          className="px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition duration-300 shadow-lg"
          onClick={() => window.$.fn.fullpage.moveSectionDown()}
        >
          포트폴리오 보기
        </button>
      </div>

      {/* CSS 애니메이션 */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-particle-custom {
          animation-name: floatCustom;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes floatCustom {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-40px) translateX(15px); opacity: 0.8; }
          100% { transform: translateY(0) translateX(0); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
