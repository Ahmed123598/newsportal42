import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-200 h-screen p-6 flex flex-col justify-between">
            <div>
                <div className="text-xl font-bold mb-10">LOGO</div>
                <ul className="space-y-4">
                    <li className="text-black font-semibold cursor-pointer">
                     <Link to='/dash'>DashBoard</Link> </li>
                    <li className="text-black cursor-pointer">
                        <Link to='/news'>Newss</Link>
                    </li>
                    <li className="text-black cursor-pointer">
                        
                        <Link to='/categories'>Categories</Link>
                        
                        </li>
                   
                    <li  className="text-black cursor-pointer">
                        <Link to='/' >website</Link></li>
                </ul>
            </div>
            <div className="text-black font-semibold cursor-pointer">
                
             <Link to='/' >Logout</Link>  
                </div>
        </div>
    );
};

export default Sidebar;