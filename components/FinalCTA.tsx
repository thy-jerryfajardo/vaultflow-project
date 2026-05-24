
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
    onOpenAuth: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAuth }) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-red-900/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-500/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
            Ready to secure your workflow?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Join thousands of teams who trust SunnSafe for their most critical data.Start your free trial today.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <button
                onClick={onOpenAuth}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-red-900 hover:bg-red-800 text-white rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-2 hover:scale-110 active:scale-95 flex items-center justify-center gap-2 group shadow-lg"
            >
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white/15 hover:bg-white/25 text-white rounded-lg font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-lg hover:-translate-y-2 hover:scale-110 active:scale-95 group">
                Book a Demo
            </button>
          </div>
          <p className="mt-8 sm:mt-10 md:mt-12 text-slate-400 text-xs sm:text-sm font-medium animate-in fade-in duration-500 delay-300">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
