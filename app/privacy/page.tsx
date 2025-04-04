import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              How we protect and use your personal information
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                    <svg
                      className="h-6 w-6 text-pink-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Information We Collect
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Personal Information: Name, contact details, address,
                        and payment information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Service Preferences: Your preferred services,
                        appointment history, and feedback.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Technical Information: IP address, browser type, and
                        device information.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                    <svg
                      className="h-6 w-6 text-pink-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    How We Use Your Information
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        To provide and improve our services.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        To process your bookings and payments.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        To communicate with you about your appointments and
                        services.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        To send you promotional offers and updates (with your
                        consent).
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                    <svg
                      className="h-6 w-6 text-pink-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    Information Sharing
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We do not sell your personal information to third
                        parties.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We may share your information with service providers who
                        assist in our operations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We may disclose information if required by law or to
                        protect our rights.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                    <svg
                      className="h-6 w-6 text-pink-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Data Security
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We implement appropriate security measures to protect
                        your information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We use encryption for sensitive data transmission.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We regularly review and update our security practices.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                    <svg
                      className="h-6 w-6 text-pink-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Your Rights
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        You can access and update your personal information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        You can request deletion of your account and data.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        You can opt-out of marketing communications.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        You can withdraw consent for data processing.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
