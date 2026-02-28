import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl overflow-x-hidden">
        <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
          <Link to="/home" className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Profile</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-slate-900 dark:text-slate-100 p-0">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>

        <div className="flex p-6">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div className="relative">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-[#f0427c]/20" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvEWil_GfBi3XnwIqoskZZ3tOnSXCTK9zKCZh8e8ivuHoWr20QgPwTtj9MCMr_u2SFK-I6rptAxutx3Vtm98rWRkxUevoAfSNbYJf26RFlMYAwArlx2R7euYkfSuL5qTe4jAtTQmnGH26ECOAxGoWVRCR9ZmfRwoLs_TkdNbHNhSpC8eVad49gQYZBYSBXqzfU28TfUf-eU8dddE6CTKum-K8WxXiwKDT8AfblIP8iRMk55uTfaM0kVHXuGxbxBE0cRNye2jZcRFM")' }}
                ></div>
                <div className="absolute bottom-1 right-1 bg-[#f0427c] text-white p-1.5 rounded-full border-2 border-background-light dark:border-background-dark">
                  <span className="material-symbols-outlined text-xs block">edit</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black dark:text-black text-2xl font-bold leading-tight tracking-tight text-center">Jane Doe</p>
                <p className="text-[#f0427c] font-medium text-sm text-center">jane.doe@glovi.com</p>
                <div className="mt-2 flex items-center gap-1.5 px-3 py-1 bg-[#f0427c]/10 rounded-full">
                  <span className="material-symbols-outlined text-[#f0427c] text-sm">verified_user</span>
                  <p className="text-[#f0427c] text-xs font-semibold leading-normal text-center uppercase tracking-wider">Premium Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-6 mb-6">
          {[
            { label: 'Orders', val: '12' },
            { label: 'Wishlist', val: '45' },
            { label: 'Points', val: '2.4k' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-3 bg-white dark:bg-white/5 rounded-xl border border-[#f0427c]/10">
              <p className="text-[#f0427c] font-bold text-lg">{stat.val}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="px-4 space-y-1">
          <h3 className="text-black dark:text-black text-sm font-bold uppercase tracking-widest px-2 pb-2 pt-4">Account Settings</h3>
          {[
            { icon: 'location_on', title: 'My Address', sub: '123 Beauty Lane, Glow City' },
            { icon: 'package_2', title: 'My Orders', sub: 'Manage your recent purchases' },
            { icon: 'favorite', title: 'My Wishlist', sub: '45 items saved for later', path: '/wishlist' }
          ].map((item, idx) => (
            <Link key={idx} to={item.path || '#'} className="flex items-center gap-4 bg-white dark:bg-white/5 hover:bg-[#f0427c]/5 transition-colors px-4 min-h-[64px] rounded-xl border border-transparent hover:border-[#f0427c]/20">
              <div className="text-[#f0427c] flex items-center justify-center rounded-lg bg-[#f0427c]/10 shrink-0 size-10">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-black dark:text-black text-base font-semibold leading-normal truncate">{item.title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs truncate">{item.sub}</p>
              </div>
              <div className="shrink-0">
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </div>
            </Link>
          ))}
          
          <h3 className="text-black dark:text-black text-sm font-bold uppercase tracking-widest px-2 pb-2 pt-6">Preferences</h3>
          {[
            { icon: 'notifications', title: 'Notifications' },
            { icon: 'payments', title: 'Payment Methods' }
          ].map((item, idx) => (
            <Link key={idx} to="#" className="flex items-center gap-4 bg-white dark:bg-white/5 hover:bg-[#f0427c]/5 transition-colors px-4 min-h-[64px] rounded-xl border border-transparent hover:border-[#f0427c]/20">
              <div className="text-[#f0427c] flex items-center justify-center rounded-lg bg-[#f0427c]/10 shrink-0 size-10">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex flex-1">
                <p className="text-black dark:text-black text-base font-semibold leading-normal truncate">{item.title}</p>
              </div>
              <div className="shrink-0">
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="p-6 mt-4">
          <button 
            onClick={handleLogout}
            className="w-full py-4 rounded-xl border-2 border-[#f0427c]/20 text-[#f0427c] font-bold hover:bg-[#f0427c]/5 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
        <div className="h-24"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
