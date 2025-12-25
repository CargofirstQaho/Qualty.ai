import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl tracking-tight">Qualty.AI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#what-is" className="text-sm text-black/60 hover:text-black transition-colors">
              Platform
            </a>
            <a href="#who-we-serve" className="text-sm text-black/60 hover:text-black transition-colors">
              Solutions
            </a>
            <a href="#why-us" className="text-sm text-black/60 hover:text-black transition-colors">
              Why Qualty
            </a>
            <a href="#global-reach" className="text-sm text-black/60 hover:text-black transition-colors">
              Global Reach
            </a>
            <a href="#trusted-by" className="text-sm text-black/60 hover:text-black transition-colors">
              Trust
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-black/60 hover:text-black transition-colors">
              Sign In
            </button>
            <button className="bg-black text-white px-6 py-2.5 rounded-lg text-sm hover:bg-black/90 transition-all">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-black/5">
          <nav className="px-6 py-6 space-y-1">
            <a
              href="#what-is"
              className="block py-3 text-sm text-black/60 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Platform
            </a>
            <a
              href="#who-we-serve"
              className="block py-3 text-sm text-black/60 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#why-us"
              className="block py-3 text-sm text-black/60 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Qualty
            </a>
            <a
              href="#global-reach"
              className="block py-3 text-sm text-black/60 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Global Reach
            </a>
            <a
              href="#trusted-by"
              className="block py-3 text-sm text-black/60 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trust
            </a>
            <div className="pt-4 space-y-3">
              <button className="w-full text-sm text-black/60 hover:text-black transition-colors py-3">
                Sign In
              </button>
              <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm hover:bg-black/90 transition-all">
                Get Started Free
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}