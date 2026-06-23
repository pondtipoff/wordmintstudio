import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-cyan-600 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                WordMintStudio
              </h1>

              <p className="text-xs text-slate-500">
                Translation & Localization
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection('samples')}
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-6">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-slate-700 hover:text-cyan-600 transition-colors"
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection('samples')}
                className="text-left text-slate-700 hover:text-cyan-600 transition-colors"
              >
                Portfolio
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-700 hover:text-cyan-600 transition-colors"
              >
                Contact
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors w-full"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}