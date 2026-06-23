import { Subtitles, Video } from 'lucide-react';

const videoServices = [
  {
    icon: Subtitles,
    title: 'Subtitling',
    description: 'Professional subtitle creation and translation for videos, films, and streaming content with precise timing and formatting.',
    features: ['SDH Subtitles', 'Multi-language', 'Time Synchronization', 'Format Conversion']
  },
  {
    icon: Video,
    title: 'Dubbing',
    description: 'High-quality dubbing services with professional voice actors, ensuring lip-sync and emotional authenticity.',
    features: ['Lip-sync Dubbing', 'Voice Casting', 'Audio Mixing', 'Cultural Adaptation']
  }
];

export function VideoServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videoServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-teal-600 mt-1">✓</span>
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
