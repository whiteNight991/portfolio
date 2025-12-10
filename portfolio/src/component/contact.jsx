import '../index.css';
import '../App.css';
import React, { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.$?.fn?.fullpage?.reBuild) {
      window.$.fn.fullpage.reBuild();
    }
  }, [loading]);

  return (
    <section
      className="min-h-screen px-8 md:px-32 py-20 text-amber-900 relative"
      style={{
        background: 'linear-gradient(to bottom, rgb(248 242 232), rgb(225 210 190))'
      }}
    >

      {/* 콘텐츠 영역 */}
      <div className="w-full max-w-6xl z-10">

        {/* 로딩 스켈레톤 */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="h-64 bg-gray-300 rounded-xl animate-pulse" />
            <div className="space-y-4">
              <div className="w-3/4 h-6 bg-gray-300 rounded animate-pulse" />
              <div className="w-2/3 h-6 bg-gray-200 rounded animate-pulse" />
              <div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse" />
              <div className="w-32 h-12 bg-gray-300 rounded mt-6" />
            </div>
          </div>
        )}

        {/* 실제 콘텐츠 */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeIn">

            {/* 텍스트 영역 */}
            <div className="text-amber-900 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>

              <p className="text-base md:text-lg leading-relaxed">
                아래 정보로 언제든 연락하실 수 있습니다.  
                웹 개발자로 성장하기 위해 지속적으로 학습하고 있으며  
                새로운 프로젝트와 협업을 언제나 환영합니다.
              </p>

              <div className="space-y-3 text-base md:text-lg">
                <p><strong>Email:</strong> jinx78309@gmail.com</p>
                <p><strong>Phone:</strong> 010-3906-1489</p>
                <p><strong>Address:</strong> 제주특별자치도 제주시 우평로 318</p>
                <p className="flex items-center gap-3">
                  <strong>GitHub</strong>
                  <a
                    href="https://github.com/whiteNight991/portfolio.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-900 hover:text-amber-700 transition"
                  >
                    <FaGithub size={28} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact 스타일용 애니메이션 */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Contact;
