import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative py-24 sm:py-32">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Amirat - Saloon at your doorstep
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Experience luxury salon services in the comfort of your home.
                Book your appointment now and get pampered by our expert
                stylists.
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href="/app-release.apk"
                  download="Amirat-Saloon.apk"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download App Now
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                Why Choose Amirat?
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="relative">
                  <div className="relative flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    At Your Doorstep
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    No need to travel. Our expert stylists come to your home
                    with all necessary equipment.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                  <div className="relative flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                    <svg
                      className="h-6 w-6"
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
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    Flexible Timing
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Book appointments at your convenience. We work around your
                    schedule.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="relative">
                  <div className="relative flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                    <svg
                      className="h-6 w-6"
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
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    Professional Service
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our stylists are highly trained professionals with years of
                    experience in the beauty industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
