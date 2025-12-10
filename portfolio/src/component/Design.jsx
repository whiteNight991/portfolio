/* --- 변경된 UI: Glassmorphism + 더 깔끔한 카드 구성 --- */

import React, { useState, useEffect } from "react";
import designData from "../data/project.json";

export default function Design() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && window.$?.fn?.fullpage?.reBuild) {
      window.$.fn.fullpage.reBuild();
    }
  }, [loading]);

  return (
    <section
      className="min-h-screen px-16 md:px-32 py-32 text-amber-900 relative"
      style={{
        background: 'linear-gradient(to bottom, rgb(248 242 232), rgb(225 210 190))'
      }}
    >

      <div className="CategoryName relative mb-16">
        <span className="text-4xl font-bold text-amber-900">Design</span>
      </div>

      {/* Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="h-72 bg-gray-200/70 rounded-3xl animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {(designData.DesignData || []).map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                text-left project-card soft-transition rounded-3xl p-6 
                bg-white/60 backdrop-blur-md shadow-sm border border-white/30
                hover:shadow-xl hover:bg-white hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover mb-6 rounded-2xl shadow-sm"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-80">{item.description}</p>
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="absolute inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6">
          <div
            onClick={() => setSelected(null)}
            className="absolute inset-0"
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full p-10 rounded-3xl bg-white shadow-2xl border border-white/40"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selected.title}</h2>
              <button
                onClick={() => setSelected(null)}
                className="px-3 py-1 rounded hover:bg-black/5"
              >
                닫기
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={selected.image}
                className="w-full h-80 object-cover rounded-2xl shadow"
              />
              <div>
                <p className="leading-6 opacity-80">{selected.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(selected.skill || []).map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-black/5 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
