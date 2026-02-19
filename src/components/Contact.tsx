import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(347) 555-1234', href: 'tel:+13475551234' },
  { icon: Mail, label: 'Email', value: 'info@scratchprodetailing.com', href: 'mailto:info@scratchprodetailing.com' },
  { icon: MapPin, label: 'Service Area', value: 'Brooklyn, NY 11223 (30-mile radius)', href: '#' },
  { icon: Clock, label: 'Hours', value: '7 AM – 8 PM, 7 Days a Week', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with email service or API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', vehicle: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            CONTACT <span className="text-gradient">US</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Ready to book? Have a question? Reach out — we respond within 30 minutes during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="group glass rounded-xl p-5 flex items-center gap-4 hover:border-amber-500/20 transition-all block"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-colors">
                    <Icon size={22} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-dark-400 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Social or Additional Info */}
            <div className="glass rounded-xl p-6 mt-6">
              <h3 className="font-heading text-lg font-bold text-white mb-3">Quick Response Guarantee</h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                We respond to all inquiries within 30 minutes during business hours. For urgent bookings, call us directly — same-day service is often available.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-dark-400">We'll get back to you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-dark-400 text-sm mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-dark-400 text-sm mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(347) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-dark-400 text-sm mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-dark-400 text-sm mb-1.5">Vehicle</label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="2023 BMW M4"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-dark-400 text-sm mb-1.5">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-dark-900">Select a service...</option>
                      <option value="interior" className="bg-dark-900">Interior Detailing</option>
                      <option value="exterior" className="bg-dark-900">Exterior Wash & Detail</option>
                      <option value="full" className="bg-dark-900">Full Detail Package</option>
                      <option value="ceramic" className="bg-dark-900">Ceramic Coating</option>
                      <option value="paint" className="bg-dark-900">Paint Correction</option>
                      <option value="protection" className="bg-dark-900">Premium Protection</option>
                      <option value="other" className="bg-dark-900">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-dark-400 text-sm mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your vehicle's condition and what you're looking for..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-dark-600 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark-950 font-bold text-lg rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}