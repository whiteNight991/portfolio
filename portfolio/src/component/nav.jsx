import '../index.css';
import '../App.css';
import React, { useEffect, useRef, useState } from 'react';

function Nav() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 180);
  };

  return (
    <nav className="main_Nav fixed top-0 left-0 w-full z-[1000] px-8 py-5 flex items-center justify-between 
                bg-amber-900 border-b border-black/20 soft-transition">

  {/* 로고 — 더 밝은 크림톤 */}
  <a
    href="#hero"
    data-menuanchor="hero"
    className="Logo text-amber-100 hover:text-white transition-colors"
  >
    GOH Portfolio
  </a>

  <ul id="main-menu" className="goTo flex gap-8 items-center text-amber-100">

    {/* 기본 메뉴 */}
    <li className="goTo_item">
      <a 
        href="#about"
        data-menuanchor="about"
        className="
          px-2 py-1 rounded-lg
          transition-all duration-300 ease-out
          hover:bg-amber-800/60 hover:scale-[1.04]
          hover:text-white hover:font-semibold
        "
      >
        About Me
      </a>
    </li>

    {/* 드롭다운 */}
    <li 
      ref={dropdownRef}
      className="relative goTo_item"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span 
        className="
          cursor-pointer px-2 py-1 rounded-lg
          transition-all duration-300 ease-out
          hover:bg-amber-800/60 hover:scale-[1.04]
          hover:text-white hover:font-semibold
        "
      >
        Project
      </span>

      <ul
        className={
          (open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none") +
          " absolute left-0 mt-3 bg-[rgba(255,248,235,0.9)] backdrop-blur-sm rounded-xl shadow-lg min-w-[160px] p-3 z-[1001] transition-all duration-300 ease-out border border-amber-900/10"
        }
      >
        <li className="py-2 px-3">
          <a 
            href="#design"
            className="
              block px-2 py-1 rounded-lg text-amber-900
              transition-all duration-300 ease-out
              hover:bg-amber-200/70 hover:scale-[1.04]
              hover:text-amber-900 hover:font-semibold
            "
          >
            Design
          </a>
        </li>

        <li className="py-2 px-3">
          <a 
            href="#front"
            className="
              block px-2 py-1 rounded-lg text-amber-900
              transition-all duration-300 ease-out
              hover:bg-amber-200/70 hover:scale-[1.04]
              hover:text-amber-900 hover:font-semibold
            "
          >
            Front
          </a>
        </li>
      </ul>
    </li>

    <li className="goTo_item">
      <a 
        href="#timeline"
        data-menuanchor="timeline"
        className="
          px-2 py-1 rounded-lg
          transition-all duration-300 ease-out
          hover:bg-amber-800/60 hover:scale-[1.04]
          hover:text-white hover:font-semibold
        "
      >
        Timeline
      </a>
    </li>

    <li className="goTo_item">
      <a 
        href="#contact"
        data-menuanchor="contact"
        className="
          px-2 py-1 rounded-lg
          transition-all duration-300 ease-out
          hover:bg-amber-800/60 hover:scale-[1.04]
          hover:text-white hover:font-semibold
        "
      >
        Contact
      </a>
    </li>
  </ul>
</nav>

  );
}

export default Nav;
