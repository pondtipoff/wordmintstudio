import {
  FileText,
  Bot,
  CheckCircle2,
  Globe2,
  Lightbulb,
} from 'lucide-react';

const textServices = [
  {
    icon: FileText,
    title: 'Translation',
    description:
      'Professional human translation services for business, technical, legal, educational, and marketing content.',
    features: [
      'Document Translation',
      'Website Translation',
      'Technical Translation',
      'Certified Translation',
    ],
  },
  {
    icon: Bot,
    title: 'MTPE',
    description:
      'Machine Translation Post-Editing combines AI speed with human expertise for faster and cost-effective multilingual delivery.',
    features: [
      'Neural MT Integration',
      'Human Review',
      'Terminology Control',
      'Fast Turnaround',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Linguistic QA',
    description:
      'Comprehensive linguistic testing and quality assurance to ensure accuracy, consistency, and cultural relevance.',
    features: [
      'Error Detection',
      'Consistency Checks',
      'Functional Testing',
      'Quality Reports',
    ],
  },
  {
    icon: Globe2,
    title: 'Localization',
    description:
      'Adapt websites, software, applications, and content for regional audiences while preserving brand identity.',
    features: [
      'Software Localization',
      'App Localization',
      'Website Localization',
      'Cultural Adaptation',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Transcreation',
    description:
      'Creative adaptation of marketing and advertising content while preserving tone, emotion, and brand voice.',
    features: [
      'Marketing Content',
      'Creative Copy',
      'Brand Messaging',
      'Campaign Localization',
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
            <p className="text-slate-300 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="text-cyan-400 mt-0.5">
                    ✓
                  </span>

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