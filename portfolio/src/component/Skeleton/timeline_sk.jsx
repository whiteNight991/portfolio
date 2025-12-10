

export default function TimelineSk() {
  return (
    <section className="timeline-skeleton min-h-screen px-8 py-16 bg-gray-50 flex flex-col items-center">
      
      {/* 섹션 제목 */}
      <div className="headline-skeleton w-1/3 h-8 bg-gray-300 rounded mb-12"></div>
      
      {/* 타임라인 항목 자리 */}
      <div className="timeline-items flex flex-col gap-8 w-full max-w-3xl">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="timeline-item flex items-center gap-6">
            
            {/* 좌측 원 */}
            <div className="circle-skeleton w-6 h-6 bg-gray-300 rounded-full"></div>
            
            {/* 우측 텍스트 뼈대 */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="title-skeleton w-1/2 h-4 bg-gray-300 rounded"></div>
              <div className="desc-skeleton w-full h-3 bg-gray-200 rounded"></div>
              <div className="desc-skeleton w-5/6 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
