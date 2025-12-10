import React from "react";

export default function DesignSectionSk() {

  return (
    <section className="design-skeleton min-h-screen px-8 py-16 bg-gray-100">
      <div className="headline-skeleton w-1/3 h-8 bg-gray-300 rounded mb-12"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="project-card-skeleton w-full h-64 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </section>
  );
}
