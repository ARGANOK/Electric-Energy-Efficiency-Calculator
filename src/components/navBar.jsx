    import logo from '../images/Logo-2.png'
    import LoginPage from './Login/Login.jsx';
    // import { Link } from 'react-router-dom';
    // import { useState } from 'react';

    export default function navigationBar(){
        // const [clickLogin , setLogin] = useState("Not Clicked Yet");
        function takeToLogin(){
            window.location.href = {LoginPage} ;
            // setLogin("You Clicked Login Button")
        }
        return (
            <>
                {/* <p className=' text-white'>{clickLogin}</p> */}
            <div className='flex justify-between pr-3 gap-4 mt-[-20px] '>
                <div className='flex justify-center items-center ml-[-2%] mt-3 '>
                    <img src={logo} alt="" className='h-[8rem]  ' />
                </div>
                <div className='flex justify-center items-center'>
                    <ul className='flex gap-4 text-white font-medium text-[1.1rem] drop-shadow-lg'>
                        <li>Home</li>
                        <li>DashBoard</li>
                        <li>Calculator</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className='flex gap-5 items-center '>
                    {/* <a src="./Login/Login.html"> */}
                        <button className=' text-[2rem] text-green-400 drop-shadow-lg' onClick={takeToLogin} >Log in </button> 
                    {/* </a> */}
                    <button className=' text-[1.8rem] text-white drop-shadow-lg '>Sign-Up</button>
                </div>
            </div>
            </>
        );
    }