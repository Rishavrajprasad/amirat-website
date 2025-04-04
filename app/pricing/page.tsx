import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  const services = [
    {
      name: "Hair Services",
      items: [
        { name: "Haircut", price: "₹300" },
        { name: "Hair Styling", price: "₹500" },
        { name: "Hair Coloring", price: "₹1500" },
        { name: "Hair Treatment", price: "₹1000" },
      ],
    },
    {
      name: "Facial Services",
      items: [
        { name: "Basic Facial", price: "₹800" },
        { name: "Gold Facial", price: "₹1200" },
        { name: "Diamond Facial", price: "₹2000" },
        { name: "Bridal Facial", price: "₹3000" },
      ],
    },
    {
      name: "Makeup Services",
      items: [
        { name: "Basic Makeup", price: "₹1500" },
        { name: "Party Makeup", price: "₹2500" },
        { name: "Bridal Makeup", price: "₹5000" },
        { name: "HD Makeup", price: "₹3500" },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Services & Pricing
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Choose from our wide range of professional beauty services
            </p>
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {services.map((category) => (
              <div
                key={category.name}
                className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
              >
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {category.name}
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-center">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-pink-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-base text-gray-500">
                          {item.name}
                        </span>
                        <span className="ml-auto text-base font-medium text-gray-900">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * All prices are inclusive of taxes. Additional charges may apply
              for special requests.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              ** Service delivery time: 30-60 minutes from booking confirmation
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
