
import React from 'react';
import { ArrowRight, PlayCircle, Loader2, LayoutDashboard, Settings } from 'lucide-react';
import HeroVisual from './HeroVisual';
import { useAuth } from '../lib/AuthContext';

interface HeroProps {
  onOpenAuth: () => void;
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAuth, onNavigate }) => {
  const { user, loading } = useAuth();

  const getFirstName = () => {
    if (user?.displayName) return user.displayName.split(' ')[0];
    return user?.email?.split('@')[0] || 'User';
  };

  return (
    <section className="relative pt-20 sm:pt-32 md:pt-40 lg:pt-48 pb-20 sm:pb-30 md:pb-40 px-4 sm:px-6 flex flex-col items-center justify-center text-center max-w-7xl mx-auto min-h-screen sm:min-h-[90vh]">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-red-50 border border-red-100 mb-6 sm:mb-10 hover:bg-red-100/70 hover:border-red-200 hover:scale-105 transition-all cursor-default animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm group">
        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-[10px] sm:text-[11px] font-bold text-red-800 tracking-widest uppercase group-hover:text-red-900">
          Secure Storage · Built for Teams
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-6 sm:mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 leading-tight">
        The secure workspace for <br />
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-900 bg-[length:200%_auto] animate-[pulse_5s_ease-in-out_infinite] pb-2 hover:scale-110 transition-transform duration-500 cursor-default">
          modern teams
        </span>
      </h1>

      {/* Subheadline - Improved readability */}
      <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 md:mb-16 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        Enterprise-grade security meets consumer-grade design. Securely manage assets, control permissions, and scale your organization with zero compromise.
      </p>

      {/* Auth Aware CTA Section */}
      <div className="w-full flex justify-center mb-16 sm:mb-20 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 min-h-[56px] relative z-20">

        {loading ? (
          <div className="flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-3">
             <Loader2 className="w-6 h-6 text-red-900 animate-spin opacity-60" />
          </div>
        ) : user ? (
          // Logged In - Dashboard Card
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 ring-1 ring-slate-100 shadow-2xl p-6 sm:p-8 rounded-2xl flex flex-col items-center gap-6 max-w-lg w-full animate-in zoom-in-95 duration-500 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-red-700 uppercase tracking-widest">Active Session</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Welcome back, {getFirstName()}
                </h3>
                <p className="text-sm sm:text-base text-slate-500 font-medium">
                    Your secure vault is ready. You have full access.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                    onClick={() => onNavigate('/dashboard')}
                    className="flex-1 px-6 py-3.5 rounded-lg text-white font-bold shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-1 hover:scale-110 transition-all duration-300 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 active:scale-95 flex items-center justify-center gap-2 group"
                >
                    <LayoutDashboard className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    Dashboard
                </button>
                <button
                    onClick={() => onNavigate('/settings')}
                    className="flex-1 px-6 py-3.5 rounded-lg bg-white border-2 border-red-200 text-red-900 font-bold hover:bg-red-50 hover:border-red-300 hover:-translate-y-1 hover:scale-110 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg"
                >
                    <Settings className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    Manage
                </button>
            </div>
          </div>
        ) : (
          // Logged Out - Standard CTAs
          <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenAuth}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-lg text-white font-bold shadow-lg shadow-red-900/40 hover:shadow-red-900/60 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 bg-red-900 hover:bg-red-800 flex items-center justify-center gap-2 group active:scale-95 text-base"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onNavigate('/demo')}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-lg bg-white border-2 border-slate-200 text-slate-900 font-bold transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group text-base shadow-md"
            >
              <PlayCircle className="w-5 h-5 text-red-900 group-hover:scale-125 transition-transform duration-300" />
              Live Demo
            </button>
          </div>
        )}
      </div>

      {/* Hero Visual */}
      <div className="w-full max-w-6xl relative animate-in fade-in zoom-in duration-1000 delay-500">
        <HeroVisual />
      </div>

    </section>
  );
};

export default Hero;
