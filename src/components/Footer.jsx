// import React from 'react';

// const AboutUs = () => {
//   return (
//     <section className="text-white body-font">
//       <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//         <div className="text-center lg:w-2/3 w-full">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
//           <p className="mb-8 leading-relaxed">Welcome to <span className="font-bold">Company Name</span>, where innovation meets passion. We are a team of forward-thinkers dedicated to revolutionizing <span className="font-bold">[industry/niche]</span> through cutting-edge technology and creative solutions.</p>
//           <p className="mb-8 leading-relaxed">At <span className="font-bold">Company Name</span>, we believe in pushing boundaries and challenging the status quo. Our journey began with a simple idea: to redefine <span className="font-bold">[industry/niche]</span> by infusing it with modernity, sustainability, and unparalleled quality. Since our inception, we've been on a mission to create products/services that not only meet the needs of today but also anticipate the demands of tomorrow.</p>
//           <p className="mb-8 leading-relaxed">Driven by a relentless pursuit of excellence, our team comprises diverse talents from around the globe. From seasoned experts to fresh innovators, each member brings unique perspectives and skills to the table. Together, we form a dynamic force, united by a shared vision of making a meaningful impact on the world.</p>
//           <p className="mb-8 leading-relaxed">In a rapidly evolving landscape, adaptability is key. That's why we embrace change and embrace challenges as opportunities for growth. Whether it's adopting the latest technology or adapting our strategies to meet shifting market dynamics, we're always one step ahead.</p>
//           <p className="mb-8 leading-relaxed">But our commitment goes beyond just business. We're deeply passionate about making a positive difference in the communities we serve and the environment we inhabit. Through sustainable practices and social responsibility initiatives, we strive to leave a lasting legacy of impact and inspiration.</p>
//           <p className="mb-8 leading-relaxed">At <span className="font-bold">Company Name</span>, innovation isn't just a buzzword—it's our ethos. We thrive on pushing boundaries, disrupting norms, and reimagining possibilities. Join us on this exhilarating journey as we continue to shape the future of <span className="font-bold">[industry/niche]</span> and beyond.</p>
//           <p className="mb-8 leading-relaxed">Thank you for being part of our story.</p>
//           <p className="leading-relaxed"><span className="font-bold">Company Name</span> Team</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;

import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-slate-800  text-white mt-5">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">SustainX Energy</h2>
            <p className="mt-2">Innovation Driven</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">About Us</a>
            <a href="#" className="text-gray-300 hover:text-white">Services</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
        {/* <hr className="border-gray-700 my-4" /> */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;