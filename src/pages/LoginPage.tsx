import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate('/home');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
          <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-[#f0427c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Glovi</h2>
        </div>
        
        <div className="flex flex-col flex-1 justify-center px-6 max-w-[480px] mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-[#f0427c] tracking-tight text-[32px] font-bold leading-tight text-center pb-3 pt-6">Welcome Back</h1>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal text-center">Please enter your details to sign in to your account</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col">
              <p className="text-[#f0427c] text-base font-medium leading-normal pb-2">Email ID</p>
              <input 
                className="form-input flex w-full rounded-lg text-slate-900 dark:text-slate-100 border border-[#f0427c]/20 bg-white dark:bg-slate-800/50 focus:border-[#f0427c] focus:ring-1 focus:ring-[#f0427c] h-14 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal" 
                placeholder="example@email.com" 
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-end pb-2">
                <p className="text-[#f0427c] text-base font-medium leading-normal">Password</p>
                <a className="text-[#f0427c] text-sm font-semibold hover:underline" href="#">Forgot Password?</a>
              </div>
              <div className="flex w-full items-stretch rounded-lg group">
                <input 
                  className="form-input flex w-full min-w-0 flex-1 rounded-l-lg text-slate-900 dark:text-slate-100 border border-[#f0427c]/20 bg-white dark:bg-slate-800/50 focus:border-[#f0427c] focus:ring-0 h-14 placeholder:text-slate-400 p-[15px] border-r-0 text-base font-normal leading-normal" 
                  placeholder="Enter your password" 
                  type="password"
                />
                <div className="text-slate-400 flex border border-[#f0427c]/20 bg-white dark:bg-slate-800/50 items-center justify-center pr-[15px] rounded-r-lg border-l-0 cursor-pointer">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button 
              onClick={handleLogin}
              className="w-full h-14 bg-[#f0427c] hover:bg-[#f0427c]/90 text-white font-bold rounded-xl transition-colors text-lg shadow-lg shadow-[#f0427c]/20"
            >
              Login
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Don't have an account? 
              <Link to="/signup" className="text-[#f0427c] font-bold hover:underline">Sign Up</Link>
            </p>
          </div>

          <div className="mt-12 flex justify-center opacity-20">
            <div className="w-24 h-24 rounded-full bg-[#f0427c] blur-3xl"></div>
          </div>
        </div>
        <div className="h-10 bg-background-light dark:bg-background-dark"></div>
      </div>
    </div>
  );
};

export default LoginPage;
