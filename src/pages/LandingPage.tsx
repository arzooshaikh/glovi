import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const categories = [
    { 
      name: 'Skincare', 
      count: '2,400+ Products', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZEHskbBNx1tsiH9VWvjubbtawvkd3q6U8mtba-zY8EZU3m78PKMHfNJtqa4_wiHgiHrjIoDql771ARjbHtRIiqpyQlnxVJo0SXcJNXHTDzt4IlFeRniYSeHpc9aewynI3ZH7mxAJUg16SsMPHUD40PZPOgfV4wQht_PL9NreQrxyXoqqJ4F9tnwXZNwSxtKQNgZSGAUqswV3GZl6dLmfCuNwU57deKJlqBz-Lt1JgXKL4RUvV0JJ5Q9OQALQCo9BvjMJr2FurcAE',
      path: '/category/skincare'
    },
    { 
      name: 'Makeup', 
      count: '3,100+ Products', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzRXEx0dS4frrcVr3JMuG6y7uv__b6VQVx_wHmCU2hgLLKFQanNRAQb-LF4_-ai5t5yEisVJmnzWOp6As3uSkPQJpqbbUY_uz7SFzLUT08gIymK10z5kVK37SnLg7E9abYq6MzlEyKc4iDBfdZrk4TcnClQ9hxqVWFe_bkmlRWzMe1KcYtXYkZxBvIvihZRWYJ-ENA2m27esMLS4CmRGGgBSR3Wbs4SNXHYjqysXK4iFw2OQPGJy7-IPFp6aZwWJLzCs8mBT2f7po',
      path: '/category/makeup'
    },
    { 
      name: 'Fragrance', 
      count: '800+ Products', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaoGSjgkLNs9DgbxjvrJAyINTgkKBtz97INS8GqV68kx0q48KT_ykt1eUO7dfrub6rVXrEAcldZLzJV9FIkv_06-w5IJSmqUzRo3vO60_hxm6x4HaZtcNuZXLaKp-q3s1U091qOmowhcgGf1-jvyAhtCW8SDeBdt8k2Eq1QmGg6p4d00AtJUlMtOgb7yV2xabcuhwPl3epw_ksNMDoKUb420gmWH3z9oTRenhBHyKftwo3ztxf5UBO4gDT3YVq9u2OoRiPBasxVs4',
      path: '/category/fragrance'
    },
    { 
      name: 'Haircare', 
      count: '1,200+ Products', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOKctwL06dnfAP2BSC5TBnVVPjmvD668Jh4qtskJyXMSmrcqHSpa7cRRCtiNjBmhx_JF2BZ2pnTNgkrY9yUBPg_bbdMSvk4UAYTsuxRkNPp-8v9WQ50VwbkD0qbnL05fkUAhylT9eMh5pgp1jDb4UnYNdyhcX1xUduirJVIZcL5YbXOhx15U49TxK4K8Y9vDO3AQflZGWF9okVduBjby0pFOZjL-0-Lfc-lcosDGQxC9VJpjVYMUW8WvVRSFZGdEmHhVhKY5zb60E',
      path: '/category/haircare'
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0427c]/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f0427c] text-3xl">flare</span>
            <h1 className="text-xl font-extrabold tracking-tight text-[#f0427c]">Glovi</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/signup" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#f0427c] transition-colors">Sign In</Link>
            <Link to="/login" className="bg-[#f0427c] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#f0427c]/90 transition-all shadow-lg shadow-[#f0427c]/20">Log In</Link>
          </div>
        </div>
      </nav>

      <main>
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 text-[#f0427c] font-bold text-sm tracking-widest uppercase">
                    <span className="h-px w-8 bg-[#f0427c]"></span>
                    Smart Shopping
                  </span>
                  <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-50 lg:text-7xl">
                    Compare Prices & <span className="text-[#f0427c]">Save on Beauty</span>
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-[600px] leading-relaxed">
                    Find the best deals on your favorite skincare and makeup brands across all top retailers. Never overpay for your glow again.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link to="/signup" className="bg-[#f0427c] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#f0427c]/90 transition-all shadow-xl shadow-[#f0427c]/20">Start Saving</Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUwyxmeYNxW66q96dKhPbe5Gm4Eh37Xhu910jahI0oUQi7gdtLc64fGpKdDv9URvnIxVY40I2mPhba_wgOa5onUmuhOmBZBtsABkd21X1IEJsLnyH-8U9YPllheVQ_WxQ1C-Wy8IMQSDSejFR-6PF1CGDQLPQ-m8RJhWsJQtRBGOeU_pfm4fsgfEAyTFzaV1HOL3b1cskSeK77jVnFHIJQTYfRJYSmeDIgSBmjIkzQWmbt_LFCrIQxCywKV0eGrri4eOmUJUYWHaw" 
                    alt="Premium cosmetic products"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f0427c]/20 to-transparent"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#f0427c]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#f0427c]/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-50">Why Choose Glovi?</h2>
            <p className="text-slate-600 dark:text-slate-400">We aggregate data from hundreds of retailers to give you the most accurate price history.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'trending_up', title: 'Price Tracking', desc: 'Set alerts for your holy grail products and get notified instantly when the price drops below your target.' },
              { icon: 'verified', title: 'Verified Reviews', desc: 'Read authentic feedback from beauty enthusiasts who have purchased and tested the products themselves.' },
              { icon: 'sell', title: 'Exclusive Coupons', desc: 'Access hidden promo codes and special discounts from our partner retailers that you won\'t find anywhere else.' }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white dark:bg-slate-800 border border-[#f0427c]/5 hover:border-[#f0427c]/20 transition-all hover:shadow-xl hover:shadow-[#f0427c]/5">
                <div className="w-14 h-14 rounded-2xl bg-[#f0427c]/10 text-[#f0427c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-50">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f0427c]/5 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-slate-50 mb-2">Trending Categories</h2>
                <p className="text-slate-600 dark:text-slate-400">Explore what's hot in the beauty world right now.</p>
              </div>
              <Link to="/signup" className="text-[#f0427c] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View All <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <Link key={idx} to="/signup" className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={cat.image} 
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-xl font-bold">{cat.name}</p>
                    <p className="text-white/70 text-sm">{cat.count}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="bg-[#f0427c] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Ready to start saving?</h2>
              <p className="text-white/80 text-lg max-w-xl">Join over 50,000 beauty enthusiasts who use Glovi to get more for less.</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                <Link to="/signup" className="bg-white text-[#f0427c] px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl inline-block">Get Started Now</Link>
                <button className="bg-[#f0427c]/20 border border-white/30 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-[#f0427c]/30 transition-all backdrop-blur-sm">Contact Us</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f0427c] text-3xl">flare</span>
              <h1 className="text-xl font-extrabold tracking-tight text-white">Glovi</h1>
            </div>
            <p className="text-sm leading-relaxed">The world's most trusted price comparison engine for high-end and drugstore cosmetics.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f0427c] transition-colors text-white" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f0427c] transition-colors text-white" href="#">
                <span className="material-symbols-outlined text-xl">camera_alt</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Features</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Price History</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Coupon Codes</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Review Aggregator</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Categories</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">New Arrivals</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Bestsellers</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Luxury Beauty</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Clean Beauty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Terms of Use</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Cookies</a></li>
              <li><a className="hover:text-[#f0427c] transition-colors" href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-slate-800 text-center text-xs">
          <p>© 2024 Glovi. All beauty secrets reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
