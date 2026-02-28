import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const filteredProducts = PRODUCTS.filter(p => p.category === categoryId);

  const categoryTitles: Record<string, string> = {
    makeup: 'Make Up',
    skincare: 'Skin Care',
    haircare: 'Hair Care',
    fragrance: 'Fragrance'
  };

  const bannerImages: Record<string, string> = {
    makeup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHzGyQnZrUGOcnNCEyUVBm6i0DQOYv8W-37a2iEwtfDFzRY-sNfiDW0Ajg12EWk0eyY0U5nPfIJPaQ3lWdBGzOjiowUF8SiP_LrrrzhEVfUYbb7PEBrLLmC_1jxNZSXkpeQzydYfySopHY169f8Yz-Wy2bHw_b6DwyDJIdO68u3wARXfq0sJQyrYLmmXyG_qQur1xrJR1UdxbgNRApQw5pttausaayxjVpOHoVxUA2hWaNOc_rmE90ydkSNsGUYvElI2OqTSsioY4',
    haircare: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhABoU8eZuIYR2m4PepG8vNo6lCwAwaDzd3LvJc_1QZaEDc0g4vwJL0riFRojM534rfpwrX42bIWJgiOfhmKO6acxRkNbS7Ho35Mv5za9m_9nGZQrvZGpsqmbujaFsb2UFeZarSgE49kEeY1HTe4rbLg9FWvUxxDJKo0CB_a1ffAb90oAp9B44qiRpPyIotusBs2sXwEMccWnx_jMIcRV1ql1iTHW-XMEpilw4uyvV06T9_C3sAjRUYnbT7Dr9U1JNMlPxyDWCyJA',
    skincare: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUwyxmeYNxW66q96dKhPbe5Gm4Eh37Xhu910jahI0oUQi7gdtLc64fGpKdDv9URvnIxVY40I2mPhba_wgOa5onUmuhOmBZBtsABkd21X1IEJsLnyH-8U9YPllheVQ_WxQ1C-Wy8IMQSDSejFR-6PF1CGDQLPQ-m8RJhWsJQtRBGOeU_pfm4fsgfEAyTFzaV1HOL3b1cskSeK77jVnFHIJQTYfRJYSmeDIgSBmjIkzQWmbt_LFCrIQxCywKV0eGrri4eOmUJUYWHaw',
    fragrance: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeLHUv5RHA1gHdCOf7YxmXMc11fUrddGsg93c89Y0duf0q2nQOOT1hkilVyMrsXYXXHEeCZwtPa9LSKYOnRRjH2XUNozFhE0xG9UpW5FaMYUCxzhJwaav3D6GELrgdz1x9esFLx0yD6YD-8DpHfBq3LAIjf_Z_yUSbNxM3xC_6a3LecfZW9Rz974pen5qEP__EoIFKARZRjMONpJbCEybhbm4sMvZQTKez877_RFbQ_H1kAHGfnjQAw8OofzWpsynYZ5CJdbLVxf0'
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-[#f0427c]/10">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-[#f0427c] text-2xl font-bold leading-tight tracking-tight">Glovi</Link>
        </div>
        <div className="flex items-center justify-end">
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f0427c]/10 text-[#f0427c]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main className="flex-1 pb-24">
        <div className="px-4 py-4">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-12 bg-slate-200/50 dark:bg-slate-800/50 border border-transparent focus-within:border-[#f0427c]/30 transition-all">
              <div className="text-slate-500 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="form-input flex w-full border-none bg-transparent focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 pl-2 text-base font-normal text-black dark:text-white" placeholder="Search for lipstick, foundation, skincare..." />
            </div>
          </label>
        </div>

        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          {[
            { name: 'All', path: '/home' },
            { name: 'Skin Care', path: '/category/skincare' },
            { name: 'Make Up', path: '/category/makeup' },
            { name: 'Fragrance', path: '/category/fragrance' },
            { name: 'Hair Care', path: '/category/haircare' }
          ].map((cat) => (
            <Link 
              key={cat.name}
              to={cat.path}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 transition-colors cursor-pointer ${
                categoryTitles[categoryId || ''] === cat.name || (cat.name === 'All' && !categoryId)
                ? 'bg-[#f0427c] text-white shadow-lg shadow-[#f0427c]/20' 
                : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300'
              }`}
            >
              <p className="text-sm font-medium">{cat.name}</p>
            </Link>
          ))}
        </div>

        <div className="px-4 py-2">
          <div 
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-[#f0427c] min-h-[180px] flex flex-col justify-end p-6 shadow-xl"
            style={{ 
              backgroundImage: `linear-gradient(to bottom right, rgba(240, 66, 124, 0.8), rgba(219, 39, 119, 0.8)), url('${bannerImages[categoryId || 'makeup']}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="material-symbols-outlined text-white text-8xl">auto_awesome</span>
            </div>
            <h1 className="text-white text-2xl font-bold leading-tight drop-shadow-md">
              Beat Face, Best Price - Top {categoryTitles[categoryId || ''] || categoryId} deals across all stores
            </h1>
          </div>
        </div>

        <div className="px-4 pt-8 pb-4 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Trending Now</h3>
          <a className="text-[#f0427c] text-sm font-semibold flex items-center gap-1" href="#">View All <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoryPage;
