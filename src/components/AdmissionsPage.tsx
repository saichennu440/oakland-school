import { useState } from 'react';
import { Calendar, CheckCircle, Mail, Phone, MapPin, Download, GraduationCap, Info } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';
import { supabase } from '../lib/supabase';
import { Enquiry } from '../types';

interface AdmissionsPageProps {
  onNavigate: (page: string) => void;
}

const ageCriteria = [
  { cls: 'Nursery',   from: '01-04-2022', to: '31-03-2023', age: '3+' },
  { cls: 'LKG',       from: '01-04-2021', to: '31-03-2022', age: '4+' },
  { cls: 'UKG',       from: '01-04-2020', to: '31-03-2021', age: '5+' },
  { cls: 'Class I',   from: '01-04-2019', to: '31-03-2020', age: '6+' },
  { cls: 'Class II',  from: '01-04-2018', to: '31-03-2019', age: '7+' },
  { cls: 'Class III', from: '01-04-2017', to: '31-03-2018', age: '8+' },
  { cls: 'Class IV',  from: '01-04-2016', to: '31-03-2017', age: '9+' },
  { cls: 'Class V',   from: '01-04-2015', to: '31-03-2016', age: '10+' },
  { cls: 'Class VI',  from: '01-04-2014', to: '31-03-2015', age: '11+' },
  { cls: 'Class VII', from: '01-04-2013', to: '31-03-2014', age: '12+' },
  { cls: 'Class VIII',from: '01-04-2012', to: '31-03-2013', age: '13+' },
];

const admissionProcess = [
  { step: '01', icon: '📋', title: 'Enquiry', description: 'Fill out the admission form online or visit our campus' },
  { step: '02', icon: '🏫', title: 'Campus Tour', description: 'Schedule a visit to explore our world-class facilities' },
  { step: '03', icon: '📁', title: 'Application', description: 'Submit required documents and application fee' },
  { step: '04', icon: '🎓', title: 'Enrollment', description: 'Complete enrollment and join the Oakland family' },
];

const documents = [
  'Birth certificate (original and photocopy)',
  'Previous school transfer certificate (if applicable)',
  'Academic records from previous school',
  'Passport-size photographs (4 copies)',
  'Address proof (Aadhaar card / utility bill)',
  'Parent ID proof',
];
const gradientClass = 'from-blue-900 to-green-700';
export function AdmissionsPage({ onNavigate }: AdmissionsPageProps) {
  const { campus } = useCampus();
  const [formData, setFormData] = useState({
    parent_name: '', parent_email: '', parent_phone: '',
    child_name: '', child_dob: '', class_grade: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    // Send to Formspree (no redirect)
    const response = await fetch('https://formspree.io/f/mvzwqvjk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ ...formData, campus: campus || 'regular' }),
    });

    if (!response.ok) throw new Error('Formspree submission failed');

    // Also save to Supabase
    const enquiry: Enquiry = { ...formData, campus: campus || 'regular' };
    const { error } = await supabase.from('enquiries').insert([enquiry]);
    if (error) throw error;

    setSubmitStatus('success');
    setFormData({
      parent_name: '', parent_email: '', parent_phone: '',
      child_name: '', child_dob: '', class_grade: '', message: '',
    });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const playschoolClasses = ['Nursery', 'LKG', 'UKG'];
  const regularClasses = ['1st Grade','2nd Grade','3rd Grade','4th Grade','5th Grade','6th Grade','7th Grade','8th Grade'];
  const classes = campus === 'playschool' ? playschoolClasses : regularClasses;

  return (
    <div className="bg-slate-50 font-sans">

      {/* ── HERO ── */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Admissions Open 2025–26
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
            Begin Your Child's<br />
            <span className="text-emerald-300">Brightest Chapter</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join the Oakland Schools family and unlock a world of curiosity, confidence, and lifelong learning.
          </p>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">How Admissions Work</h2>
            <p className="text-gray-500 text-lg">A simple, four-step journey to joining Oakland</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {admissionProcess.map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xs font-bold text-emerald-600 tracking-widest mb-1">STEP {item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-3 z-10 text-gray-300 text-2xl">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE CRITERIA TABLE ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Info className="w-4 h-4" /> Age Criteria – Academic Year 2026–27
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Is Your Child Eligible?</h2>
            <p className="text-gray-500 mt-2 text-sm">Age calculated as on <strong>31st March 2026</strong></p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-950 to-emerald-800 text-white">
                  <th className="py-4 px-5 text-left font-semibold tracking-wide">Class</th>
                  <th className="py-4 px-5 text-left font-semibold tracking-wide">Date of Birth (From)</th>
                  <th className="py-4 px-5 text-left font-semibold tracking-wide">Date of Birth (To)</th>
                  <th className="py-4 px-5 text-center font-semibold tracking-wide">Min. Age</th>
                </tr>
              </thead>
              <tbody>
                {ageCriteria.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-emerald-50`}
                  >
                    <td className="py-3.5 px-5 font-semibold text-gray-800">{row.cls}</td>
                    <td className="py-3.5 px-5 text-gray-600">{row.from}</td>
                    <td className="py-3.5 px-5 text-gray-600">{row.to}</td>
                    <td className="py-3.5 px-5 text-center">
                      <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full">
                        {row.age} years
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center flex items-center justify-center gap-1">
            <Info className="w-3.5 h-3.5" /> Age criteria subject to school management's discretion. Please contact the admissions office for clarification.
          </p>
        </div>
      </section>

      {/* ── ENQUIRY FORM + SIDEBAR ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Apply Now</h2>
            <p className="text-gray-500">Fill in your details and our admissions team will reach out within 24 hours.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
         <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
  {submitStatus === 'success' && (
    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-semibold text-emerald-900">Enquiry received!</p>
        <p className="text-sm text-emerald-700">We'll contact you within 24 hours.</p>
      </div>
    </div>
  )}
  {submitStatus === 'error' && (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
      Something went wrong. Please try again or contact us directly.
    </div>
  )}

  <form onSubmit={handleSubmit} className="space-y-5">
    <div className="grid md:grid-cols-2 gap-5">
      {[
        { id: 'parent_name', label: 'Parent / Guardian Name', type: 'text' },
        { id: 'parent_email', label: 'Email Address', type: 'email' },
        { id: 'parent_phone', label: 'Phone Number', type: 'tel' },
        { id: 'child_name', label: "Child's Name", type: 'text' },
      ].map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
            {label} *
          </label>
          <input
            type={type} id={id} name={id} required
            value={formData[id as keyof typeof formData]}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      <div>
        <label htmlFor="child_dob" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
          Child's Date of Birth *
        </label>
        <input
          type="date" id="child_dob" name="child_dob" required
          value={formData.child_dob} onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>
      <div>
        <label htmlFor="class_grade" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
          Class / Grade Applying For *
        </label>
        <select
          id="class_grade" name="class_grade" required
          value={formData.class_grade} onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        >
          <option value="">Select class / grade</option>
          {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
        </select>
      </div>
    </div>

    <div>
      <label htmlFor="message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
        Additional Message (Optional)
      </label>
      <textarea
        id="message" name="message" rows={4}
        value={formData.message} onChange={handleChange}
        placeholder="Any specific questions or requirements..."
        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
        isSubmitting
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-950 to-emerald-700 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5'
      }`}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span>Submitting…</span>
        </>
      ) : (
        'Submit Enquiry →'
      )}
    </button>
  </form>
</div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Documents */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs">📁</span>
                  Required Documents
                </h3>
                <ul className="space-y-3">
                  {documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prospectus */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-7 text-white">
                <GraduationCap className="w-8 h-8 mb-3 text-emerald-300" />
                <h3 className="text-lg font-bold mb-2">Download Prospectus</h3>
                <p className="text-sm text-white/70 mb-5">Curriculum details, facilities & fee structure — all in one PDF.</p>
                <button
                  onClick={() => { const a = document.createElement('a'); a.href = '/broucher.pdf'; a.download = 'broucher.pdf'; a.click(); }}
                  className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-900 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Admissions Office</h3>
                <a href="tel:+919492855523" className="flex items-center gap-3 text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  <span className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 text-emerald-600" /></span>
                  +91 94928 55523
                </a>
                <a href="mailto:oaklandearlyexp@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 text-blue-600" /></span>
                  oaklandearlyexp@gmail.com
                </a>
                <button onClick={() => onNavigate('contact')} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors w-full text-left">
                  <span className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-orange-500" /></span>
                  Visit Our Campus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-14 h-14 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admissions Open for 2025–26</h2>
          <p className="text-white/80 text-lg mb-8">Limited seats available. Secure your child's future today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-blue-950 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              Apply Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Schedule Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}