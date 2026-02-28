import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const categories = [
    { name: 'Skin Care', path: '/category/skincare' },
    { name: 'Make Up', path: '/category/makeup' },
    { name: 'Fragrance', path: '/category/fragrance' },
    { name: 'Hair Care', path: '/category/haircare' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <button onClick={handleLogout} className="text-slate-600 dark:text-slate-300 flex items-center gap-1 hover:text-[#f0427c] transition-colors">
          <span className="material-symbols-outlined text-2xl">logout</span>
          <span className="text-[10px] font-bold uppercase">Logout</span>
        </button>
        <h1 className="text-xl font-black text-[#f0427c] tracking-tight">Glovi</h1>
        <button className="text-slate-600 dark:text-slate-300 relative">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#f0427c] rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
      </header>

      <main className="px-4 py-2">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">search</span>
            <input 
              type="text" 
              placeholder="Search for lipstick, foundation, skincare..."
              className="w-full bg-[#f0427c]/5 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#f0427c]/20 placeholder:text-slate-400 text-black dark:text-white"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6 pb-2">
          <Link to="/home" className="bg-[#f0427c] text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg shadow-[#f0427c]/20">All</Link>
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path}
              className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap border border-slate-100 dark:border-slate-700 hover:border-[#f0427c]/30 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-8 aspect-[16/9] shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000" 
            alt="Beauty Products" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 pb-8">
            <h2 className="text-3xl font-black text-white mb-2 leading-tight text-center">
              Find the Best <span className="text-[#f0427c]">Beauty</span> Prices
            </h2>
            <p className="text-white/90 text-[10px] md:text-xs text-center max-w-xs mx-auto leading-relaxed">
              Compare prices across Sephora, Ulta, and 50+ retailers for your favorite skincare and makeup products.
            </p>
          </div>
        </div>

        {/* Trending Now */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-black">Trending Now</h3>
            <Link to="/search" className="text-[#f0427c] text-sm font-bold">See More</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              PRODUCTS.find(p => p.id === '7'),
              PRODUCTS.find(p => p.id === '9'),
              PRODUCTS.find(p => p.id === '5'),
              PRODUCTS.find(p => p.id === '3'),
            ].map((product) => (
              product && <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default HomePage;
