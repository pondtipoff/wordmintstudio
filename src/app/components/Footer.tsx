import {
  Globe,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Twitter,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Word Mint Studio
                </h3>

                <p className="text-sm text-slate-400">
                  Translation & Localization
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Professional language solutions for businesses,
              startups, educational institutions, software
              companies, and global organizations.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Translation
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Localization
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  MTPE
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Linguistic QA
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Subtitling
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Transcription
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Audio Dubbing & Voice Over
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Languages
            </h4>

            <ul className="space-y-3">
              <li>English</li>
              <li>Hindi</li>
              <li>Urdu</li>
              <li>Multilingual Projects</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />

                <div>
                  <p>info@wordmintstudio.com</p>
                  <p>sales@wordmintstudio.com</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />

                <div>
                  <p>+91 7987969616</p>
                </div>
              </div>

              <div>
                <p className="text-slate-400">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} WordMintStudio. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
