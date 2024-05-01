import React from 'react';
import NavigationBar from './navBar';
import Footer from './Footer';
import aside from '../images/Foraside.jpg'
import './DashBoard.css'
import { Link } from 'react-router-dom';
import BackgroundImage from '../images/nature-background.gif'; // Import the background image
import Image2 from '../images/01_JE_03_2022_Fixed_Rates_Blog_Image_C-1080x590.jpg'
import Image3 from '../images/essay-on-save-electricity-01-1160x725.jpg'



const Dashboard = () => {
  return (
    // <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize:'cover' , height:`100vh`}}>
    <div className=''>
    <NavigationBar/>
    <div className="flex h-screen m-5 p-5 gap-5 ">
            {/* Aside Section */}
            <div className="w-1/4 bg-blue-200 relative rounded-lg">
            <a href="https://www.drivingthefuture.com/new-electricservice-upgrade" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {/* Image */}
                    <img src={aside} alt="Aside" className="w-full h-full object-cover" />
                    {/* Hover Overlay */}
                    {/* <div className='absolute inset-0 flex items-center justify-center text-white hover:opacity-0 '> */}
                        {/* <p>New Electric Service/Upgrade</p> */}
                    {/* </div> */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                        <p>To read full click on image</p>
                    </div>
                </a>

            </div>

            {/* Main Section */}
            <div className="flex flex-col flex-grow gap-5">
                {/* Top Section */}
                <div className="flex-grow bg-gray-200 relative rounded-lg">
                    <img src={Image2} alt="Top" className="w-full h-full object-cover" />
                    <a href='https://justenergy.com/blog/category/energy-savings/'>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                        <p>To read full click on image</p>
                    </div>
                    </a>
                </div>
                
                {/* Bottom Section */}
                <div className="flex-grow bg-gray-300 relative rounded-lg gap-5">
                    <img src={Image3} alt="Bottom" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                        <p>To read full click on image</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Dashboard;