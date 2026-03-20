'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <CheckCircle size={64} className="mx-auto text-green-600 mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
        <p className="text-gray-600 mb-8">Thanks for reaching out. We&apos;ll get back to you within 48 hours.</p>
        <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you — course recommendations, story tips, or just to say hello."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
          {[
            { icon: Mail, label: 'Email Us', value: 'hello@thefairway.golf' },
            { icon: Phone, label: 'Call Us', value: '+1 (555) 555-GOLF' },
            { icon: MapPin, label: 'Find Us', value: 'Pebble Beach, CA 93953' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-green-700" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{label}</p>
                <p className="text-gray-600 text-sm">{value}</p>
              </div>
            </div>
          ))}
          <div className="mt-8 bg-green-900 rounded-xl p-6 text-white">
            <p className="text-amber-300 text-sm font-semibold uppercase tracking-wider mb-2">Submission Tips</p>
            <ul className="text-green-200 text-sm space-y-2">
              <li>• Course review submissions welcome</li>
              <li>• Press passes for tour events</li>
              <li>• Equipment manufacturer partnerships</li>
              <li>• Freelance writing opportunities</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card shadow="lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Tiger Woods"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="tiger@augusta.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="course-review">Course Review Submission</option>
                    <option value="press">Press &amp; Media</option>
                    <option value="partnership">Partnership / Advertising</option>
                    <option value="freelance">Freelance Writing</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
