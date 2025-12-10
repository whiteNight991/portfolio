

export default function AboutMeSk() {
  return (
    <section className="about-skeleton min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-gray-50">
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <div className="headline-skeleton w-3/4 h-8 bg-gray-300 rounded"></div>
        <div className="subtext-skeleton w-2/3 h-6 bg-gray-200 rounded"></div>
        <div className="subtext-skeleton w-1/2 h-6 bg-gray-200 rounded"></div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <div className="image-placeholder w-64 h-64 bg-gray-300 rounded-lg"></div>
      </div>
    </section>
  );
}