import { Upload, ArrowRight } from 'lucide-react';

const textSamples = [
  {
    title: 'Technical Manual Translation',
    service: 'Translation',
    languages: 'English → Hindi & Urdu',
    description:
      'Automotive parts manual with technical specifications and terminology management.',
    wordCount: '15,000 Words',
  },
  {
    title: 'E-Commerce Website Localization',
    service: 'MTPE',
    languages: 'English → Hindi & Urdu',
    description:
      'Product descriptions and category content optimized for multilingual markets.',
    wordCount: '8,500 Words',
  },
  {
    title: 'Software UI Localization',
    service: 'Localization',
    languages: 'English → Hindi & Urdu',
    description:
      'Mobile application interface localization with cultural adaptation.',
    wordCount: '3,200 Strings',
  },
  {
    title: 'Marketing Campaign Adaptation',
    service: 'Transcreation',
    languages: 'English → Hindi & Urdu',
    description:
      'Brand messaging adapted for regional audiences while preserving tone and intent.',
    wordCount: '2,000 Words',
  },
  {
    title: 'Legal Contract Review',
    service: 'LQA',
    languages: 'English → Hindi & Urdu',
    description:
      'Comprehensive linguistic quality assurance and terminology validation.',
    wordCount: '12,000 Words',
  },
  {
    title: 'Educational Content Translation',
    service: 'Translation',
    languages: 'English → Hindi & Urdu',
    description:
      'Academic and training materials localized for learners and institutions.',
    wordCount: '25,000 Words',
  },
];

export function Samples() {
  return (
    <section
      id="samples"
      className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-slate-700 bg-slate-800/50 text-cyan-400 text-sm">
            Portfolio & Case Studies
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sample Projects
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A selection of translation, localization, MTPE, and
            linguistic quality assurance projects delivered for
            global clients.
          </p>
        </div>

        {/* Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textSamples.map((sample, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5">
                <span className="inline-flex px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {sample.service}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {sample.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {sample.description}
              </p>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-slate-500">
                    Languages
                  </span>

                  <p className="text-slate-300 mt-1">
                    {sample.languages}
                  </p>
                </div>

                <div>
                  <span className="text-slate-500">
                    Project Volume
                  </span>

                  <p className="text-slate-300 mt-1">
                    {sample.wordCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 max-w-4xl mx-auto text-center">
            <div className="bg-cyan-500/10 border border-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-cyan-400" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Sample?
            </h3>

            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We can provide project-specific translation,
              localization, MTPE, or linguistic QA samples
              tailored to your industry and content type.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Request a Sample
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}