import React from 'react';
import NavigationBar from './navBar';
import './AboutUs.css'
import BackgroundImage from '../images/vecteezy_ai-generated-ocean-under-the-moonlight-background_42193185.jpg'; // Import the background image


const AboutUs = () => {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize:'cover'}}>
    <NavigationBar />
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white overflow-y-hidden">About Us</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Mission</h2>
              <p className="leading-relaxed text-base text-white">We're on a mission to redefine the standards of [industry/niche] through innovation, sustainability, and quality.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22s8-4 8-10V5l-2 4-4-2-4 2-2-4v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Vision</h2>
              <p className="leading-relaxed text-base text-white">We envision a future where [industry/niche] is driven by innovation, sustainability, and positive impact.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 10a3 3 0 00-3-3m-6 0a3 3 0 00-3 3m6 0v8"></path>
                <path d="M3 13a3 3 0 013-3h12a3 3 0 013 3"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Values</h2>
              <p className="leading-relaxed text-base text-white">Our core values include innovation, integrity, sustainability, and social responsibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutUs;