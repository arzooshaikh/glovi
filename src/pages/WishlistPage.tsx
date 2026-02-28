import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState<'all' | 'price-drop' | 'back-in-stock'>('all');

  const filteredWishlist = wishlist.filter(item => {
    if (activeTab === 'price-drop') return item.isPriceDrop;
    if (activeTab === 'back-in-stock') return item.isBackInStock;
    return true;
  });

  const tabs = [
    { id: 'all', label: 'All Products' },
    { id: 'price-drop', label: 'Price Drops' },
    { id: 'back-in-stock', label: 'Back in Stock' }
  ] as const;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen flex flex-col shadow-xl">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0427c]/10">
          <div className="flex items-center p-4 justify-between">
            <div className="flex items-center gap-3">
              <Link to="/home" className="p-2 hover:bg-[#f0427c]/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
              </Link>
              <h1 className="text-xl font-bold tracking-tight">My Wishlist</h1>
            </div>
            <button className="p-2 hover:bg-[#f0427c]/10 rounded-full transition-colors">
              <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">search</span>
            </button>
          </div>
          <div className="flex px-4 gap-6 border-b border-[#f0427c]/10">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center border-b-2 pb-3 pt-2 transition-all relative",
                  activeTab === tab.id ? "border-[#f0427c]" : "border-transparent hover:border-[#f0427c]/30"
                )}
              >
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  activeTab === tab.id ? "text-[#f0427c] font-bold" : "text-slate-500 dark:text-slate-400"
                )}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f0427c]"
                  />
                )}
              </button>
            ))}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 pb-24 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {filteredWishlist.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <div className="size-20 bg-[#f0427c]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#f0427c] text-4xl">
                      {activeTab === 'all' ? 'favorite' : activeTab === 'price-drop' ? 'trending_down' : 'inventory_2'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {activeTab === 'all' ? 'Your wishlist is empty' : activeTab === 'price-drop' ? 'No price drops yet' : 'No back in stock items'}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-[200px]">
                    {activeTab === 'all' 
                      ? 'Save your favorite beauty products to track prices and deals.' 
                      : activeTab === 'price-drop' 
                        ? 'We will notify you when your saved items go on sale.' 
                        : 'Items from your wishlist that were out of stock will appear here when they return.'}
                  </p>
                  <Link to="/home" className="mt-6 bg-[#f0427c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#f0427c]/90 transition-all">
                    Start Shopping
                  </Link>
                </div>
              ) : (
                filteredWishlist.map((item) => (
                  <div key={item.id} className="bg-white dark:bg-slate-800/50 rounded-xl p-4 shadow-sm border border-[#f0427c]/5 group">
                    <div className="flex gap-4">
                      <div 
                        className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0 border border-[#f0427c]/10 relative" 
                        style={{ backgroundImage: `url('${item.image}')` }}
                      >
                        {item.isBackInStock && activeTab === 'back-in-stock' && (
                          <div className="absolute top-0 left-0 bg-green-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-br-lg uppercase tracking-tighter">
                            Back
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <span className="text-xs font-semibold text-[#f0427c] uppercase tracking-wider">{item.brand}</span>
                            <button 
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-slate-400 hover:text-red-500 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                          <h3 className="font-bold text-slate-900 dark:text-slate-100">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Lowest price: <span className="text-[#f0427c] font-bold">₹{item.price.toLocaleString()}</span></p>
                            {item.isPriceDrop && (
                              <span className="text-[10px] text-green-600 font-bold bg-green-100 px-1.5 py-0.5 rounded">
                                -15%
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <Link to={`/product/${item.id}`} className="bg-[#f0427c] hover:bg-[#f0427c]/90 text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ml-auto">
                            <span>Buy Now</span>
                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default WishlistPage;
