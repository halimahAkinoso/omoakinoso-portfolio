import React from 'react';

const Contacts = () => {
  return (
    <section 
      id="contact" 
      className="py-24 bg-[linear-gradient(to_right,rgba(245,245,245,0.8),rgba(245,245,245,0.8)),url('https://d33wubrfki0l68.cloudfront.net/da0520573b7858d199da3052194e4384b6587c64/62f6b/assets/svg/common-bg.svg')]"
      style={{ backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-widest uppercase text-gray-900 mb-6 relative inline-block">
            Contact
            <span className="block h-1.5 w-8 bg-[#7843e9] rounded-lg absolute -bottom-4 left-1/2 -translate-x-1/2"></span>
          </h2>
          <p className="text-xl text-[#555] max-w-2xl mx-auto leading-relaxed mt-10">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.1)] p-8 md:p-12">
          <form className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-bold text-[#666] mb-3 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-4 bg-[#f0f0f0] border-transparent rounded-md font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#7843e9] transition-all"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-bold text-[#666] mb-3 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-4 bg-[#f0f0f0] border-transparent rounded-md font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#7843e9] transition-all"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-bold text-[#666] mb-3 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                rows="8"
                className="w-full px-5 py-4 bg-[#f0f0f0] border-transparent rounded-md font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#7843e9] transition-all"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full md:w-auto px-16 py-4 bg-[#7843e9] text-white font-bold rounded-md shadow-lg hover:translate-y-[-3px] transition-all uppercase tracking-widest text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;