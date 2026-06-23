import { Mic, FileAudio } from 'lucide-react';

const audioServices = [
  {
    icon: Mic,
    title: 'Voice-over',
    description: 'Professional voice-over services with native speakers in multiple languages for videos, e-learning, and multimedia projects.',
    features: ['Native Voice Talent', 'Multiple Accents', 'Studio Quality', 'Character Voices']
  },
  {
    icon: FileAudio,
    title: 'Transcription',
    description: 'Accurate audio-to-text transcription services for interviews, meetings, podcasts, and multimedia content.',
    features: ['Verbatim Transcription', 'Time-coded', 'Multi-speaker', 'Quality Assured']
  }
];

export function AudioServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {audioServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-600 mt-1">✓</span>
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
