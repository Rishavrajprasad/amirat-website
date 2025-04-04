import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Please read these terms carefully before using our services
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Service Booking and Cancellation
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        All services must be booked in advance through our
                        website or mobile app.
                      </span>
                    </li>
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
                        No-shows will be charged 50% of the service fee.
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Service Delivery
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Our professionals will arrive at your location within
                        30-60 minutes of the scheduled time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Please ensure a clean and well-lit space is available
                        for the service.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        The client is responsible for providing necessary
                        facilities (water, electricity, etc.).
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
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Payment Terms
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Full payment is required at the time of booking.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We accept all major credit/debit cards, UPI, and net
                        banking.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Prices are inclusive of all taxes unless specified
                        otherwise.
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
                    Health and Safety
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Clients must disclose any allergies or medical
                        conditions before the service.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Our professionals follow strict hygiene and safety
                        protocols.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We reserve the right to refuse service if we believe it
                        may be harmful to the client.
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Liability
                  </h2>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We are not liable for any damages to property during the
                        service.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        Clients are responsible for their own belongings during
                        the service.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-pink-500">
                        •
                      </span>
                      <span className="ml-2">
                        We are not responsible for any allergic reactions to
                        products used.
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
