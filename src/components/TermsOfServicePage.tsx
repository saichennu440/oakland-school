export function TermsOfServicePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-white/90 text-lg max-w-3xl mx-auto">
          Please read these terms carefully before using our website.
        </p>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 text-gray-700">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Use of Website</h2>
          <p className="leading-relaxed">
            You agree to use the website for lawful purposes only. You may not attempt to gain unauthorized access to any part of the website or interfere with its operation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
          <p className="leading-relaxed">
            While we strive to provide accurate and updated information, the school does not guarantee the completeness or reliability of all content on this website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. External Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to external sites. We are not responsible for the content or privacy policies of these third-party websites.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, including text, images, and graphics, is the property of the school and may not be reproduced without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
          <p className="leading-relaxed">
            The school is not liable for any direct or indirect damages arising from the use or inability to use the website or its content.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Changes to Terms</h2>
          <p className="leading-relaxed">
            We may revise these Terms at any time. Continued use of the website means you accept the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
          <p className="leading-relaxed">
            If you have questions about these Terms, please contact us through the details available on our Contact page.
          </p>
        </div>
      </section>
    </div>
  );
}