import React from "react";

const designTimeline = [
  { year: "2025.05", title: "Weather-app", desc: "React 기반 날씨 앱 제작" },
  { year: "2025.06", title: "옥외광고 대상전", desc: "알작지왓 옥외광고 디자인 제작" },
  { year: "2025.10", title: "폴리텍 손글씨 공모전", desc: "손글씨 공모전 참가" },
];

const frontTimeline = [
  { year: "2025.07", title: "Frontend Study", desc: "React, JavaScript, UI/UX 공부" },
  { year: "2025.08", title: "Steam Data Analysis", desc: "통계 분석 및 시각화 프로그램" },
  { year: "2025.11", title: "ai_speak", desc: "ai_speak 프로그램 제작" },
  { year: "2025.12", title: "포트폴리오 사이트 제작 및 배포", desc: "React + Vite 기반 포트폴리오 제작" },
];

function Timeline() {
  const timelineItems = [...designTimeline, ...frontTimeline];

  return (
    <section
  className="min-h-screen px-16 md:px-32 py-32 text-amber-900 flex flex-col items-center justify-center"
  style={{
    background: 'linear-gradient(to bottom, rgb(248 242 232), rgb(225 210 190))'
  }}
>
  <h2 className="text-4xl font-bold mb-14 text-amber-900 tracking-tight">
    Timeline
  </h2>

  <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center">

    {/* 중앙 가로 라인 */}
    <div
      className="absolute top-1/2 h-[3px] bg-amber-700 -translate-y-1/2"
      style={{ width: "160%", left: "-30%" }}
    />

    {/* 카드들 - 좌우 간격 축소 */}
    <div className="flex gap-12 items-center justify-center">
  {timelineItems.map((item, idx) => {
    const isTop = idx % 2 === 0;

    // 🔥 세로 라인만 줄이고 싶으면 이것만 조절하면 됨
    const LINE_HEIGHT = 100;  // 원하는 길이로 조절 (카드 간격 고정됨)

    // 🔥 카드 간격 (절대 줄어들지 않도록 독립시킴)
    const CARD_OFFSET = 200; // 기존 간격 그대로 유지

    return (
      <div key={idx} className="relative flex flex-col items-center">

        {/* 세로 라인 — 이제 카드 간격과 완전히 독립됨 */}
        <div
          className="absolute w-[2px] bg-amber-700"
          style={{
            height: LINE_HEIGHT,
            top: isTop ? "auto" : "50%",
            bottom: isTop ? "50%" : "auto",
          }}
        />

        {/* 카드 — CARD_OFFSET 값만 영향을 받음 (세로 라인과 무관) */}
        <div
          className={`
            bg-[rgb(248,242,232)] rounded-xl p-4 w-48 shadow-xl z-30
            transition-all duration-300 hover:scale-110 hover:shadow-2xl
            ${isTop ? "mb-auto" : "mt-auto"}
          `}
          style={{
            marginBottom: isTop ? `${CARD_OFFSET}px` : "0",
            marginTop: isTop ? "0" : `${CARD_OFFSET}px`,
          }}
        >
          <p className="text-xs font-semibold opacity-80">{item.year}</p>
          <h3 className="text-base font-bold mt-1 leading-tight">{item.title}</h3>
          <p className="text-[13px] text-gray-700 mt-2 leading-snug">{item.desc}</p>
        </div>

        {/* 포인트 원 */}
        <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-amber-900 rounded-full border-4 border-white shadow z-20" />
      </div>
    );
  })}
</div>

  </div>
</section>


  );
}

export default Timeline;
