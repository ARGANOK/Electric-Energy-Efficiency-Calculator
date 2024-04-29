import logo from '../images/Logo-2.png'
// import LoginPage from './Login/Login.jsx';
import { useState } from 'react';
// import MainLoginPage from './Login/Login.jsx';
// import MainCalculator from './Calculator/Calculator.jsx'
import { Link } from 'react-router-dom';

export default function navigationBar(){
    const [clickLogin , setLogin] = useState(false);
    function takeToLogin(){
        setLogin(true);                                                                                                       
        console.log("Clicked on Login")
        // window.location.href = {LoginPage} ;
    }
    return (
        <>
            {/* <p className=' text-white'>{clickLogin}</p> */}
        <div className='flex justify-between pr-3 gap-4 mt-[-15px]  mb-5 '>
            <div className='flex justify-center items-center ml-[-2%] mt-3 '>
                <img src={logo} alt="" className='h-[8rem] mt-[-10px]' />
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex gap-4 text-white font-medium text-[1.1rem] drop-shadow-lg'>
                    <Link to="/">Home</Link>
                    <Link to="/DashBoard">Dashboard</Link>
                    <Link to="/Calculator">Calculator</Link>
                    <Link to="/Aboutus">About us</Link>
                </ul>
            </div>
            <div className='flex gap-5 items-center ' id='login-signup'>
            {!clickLogin ? (
                        <>
                            <button className="text-[2rem] text-green-400 drop-shadow-lg">
                                <Link to="/Login" onClick={takeToLogin}>Log in</Link>
                            </button>
                            <button className="text-[1.8rem] text-white drop-shadow-lg">Sign Up</button>
                        </>
                    ) : (
                        <p>Welcome, User!</p> // Render something else after login
                    )}
            </div>
        </div>
        </>
    );
}
