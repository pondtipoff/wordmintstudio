import { Globe, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative py-32 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        }}
      >
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <Globe className="w-20 h-20 text-cyan-400" />
            </div>

            {/* Badge */}
            <div className="inline-flex flex-col items-center gap-1 px-6 py-3 mb-10 rounded-full border border-slate-600 text-slate-300 text-sm backdrop-blur-sm">
              <span className="font-semibold">
                WordMintStudio
              </span>

              <span>
                Translation & Localization
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">
                Precision Translation.
              </span>

              <span className="block">
                Global Reach.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
              Translation, Localization, MTPE,
              Linguistic QA, Subtitling and
              Transcription, Audio Dubbing and
              Voice Over Services for Global
              Businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  scrollToSection('services')
                }
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Explore Services

                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() =>
                  scrollToSection('contact')
                }
                className="border border-slate-500 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-cyan-400 mb-3">
                11+
              </div>

              <div className="text-slate-300 text-lg">
                Years Experience
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-cyan-400 mb-3">
                3
              </div>

              <div className="text-slate-300 text-lg">
                Languages Supported
              </div>

              <div className="text-slate-400 text-sm mt-2">
                English • Hindi • Urdu
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-cyan-400 mb-3">
                7+
              </div>

              <div className="text-slate-300 text-lg">
                Core Services
              </div>

              <div className="text-slate-400 text-sm mt-2">
                Translation • Dubbing • Voice Over • LQA
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
