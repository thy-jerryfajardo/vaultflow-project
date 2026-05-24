
import React from 'react';
import { ArrowLeft, Search, Book, MessageCircle, FileQuestion, Mail } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

const Support: React.FC<PageProps> = ({ onNavigate }) => {
  const faqs = [
    {
      q: "Is SunnSafe really zero-knowledge?",
      a: "Yes. All encryption happens client-side. We do not have access to your keys or your data."
    },
    {
      q: "Can I recover deleted files?",
      a: "Pro and Business plans include 30-day version history and trash recovery. Free plans have 7-day recovery."
    },
    {
      q: "Do you offer SSO?",
      a: "Yes, SAML SSO integration is available on Business and Enterprise plans."
    },
    {
      q: "What happens if I downgrade my plan?",
      a: "Your files remain secure, but you will be locked from uploading new files if you exceed the storage limit of the new plan."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 max-w-4xl mx-auto min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
          How can we help?
        </h1>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg border border-slate-200 shadow-md focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-base"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200 shadow-md hover:border-red-200 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Book size={20} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
          <p className="text-sm text-slate-500">Guides on getting started, API references, and security whitepapers.</p>
        </div>
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200 shadow-md hover:border-red-200 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <MessageCircle size={20} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Community Forum</h3>
          <p className="text-sm text-slate-500">Connect with other developers and share best practices.</p>
        </div>
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200 shadow-md hover:border-red-200 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <div className="w-10 h-10 bg-red-50 text-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-900 group-hover:text-white transition-colors">
            <Mail size={20} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Contact Support</h3>
          <p className="text-sm text-slate-500">Direct line to our engineering team for critical issues.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 flex items-center gap-2 sm:gap-3">
            <FileQuestion className="text-red-900 w-6 h-6 sm:w-8 sm:h-8" />
            Frequently Asked Questions
        </h2>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-lg p-4 sm:p-6 md:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">{faq.q}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
            ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center">
        <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-900 transition-colors mx-auto"
        >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
        </button>
      </div>
    </section>
  );
};

export default Support;
