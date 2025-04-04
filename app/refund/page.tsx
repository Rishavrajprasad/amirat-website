import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Refund() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Refund & Cancellation Policy
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Our policies for cancellations and refunds
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Cancellation Policy
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Cancellations must be made at least 2 hours before the
                        scheduled appointment time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        If the salon professional has already reached your
                        location, no refund will be provided.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        For cancellations made within 2 hours of the
                        appointment, a 50% cancellation fee will be charged.
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Refund Eligibility
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Full refunds are only available for cancellations made
                        more than 2 hours before the appointment.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        No refunds will be provided if the salon professional
                        has already reached your location.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Partial refunds (50%) are available for cancellations
                        made within 2 hours of the appointment.
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Refund Process
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Refunds will be processed within 7-10 business days.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Refunds will be credited to the original payment method
                        used.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Processing time may vary depending on your bank or
                        payment provider.
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
                    Service Quality Issues
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        If you're dissatisfied with the service quality, please
                        contact us within 24 hours.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We will investigate the issue and may offer a partial
                        refund or complimentary service.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        All quality-related complaints must be supported by
                        evidence (photos, etc.).
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Force Majeure
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        In case of natural disasters, extreme weather
                        conditions, or other unforeseen circumstances:
                      </span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        -
                      </span>
                      <span className="ml-2">
                        Full refunds will be provided if the appointment cannot
                        be rescheduled
                      </span>
                    </li>
                    <li className="flex items-start ml-8">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        -
                      </span>
                      <span className="ml-2">
                        We will make every effort to reschedule the appointment
                        at your convenience
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
