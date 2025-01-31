import React from "react";

const ServicePage = () => {
  return (
    <div className="bg-gray-700 text-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">My Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:bg-gray-400 hover:text-pink-800">
            <h2 className="text-2xl font-semibold mb-4">Frontend Development</h2>
            <p>
              I specialize in creating user-friendly and responsive web
              interfaces. Whether you need a simple website or a complex
              application, I can help turn your ideas into reality with modern
              frontend technologies like HTML, CSS, JavaScript, and React.
            </p>
          </div>

          <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:bg-gray-400 hover:text-pink-800">
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p>
              User experience is key to any successful web application. I design
              beautiful and intuitive interfaces that prioritize both form and
              function. Let me help you create an experience your users will love.
            </p>
          </div>

          <div className="bg-gray-600 p-6 rounded-lg shadow-lg hover:bg-gray-400 hover:text-pink-800">
            <h2 className="text-2xl font-semibold mb-4">Website Optimization</h2>
            <p>
              Speed is crucial for user retention. I offer website optimization
              services to improve page load times, ensuring your site runs
              efficiently and provides a smooth user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
