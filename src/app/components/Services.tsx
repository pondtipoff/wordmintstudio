import { TextServices } from './TextServices';

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-slate-700 bg-slate-800/50 text-cyan-400 text-sm">
            Word Mint Studio Services
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Professional language solutions for businesses,
            startups, software companies, educational institutions,
            and global organizations.
          </p>
        </div>

        {/* Services Grid */}
        <TextServices />

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Language Solution?
            </h3>

            <p className="text-slate-300 mb-8">
              From translation and localization to transcription,
              subtitling, MTPE, and linguistic quality assurance,
              our team delivers scalable multilingual solutions.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-colors"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
