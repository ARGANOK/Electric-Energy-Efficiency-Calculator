import logo from '../images/Logo-2.png'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Login from '../images/Login1.png'

export default function navigationBar(){
    const [clickLogin , setLogin] = useState(false);
    const navigate = useNavigate();
    function takeToLogin(){                                                                                                      
        navigate("/Login")
    }
    return (
        <>
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
                                <img src={Login} alt="" className='h-[50px] bg-white rounded-full border-white border-2' onClick={takeToLogin}/>
                            </button>
                        </>
                    ) : (
                        <p className='text-white p-4 text-xl'>Welcome, User!</p> // Render something else after login
                    )}
            </div>
        </div>
        </>
    );
}
