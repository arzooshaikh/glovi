import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  return (
    <Link 
      to={`/product/${product.id}`}
      className="flex flex-col bg-white dark:bg-slate-800/40 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 group"
    >
      <div className="relative aspect-square bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
        />
        <button 
          className={cn(
            "absolute top-2 right-2 size-8 flex items-center justify-center backdrop-blur-sm rounded-full transition-all duration-300",
            isFavorite 
              ? "bg-[#f0427c] text-white shadow-lg shadow-[#f0427c]/40 scale-110" 
              : "bg-white/80 dark:bg-black/40 text-slate-600 dark:text-slate-300 hover:text-[#f0427c] hover:scale-110"
          )}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <span className={cn(
            "material-symbols-outlined text-[20px] transition-all",
            isFavorite && "fill-1"
          )}>favorite</span>
        </button>
      </div>
      <div className="p-3">
        <p className="text-xs font-medium text-[#f0427c] uppercase tracking-wider mb-1">{product.bestDealAt} Deal</p>
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">{product.name}</h4>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900 dark:text-slate-100">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
