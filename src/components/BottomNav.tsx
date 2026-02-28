import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const BottomNav = () => {
  const navItems = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'search', label: 'Search', path: '/search' },
    { icon: 'qr_code_scanner', label: 'Scan', path: '/scan', isCenter: true },
    { icon: 'sell', label: 'Deals', path: '/deals' },
    { icon: 'person', label: 'Account', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 pb-6 pt-2 z-50">
      <div className="flex items-center justify-between max-w-md mx-auto relative">
        {navItems.map((item) => (
          item.isCenter ? (
            <div key={item.path} className="flex-1 flex justify-center -mt-8">
              <NavLink
                to={item.path}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f0427c] text-white shadow-lg shadow-[#f0427c]/40 ring-4 ring-white dark:ring-slate-900 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </NavLink>
            </div>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex flex-1 flex-col items-center gap-1 transition-colors",
                isActive ? "text-[#f0427c]" : "text-slate-500 dark:text-slate-400"
              )}
            >
              {({ isActive }) => (
                <>
                  <span className={cn("material-symbols-outlined", isActive && "fill-1")}>{item.icon}</span>
                  <p className="text-[10px] font-medium uppercase tracking-wider">{item.label}</p>
                </>
              )}
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
