import {
  Languages,
  Bot,
  CheckCircle2,
  FileText,
  Captions,
  Mic,
} from 'lucide-react';

const textServices = [
  {
    icon: Languages,
    title: 'Translation & Localization',
    description:
      'Professional translation and localization services for documents, websites, software, applications, and business content with cultural adaptation for target audiences.',
    features: [
      'English ↔ Hindi Translation',
      'English ↔ Urdu Translation',
      'Document Translation',
      'Website & Software Localization',
    ],
  },

  {
    icon: Bot,
    title: 'MTPE',
    description:
      'Machine Translation Post-Editing combines AI efficiency with expert linguists to deliver accurate, consistent, and cost-effective multilingual content.',
    features: [
      'Neural MT Integration',
      'Human Post-Editing',
      'Terminology Management',
      'Fast Turnaround',
    ],
  },

  {
    icon: CheckCircle2,
    title: 'Linguistic Quality Assurance',
    description:
      'Comprehensive linguistic quality assurance to ensure translation accuracy, consistency, readability, and cultural appropriateness.',
    features: [
      'Translation Review',
      'Terminology Validation',
      'Consistency Checks',
      'Quality Reports',
    ],
  },

  {
    icon: FileText,
    title: 'Transcription Services',
    description:
      'Professional transcription services for audio and video content with multilingual support and high accuracy.',
    features: [
      'Audio Transcription',
      'Video Transcription',
      'Interview Transcription',
      'Timestamped Files',
    ],
  },

  {
    icon: Captions,
    title: 'Subtitling & Captioning',
    description:
      'Professional subtitle creation and captioning services for films, corporate videos, e-learning content, OTT platforms, and YouTube.',
    features: [
      'Subtitle Creation',
      'Closed Captions',
      'SRT Files',
      'Time Synchronization',
    ],
  },

  {
    icon: Mic,
    title: 'Audio Dubbing & Voice Over',
    description:
      'Professional multilingual audio dubbing and voice-over services for corporate videos, e-learning courses, advertisements, documentaries, YouTube content, OTT platforms, and training materials.',
    features: [
      'English to Hindi Dubbing',
      'Hindi to English Dubbing',
      'Urdu Voice Over',
      'Voice-over Recording',
      'Professional Voice Artists',
    ],
  },
];

export function TextServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {textServices.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="group bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-cyan-400" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
