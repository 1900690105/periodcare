import React from "react";

function StateSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-pink-600">50K+</p>
              <p className="text-gray-600 font-medium">Women Empowered</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-coral-600">10+</p>
              <p className="text-gray-600 font-medium">Languages Supported</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-purple-600">24/7</p>
              <p className="text-gray-600 font-medium">AI Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StateSection;
