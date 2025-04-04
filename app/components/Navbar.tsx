import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-pink-600">
                Amirat
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-pink-500 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 text-sm font-medium"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 text-sm font-medium"
              >
                Privacy
              </Link>
              <Link
                href="/refund"
                className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-500 text-sm font-medium"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
