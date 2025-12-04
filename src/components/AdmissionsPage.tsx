import { useState } from 'react';
import { Calendar, FileText, CheckCircle, Mail, Phone, MapPin, Download } from 'lucide-react';
import { useCampus } from '../contexts/CampusContext';
import { supabase } from '../lib/supabase';
import { Enquiry } from '../types';

interface AdmissionsPageProps {
  onNavigate: (page: string) => void;
}

export function AdmissionsPage({ onNavigate }: AdmissionsPageProps) {
  const { campus } = useCampus();
  const [formData, setFormData] = useState({
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    child_name: '',
    child_dob: '',
    class_grade: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const enquiry: Enquiry = {
        ...formData,
        campus: campus || 'regular',
      };

      const { error } = await supabase.from('enquiries').insert([enquiry]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        parent_name: '',
        parent_email: '',
        parent_phone: '',
        child_name: '',
        child_dob: '',
        class_grade: '',
        message: '',
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
  const regularClasses = ['1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade'];

  const classes = campus === 'playschool' ? playschoolClasses : regularClasses;

  const admissionProcess = [
    { step: '1', title: 'Enquiry', description: 'Fill out the admission form online or visit our campus' },
    { step: '2', title: 'Campus Tour', description: 'Schedule a visit to explore our facilities' },
    { step: '3', title: 'Application', description: 'Submit required documents and application fee' },
    { step: '4', title: 'Enrollment', description: 'Complete enrollment process and join Oakland family' },
  ];

  const documents = [
    'Birth certificate (original and photocopy)',
    'Previous school transfer certificate (if applicable)',
    'Academic records from previous school',
    'Passport-size photographs (4 copies)',
    'Address proof (Aadhaar card/utility bill)',
    'Parent ID proof',
  ];

  return (
    <div className="bg-gray-50">
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-white/90">
            Join the Oakland Schools family and give your child the best education
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple and transparent admission procedure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {admissionProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white text-2xl font-bold shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enquiry Form</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our admissions team will contact you shortly.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">Thank you for your interest!</h4>
                    <p className="text-sm text-green-700">We've received your enquiry and will contact you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">There was an error submitting your form. Please try again or contact us directly.</p>
                </div>
              )}

              <form
              action="https://formspree.io/f/xanogwrj"
                   method="POST" 
             >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parent_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parent_name"
                      name="parent_name"
                      required
                      value={formData.parent_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="parent_email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="parent_email"
                      name="parent_email"
                      required
                      value={formData.parent_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parent_phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="parent_phone"
                      name="parent_phone"
                      required
                      value={formData.parent_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="child_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      id="child_name"
                      name="child_name"
                      required
                      value={formData.child_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="child_dob" className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="child_dob"
                      name="child_dob"
                      required
                      value={formData.child_dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="class_grade" className="block text-sm font-medium text-gray-700 mb-2">
                      Class/Grade Applying For *
                    </label>
                    <select
                      id="class_grade"
                      name="class_grade"
                      required
                      value={formData.class_grade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select class/grade</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : campus === 'playschool'
                      ? 'bg-gradient-to-r from-lime-400 to-yellow-400 hover:shadow-lg'
                      : 'bg-gradient-to-r from-blue-900 to-green-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Download Prospectus</h3>
                <p className="text-gray-600 mb-6">
                  Get detailed information about our curriculum, facilities, and fee structure.
                </p>
               <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/broucher.pdf"; // File should be inside public/
                    link.download = "broucher.pdf";
                    link.click();
                  }}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>

              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Admissions Office</h3>
                <div className="space-y-4">
                  <a href="tel:+919492855523" className="flex items-center space-x-3 hover:text-lime-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+9194928 55523</span>
                  </a>
                  <a href="mailto:oaklandearlyexp@gmail.com" className="flex items-center space-x-3 hover:text-lime-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>oaklandearlyexp@gmail.com</span>
                  </a>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="flex items-center space-x-3 hover:text-lime-400 transition-colors"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Visit Campus</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${campus === 'playschool' ? 'from-lime-400 to-yellow-400' : 'from-blue-900 to-green-700'} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Admissions Open for 2024-25
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Limited seats available. Apply now to secure your child's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:shadow-2xl transition-all"
            >
              Apply Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              Schedule Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
