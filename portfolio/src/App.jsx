import React, { useEffect, useRef } from "react";
import AboutMe from "./component/aboutMe.jsx";
import Contact from "./component/Contact.jsx";
import Design from "./component/Design.jsx";
import Front from "./component/front.jsx";
import Nav from "./component/nav.jsx";
import Hero from "./component/HeroSection.jsx";
import Timeline from "./component/timeline.jsx";

function App() {
  const fullpageRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.$ && window.$.fn.fullpage) {
      const headerEl = document.querySelector('.main_Nav');
      const headerH = headerEl ? headerEl.offsetHeight : 80;

      window.$(fullpageRef.current).fullpage({
        navigation: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        bigSectionsDestination: 'top',
        anchors: ['hero', 'about', 'design', 'front', 'timeline', 'contact'],
        menu: '#main-menu',
        paddingTop: headerH,
        scrollOverflow: false,
        normalScrollElements: '#timeline-horizontal',
      });
    }

    return () => {
      if (window.$ && window.$.fn.fullpage) {
        window.$.fn.fullpage.destroy("all");
      }
    };
  }, []);

  useEffect(() => {
    const move = (e) => {
      const c = cursorRef.current;
      if (c) {
        c.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <Nav />
      <div ref={fullpageRef} id="fullpage">
        <div className="section"><Hero /></div>
        <div className="section"><AboutMe /></div>
        <div className="section"><Design /></div>
        <div className="section"><Front /></div>

        {/* Timeline 섹션 */}
        <div className="section">
          <div className="h-screen">
            <Timeline />
          </div>
        </div>

        <div className="section"><Contact /></div>
      </div>
      <div ref={cursorRef} className="cursor-dot" />
    </>
  );
}

export default App;
