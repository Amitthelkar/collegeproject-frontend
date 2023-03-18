import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
<div>
    <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Add Project</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/login/admin" className="mr-5 hover:text-gray-900">Admin Login</Link>
                <Link to="/login/student" className="mr-5 hover:text-gray-900">Student Login</Link>

            </nav>
           
        </div>
    </header>
</div>
);
};

export default Navbar;