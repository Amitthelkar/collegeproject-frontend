import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState({ token: "" });

    return (
        <div>
            <header className="text-gray-600 body-font shadow-lg">
                <div className="container flex p-4 flex-col md:flex-row items-center justify-between">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl">Add Project</span>
                        </Link>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>

                        </nav>

                    </div>
                    {!(
                        localStorage.getItem("token")
                    ) && (
                            <nav className="flex flex-wrap space-x-12 items-center text-base justify-center">
                                <Link to="/login/student" className=" hover:text-gray-900">
                                    Login
                                </Link>

                            </nav>
                        )}

                    {(localStorage.getItem("token")) && (
                        <button
                            type="button"
                            onClick={async () => {
                                setUserToken({ token: localStorage.getItem("token") })
                                console.log(JSON.stringify(userToken));
                                await axios
                                    .post("http://192.168.43.202:8000/api/logout/", JSON.stringify(userToken), {
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    })
                                    .then((response) => {
                                        console.log(response.data.status)
                                        toast.success(response.data.messsageIfAny, {
                                            position: "top-center",
                                            autoClose: 2000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                        localStorage.removeItem("token");
                                        navigate("/login/student");

                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });

                            }}
                            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        >
                            Logout
                        </button>
                    )}

                </div>
            </header>
        </div>
    );
};

export default Navbar;