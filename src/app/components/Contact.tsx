import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key:
              import.meta.env
                .VITE_WEB3FORMS_ACCESS_KEY,

            subject:
              'New Inquiry from WordMintStudio Website',

            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(true);

        setFormData({
          name: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        setError(
          'Failed to send message. Please try again.'
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-slate-700 bg-slate-800/50 text-cyan-400 text-sm">
            Contact WordMintStudio
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Discuss Your Project
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Translation, Localization, MTPE,
            Subtitling, Transcription and
            Linguistic QA services tailored
            to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-slate-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Service Required
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">
                    Select a Service
                  </option>

                  <option>
                    Translation
                  </option>

                  <option>
                    Localization
                  </option>

                  <option>
                    MTPE
                  </option>

                  <option>
                    Linguistic QA
                  </option>

                  <option>
                    Subtitling
                  </option>

                  <option>
                    Transcription
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Describe your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading
                  ? 'Sending...'
                  : 'Send Inquiry'}

                <Send className="w-5 h-5" />
              </button>

              {success && (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                  <p className="text-green-400 text-center">
                    Message sent successfully.
                    We will contact you shortly.
                  </p>
                </div>
              )}

              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                  <p className="text-red-400 text-center">
                    {error}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="text-white">
                      Email
                    </h4>

                    <p className="text-slate-300">
                      info@wordmintstudio.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="text-white">
                      Phone
                    </h4>

                    <p className="text-slate-300">
                      +91 7987969616
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="text-white">
                      Location
                    </h4>

                    <p className="text-slate-300">
                      Indore, Madhya Pradesh,
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Why Choose WordMintStudio?
              </h3>

              <ul className="space-y-4 text-slate-300">
                <li>✓ 11+ Years Industry Experience</li>
                <li>✓ Native Hindi & Urdu Linguists</li>
                <li>✓ Human + AI Workflow</li>
                <li>✓ Fast Turnaround Times</li>
                <li>✓ Dedicated Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
