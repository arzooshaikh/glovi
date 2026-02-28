import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import BottomNav from '../components/BottomNav';
import { cn } from '../lib/utils';
import { useWishlist } from '../context/WishlistContext';

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  const storePrices = [
    { storeName: 'Amazon', price: product.price + 51, deliveryInfo: 'Free Delivery: Tomorrow' },
    { storeName: 'Nykaa', price: product.price, deliveryInfo: 'Delivery: 3 Days', isCheapest: true },
    { storeName: 'Myntra', price: product.price + 101, deliveryInfo: 'Delivery: 2 Days' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0427c]/10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link to={-1 as any} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f0427c]/10 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold">Product Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleWishlist(product)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                isFavorite ? "bg-[#f0427c] text-white shadow-lg shadow-[#f0427c]/20" : "hover:bg-[#f0427c]/10 text-slate-600 dark:text-slate-300"
              )}
            >
              <span className={cn("material-symbols-outlined", isFavorite && "fill-1")}>favorite</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f0427c]/10 transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-xl mx-auto pb-24">
        <div className="relative overflow-x-auto snap-x snap-mandatory flex gap-4 p-4 no-scrollbar">
          <div className="flex-none w-full md:w-1/2 aspect-square snap-center rounded-xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
            <img className="w-full h-full object-cover" src={product.image} alt={product.name} referrerPolicy="no-referrer" />
          </div>
          <div className="flex-none w-full md:w-1/2 aspect-square snap-center rounded-xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
            <img className="w-full h-full object-cover" src={product.image} alt={product.name} referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[#f0427c] font-semibold text-sm uppercase tracking-wider">{product.brand}</p>
              <h2 className="text-2xl font-black mt-1">{product.name}</h2>
              <button 
                onClick={() => toggleWishlist(product)}
                className={cn(
                  "mt-2 flex items-center gap-1 transition-colors",
                  isFavorite ? "text-[#f0427c]" : "text-slate-400 hover:text-[#f0427c]"
                )}
              >
                <span className={cn("material-symbols-outlined text-lg", isFavorite && "fill-1")}>favorite</span>
                <span className="text-xs font-bold uppercase">{isFavorite ? 'Saved to Wishlist' : 'Save to Wishlist'}</span>
              </button>
            </div>
            <div className="bg-[#f0427c] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg shadow-[#f0427c]/20">
              <span className="material-symbols-outlined text-sm">trending_down</span>
              BEST PRICE
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center bg-[#f0427c]/10 px-2 py-1 rounded text-[#f0427c] font-bold">
              <span className="text-sm mr-1">{product.rating}</span>
              <span className="material-symbols-outlined text-sm fill-1">star</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{product.reviewsCount.toLocaleString()} Reviews • 500+ Bought this month</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-[#f0427c]/20 flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#f0427c]/10 flex items-center justify-center text-[#f0427c]">
                <span className="material-symbols-outlined">notifications_active</span>
              </div>
              <div>
                <p className="font-bold text-sm">Price Drop Alert</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Get notified when price hits ₹{(product.price * 0.8).toLocaleString()}</p>
              </div>
            </div>
            <button className="bg-[#f0427c] text-white px-4 py-2 rounded-lg text-sm font-bold">Notify Me</button>
          </div>

          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Compare Prices</h3>
              <span className="text-xs text-slate-400">Updated 5m ago</span>
            </div>
            <div className="space-y-3">
              {storePrices.map((store, idx) => (
                <div key={idx} className={cn(
                  "bg-white dark:bg-slate-800 p-4 rounded-xl border flex items-center justify-between shadow-sm",
                  store.isCheapest ? "border-[#f0427c]/40 shadow-md relative overflow-hidden" : "border-slate-100 dark:border-slate-700"
                )}>
                  {store.isCheapest && (
                    <div className="absolute top-0 right-0 bg-[#f0427c]/10 px-3 py-1 rounded-bl-lg">
                      <span className="text-[10px] font-bold text-[#f0427c] tracking-tighter uppercase">Cheapest</span>
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                      <span className="font-bold text-xs">{store.storeName}</span>
                    </div>
                    <div>
                      <p className={cn("text-2xl font-black", store.isCheapest ? "text-[#f0427c]" : "text-slate-900 dark:text-slate-100")}>₹{store.price.toLocaleString()}</p>
                      <p className={cn("text-xs font-medium", store.storeName === 'Amazon' ? "text-green-600" : "text-slate-500")}>{store.deliveryInfo}</p>
                    </div>
                  </div>
                  <button className={cn(
                    "px-6 py-2 rounded-lg font-bold text-sm",
                    store.isCheapest ? "bg-[#f0427c] text-white" : "bg-[#f0427c]/10 text-[#f0427c]"
                  )}>
                    <span className="flex items-center gap-1">Buy on {store.storeName} <span className="material-symbols-outlined text-sm">open_in_new</span></span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="flex gap-6 border-b border-slate-200 dark:border-slate-700 mb-4 overflow-x-auto no-scrollbar">
              <button className="pb-3 border-b-2 border-[#f0427c] text-[#f0427c] font-bold text-sm whitespace-nowrap">Description</button>
              <button className="pb-3 text-slate-500 dark:text-slate-400 font-medium text-sm whitespace-nowrap">How to Use</button>
              <button className="pb-3 text-slate-500 dark:text-slate-400 font-medium text-sm whitespace-nowrap">Ingredients</button>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                The iconic lipstick that made M·A·C famous. This long-wearing formula features an intense color payoff and a completely matte finish. Ruby Woo is a very bright, cool-toned red with a matte finish that lasts for up to 12 hours.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f0427c] text-lg">check_circle</span>
                  Long-wearing, 12 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f0427c] text-lg">check_circle</span>
                  Non-feathering & Fade-proof
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 md:hidden z-50">
        <div className="max-w-screen-xl mx-auto flex gap-4">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Best Price</span>
            <span className="text-xl font-black text-[#f0427c]">₹{product.price.toLocaleString()}</span>
          </div>
          <button className="flex-1 bg-[#f0427c] text-white font-bold rounded-xl py-3 shadow-lg shadow-[#f0427c]/30 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">shopping_bag</span>
            Shop Best Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
