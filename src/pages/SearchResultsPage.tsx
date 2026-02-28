import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';

const SearchResultsPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#f0427c]/10">
        <div className="flex items-center p-4 justify-between gap-4">
          <Link to="/" className="text-[#f0427c] flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex-1">
            <label className="flex flex-col min-w-40 h-11 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-[#f0427c]/5 dark:bg-[#f0427c]/10 border border-[#f0427c]/10">
                <div className="text-[#f0427c] flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#f0427c]/50 px-3 text-sm font-medium" defaultValue="Lipstick" />
                <div className="flex items-center justify-center pr-2">
                  <button className="flex items-center justify-center p-1 text-[#f0427c]/60 hover:text-[#f0427c]">
                    <span className="material-symbols-outlined text-[20px]">cancel</span>
                  </button>
                </div>
              </div>
            </label>
          </div>
          <div className="flex size-10 shrink-0 items-center justify-center cursor-pointer text-[#f0427c]">
            <span className="material-symbols-outlined">tune</span>
          </div>
        </div>
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          {['All Brands', 'Price', 'Finish', 'Matte', 'Vegan'].map((filter, idx) => (
            <button key={idx} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium ${idx === 0 ? 'bg-[#f0427c] text-white' : 'bg-[#f0427c]/10 dark:bg-[#f0427c]/20 text-[#f0427c] border border-[#f0427c]/10'}`}>
              {filter}
              {idx < 3 && <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 p-4 pb-24">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Showing {PRODUCTS.length} results</p>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#f0427c] cursor-pointer">
            <span>Relevance</span>
            <span className="material-symbols-outlined text-sm">swap_vert</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SearchResultsPage;
