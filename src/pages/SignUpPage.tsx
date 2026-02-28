import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = () => {
    login();
    navigate('/home');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto w-full flex-col max-w-lg mx-auto overflow-x-hidden">
        <div className="flex items-center p-4 pb-2 justify-between">
          <Link to="/login" className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-[#f0427c] text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-12">Sign Up</h2>
        </div>

        <div className="px-4 py-4">
          <h3 className="text-[#f0427c] text-lg font-bold leading-tight tracking-tight mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <label className="flex flex-col flex-1">
              <p className="text-[#f0427c] text-sm font-medium pb-2">First Name</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="Enter first name" type="text" />
            </label>
            <label className="flex flex-col flex-1">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Last Name</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="Enter last name" type="text" />
            </label>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <label className="flex flex-col">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Email ID</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="example@glovi.com" type="email" />
            </label>
            <label className="flex flex-col">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Phone Number</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="+1 234 567 8900" type="tel" />
            </label>
          </div>

          <h3 className="text-[#f0427c] text-lg font-bold leading-tight tracking-tight mt-8 mb-4">Address Details</h3>
          <div className="flex flex-col gap-4 mb-4">
            <label className="flex flex-col">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Address</p>
              <textarea className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-24 p-4 text-base resize-none" placeholder="Enter your full address"></textarea>
            </label>
            <label className="flex flex-col">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Pincode</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="e.g. 110001" type="text" />
            </label>
          </div>

          <p className="text-[#f0427c] text-sm font-medium pb-3">Save Address As</p>
          <div className="flex gap-3 mb-8">
            <button className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#f0427c]/10 hover:text-[#f0427c] transition-colors border border-transparent">
              <span className="material-symbols-outlined">home</span>
              <span className="font-medium">Home</span>
            </button>
            <button className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#f0427c]/10 hover:text-[#f0427c] transition-colors border border-transparent">
              <span className="material-symbols-outlined">apartment</span>
              <span className="font-medium">Office</span>
            </button>
            <button className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#f0427c]/10 hover:text-[#f0427c] transition-colors border border-transparent">
              <span className="material-symbols-outlined">domain</span>
              <span className="font-medium">Others</span>
            </button>
          </div>

          <h3 className="text-[#f0427c] text-lg font-bold leading-tight tracking-tight mt-8 mb-4">Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <label className="flex flex-col">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Create Password</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="••••••••" type="password" />
            </label>
            <label className="flex flex-col">
              <p className="text-[#f0427c] text-sm font-medium pb-2">Confirm Password</p>
              <input className="form-input w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#f0427c] focus:ring-[#f0427c] h-12 px-4 text-base" placeholder="••••••••" type="password" />
            </label>
          </div>

          <button 
            onClick={handleSignUp}
            className="w-full bg-[#f0427c] text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#f0427c]/20 mb-8"
          >
            Create Account
          </button>

          <div className="text-center pb-8">
            <p className="text-slate-600 dark:text-slate-400">
              Already have an account? 
              <Link to="/login" className="text-[#f0427c] font-bold hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
