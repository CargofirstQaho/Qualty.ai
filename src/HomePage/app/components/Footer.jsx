export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-4 tracking-tight">Qualty.AI</h3>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              The world's first global inspection marketplace connecting traders
              with certified quality inspectors. 100% free platform.
            </p>
            <div className="text-sm text-white/40">
              © 2024 Qualty.AI • All Rights Reserved
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="text-sm text-white/40 mb-4 tracking-wide uppercase">
              Platform
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#what-is" className="text-white/60 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white/60 hover:text-white transition-colors text-sm">
                  Why Qualty
                </a>
              </li>
              <li>
                <a href="#global-reach" className="text-white/60 hover:text-white transition-colors text-sm">
                  Global Reach
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-sm text-white/40 mb-4 tracking-wide uppercase">
              Solutions
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  For Importers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  For Inspectors
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  For Companies
                </a>
              </li>
              <li>
                <a href="#trusted-by" className="text-white/60 hover:text-white transition-colors text-sm">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <div className="text-sm text-white/40 mb-4 tracking-wide uppercase">
              Legal & Trust
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              Built for global trade. Trusted worldwide.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                ISO 9001:2015
              </a>
              <a href="#" className="hover:text-white transition-colors">
                ISO 27001
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GDPR Compliant
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
