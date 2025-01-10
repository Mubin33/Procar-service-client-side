import React from "react";

const LandingPageSections = () => {
  return (
    <div className="space-y-16">
     

      {/* Section 2: Featured Categories */}
      <div className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore Our Top Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home & Living", "Beauty"].map(
              (category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-700 mb-4">
                    {category}
                  </h3>
                  <p className="text-gray-600">
                    Discover the latest and greatest in {category}. Shop now for
                    exclusive deals!
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Section 3: Customer Testimonials */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-16 px-6 md:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "John Doe",
                review:
                  "Amazing service and fantastic products! I’ve never been happier with an online shopping experience.",
              },
              {
                name: "Jane Smith",
                review:
                  "Top-notch quality and quick delivery. Highly recommended for anyone looking for great deals.",
              },
              {
                name: "Sam Wilson",
                review:
                  "Love this website! They have everything I need at unbeatable prices.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="mb-4 italic">"{testimonial.review}"</p>
                <h3 className="font-bold text-lg text-indigo-600">
                  - {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSections;
