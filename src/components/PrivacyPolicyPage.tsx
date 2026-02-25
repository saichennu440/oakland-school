export function PrivacyPolicyPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-white/90 text-lg max-w-3xl mx-auto">
          Your privacy is important to us. Please read this policy carefully to understand how we collect, use, and protect your information.
        </p>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 text-gray-700">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect personal information such as your name, phone number, email address, and message details when you submit forms on our website. 
            We also collect non-personal data like browser type, device information, and general usage statistics.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <p className="leading-relaxed">
            The information you provide is used to respond to inquiries, offer assistance, share school updates, and improve our website experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Sharing of Information</h2>
          <p className="leading-relaxed">
            We do not sell or share your personal information with third parties except service providers who assist with communication or website services.
            These partners are obligated to keep your information confidential.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Protection</h2>
          <p className="leading-relaxed">
            We implement security measures to protect your data from unauthorized access, alteration, or misuse. However, no method of online transmission is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Cookies & Tracking</h2>
          <p className="leading-relaxed">
            Our website may use cookies to enhance user experience and analyze usage patterns. You may disable cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Children's Privacy</h2>
          <p className="leading-relaxed">
            Our website is intended for parents and guardians. We do not knowingly collect personal information from children without parental consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Updates to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated revision date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
          <p className="leading-relaxed">
            For questions regarding this Privacy Policy, please contact us using the details on our Contact page.
          </p>
        </div>

      </section>
    </div>
  );
}