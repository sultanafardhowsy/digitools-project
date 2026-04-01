import React from 'react';

const Workflow = () => {
    return (
        <div>
          <section className="w-full py-20 px-6 text-center bg-linear-to-r from-purple-600 to-indigo-600 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h2>

      <p className="text-sm md:text-base opacity-90 mb-8 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
          Explore Products
        </button>

        <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>
      </div>

      <p className="text-xs opacity-80">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>   
        </div>
    );
};

export default Workflow;