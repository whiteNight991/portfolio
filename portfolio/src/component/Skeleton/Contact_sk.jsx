

  export default function ContactSk() {
    return (
      <section className="contact-skeleton min-h-screen px-8 py-16 bg-gray-50 flex flex-col items-center justify-center">
        
        {/* 섹션 제목 */}
        <div className="headline-skeleton w-1/3 h-8 bg-gray-300 rounded mb-12"></div>
        
        {/* 연락처 폼 자리 */}
        <div className="form-skeleton w-full max-w-lg flex flex-col gap-6">
          <div className="input-skeleton w-full h-12 bg-gray-200 rounded"></div>
          <div className="input-skeleton w-full h-12 bg-gray-200 rounded"></div>
          <div className="textarea-skeleton w-full h-32 bg-gray-200 rounded"></div>
          <div className="button-skeleton w-32 h-12 bg-gray-300 rounded self-end"></div>
        </div>

        {/* 기타 연락처 */}
        <div className="social-skeleton flex gap-4 mt-12">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="w-12 h-12 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </section>
    );
  }