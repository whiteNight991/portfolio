import '../index.css';
import '../App.css';
import React, { useEffect, useState, useRef } from 'react';

function AboutMe() {
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

  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    color: `rgba(200, 180, 150, 0.6)`
  }));

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center h-screen relative overflow-hidden"
      style={{background: 'linear-gradient(to bottom, rgb(250 245 235), rgb(215 200 180))'}}
    >
      {/* 배경 입자 */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* 콘텐츠 래퍼 */}
      <div className="w-full max-w-6xl z-10">
        {/* 로딩 스켈레톤 */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-64 bg-amber-200 rounded-xl animate-pulse" />
            <div className="space-y-4">
              <div className="w-3/4 h-6 bg-amber-200 rounded animate-pulse" />
              <div className="w-2/3 h-6 bg-amber-100 rounded animate-pulse" />
              <div className="w-1/2 h-6 bg-amber-100 rounded animate-pulse" />
            </div>
          </div>
        )}

        {/* 실제 콘텐츠 */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeIn">
            {/* 이미지 */}
            <img src="/img/profile.png" alt="profile" className="w-full h-full object-cover"/>

            {/* 텍스트 */}
            <div className="text-amber-800 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-base md:text-lg leading-relaxed">
                안녕하세요, 저는 웹 개발지망하는 고영상입니다. 다양한 프로젝트와 창작 활동을 통해 경험을 쌓아왔습니다.
                현재는 웹 개발자로서의 취업 준비를 하고 있습니다. 
                앞으로도 열심히 성장하고, 다양한 프로젝트에 참여해 나가겠습니다.
                감사합니다.


              </p>
            </div>
          </div>
        )}
      </div>

      {/* 내부 애니메이션 CSS */}
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

export default AboutMe;
