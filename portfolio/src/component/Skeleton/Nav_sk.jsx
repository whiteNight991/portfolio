

export default function NavBarSk() {
  return (
    <nav className="main_NavSkeleton flex justify-between items-center px-8 py-5 fixed top-0 left-0 w-full z-50">
      {/* 로고 자리 */}
      <div className="logo-skeleton w-32 h-8 bg-gray-300 rounded"></div>

      {/* 메뉴 자리 */}
      <ul className="menu-skeleton flex gap-8">
        <li className="menu-item-skeleton w-16 h-4 bg-gray-200 rounded"></li>
        <li className="menu-item-skeleton w-16 h-4 bg-gray-200 rounded"></li>
        <li className="menu-item-skeleton w-20 h-4 bg-gray-200 rounded"></li>
        <li className="menu-item-skeleton w-16 h-4 bg-gray-200 rounded"></li>
      </ul>
    </nav>
  );
}

