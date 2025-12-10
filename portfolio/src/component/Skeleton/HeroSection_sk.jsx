

export default function HeroSectionSk() {
  return (
    <section className="hero-section-skeleton h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* 로고 자리 */}
      <div className="logo-skeleton w-64 h-16 bg-gray-300 rounded mb-8"></div>

      {/* 소개 텍스트 자리 */}
      <div className="text-skeleton w-1/2 h-6 bg-gray-200 rounded mb-4"></div>
      <div className="text-skeleton w-1/3 h-6 bg-gray-200 rounded mb-4"></div>

      {/* Scroll 안내 자리 */}
      <div className="scroll-indicator-skeleton w-6 h-6 bg-gray-300 rounded-full animate-bounce mt-10"></div>
    </section>
  );
}   