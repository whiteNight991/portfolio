import '../index.css';
import '../App.css';
import React, { useEffect, useState } from 'react';
import projectData from '../data/project.json';

function Front() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (window.$?.fn?.fullpage?.reBuild) window.$.fn.fullpage.reBuild();
  }, [loading, selected]);

  return (
    <section
      className="min-h-screen px-16 md:px-32 py-32 text-amber-900 relative"
      style={{
        background: 'linear-gradient(to bottom, rgb(248 242 232), rgb(225 210 190))'
      }}
    >

      <div className="CategoryName mb-16">
        <span className="text-4xl font-bold">FrontEnd</span>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="h-72 bg-gray-200/70 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {(projectData.FrontData || []).map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="
                text-left project-card soft-transition rounded-3xl p-6 
                bg-white/60 backdrop-blur-md border border-white/40 shadow-sm
                hover:shadow-xl hover:bg-white hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              <img
                src={item.image}
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
            className="relative max-w-4xl w-full p-10 rounded-3xl bg-white border border-white/40 shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selected.title}</h2>
              <button
                onClick={() => setSelected(null)}
                className="px-3 py-1 rounded hover:bg-black/5"
              >
                닫기
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={selected.image}
                className="w-full h-80 object-cover rounded-2xl shadow"
              />

              <div>
                <p className="leading-6 opacity-80">{selected.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(selected.stack || []).map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-black/5 text-xs">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-amber-900 text-white soft-transition hover:opacity-90"
                      rel="noreferrer"
                    >
                      사이트 바로가기
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-amber-900 text-white soft-transition hover:opacity-90"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Front;
