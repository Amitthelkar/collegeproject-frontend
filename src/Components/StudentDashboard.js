import { useState } from "react";
import { Link } from "react-router-dom";


export default function StudentDashboard() {

    const [userData, setUserData] = useState([
        { projectname: "Bank Token System", requiredchange: "Add Button to delete Token" },
        { projectname: "Library Management system", requiredchange: "Give List Of Famous Books" }
    ]
    );

    const [rejectdata, setRejectData] = useState([
        { projectname: "Vehicle Management System", requiredchange: "jwdbqehdbhuq" },
        // { projectname: "", requiredchange: "jwdbqeh" }
        //set data from api here
    ]
    );


    return (
        <>
            <div className="flex w-3/3 items-center  space-x-3" style={{ display: "flex", justifyContent: "center" }}>
                <Link
                    to="/approverdashboard"
                    style={{ display: "flex", justifyContent: "center" }}
                    className="flex rounded-lg items-center bg-gray-100 p-8 space-x-3 w-1/2 hover:shadow-lg "
                >
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                        Make Group
                    </h2>
                    <div className=" text-indigo-500 inline-flex items-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>

                <Link
                    to="/invite"
                    style={{ display: "flex", justifyContent: "center" }}
                    className="flex rounded-lg items-center bg-gray-100 p-8 space-x-3 w-1/2 hover:shadow-lg "
                >
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                        Send Invitation
                    </h2>
                    <div className=" text-indigo-500 inline-flex items-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>


                <Link
                    to="/confirmgrp"
                    style={{ display: "flex", justifyContent: "center" }}
                    className="flex rounded-lg items-center bg-gray-100 p-8 space-x-3 w-1/2 hover:shadow-lg "
                >
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                        Confirm Group
                    </h2>
                    <div className=" text-indigo-500 inline-flex items-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>
                
                <Link
                    to="/createproject"
                    style={{ display: "flex", justifyContent: "center" }}
                    className="flex rounded-lg items-center bg-gray-100 p-8 space-x-3 w-1/2 hover:shadow-lg "
                >
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                        Create Project
                    </h2>
                    <div className=" text-indigo-500 inline-flex items-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>

            </div>
            <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[35px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-3 md:w-1/2 xl:w-1/2">
                            <div className="mb-10 overflow-hidden rounded-lg bg-white">
                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h1 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                        Approved Project</h1>
                                    <table className="table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2">Project Name</th>
                                                <th className="px-4 py-2">View</th>
                                                <th className="px-4 py-2">Add Code</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userData.map((item, i) =>
                                                    <tr key={i}>
                                                        <td className="border px-4 py-2">{item.projectname}</td>
                                                        <td className="border px-4 py-2"><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                            View Project
                                                        </button></td>
                                                        <td className="border px-4 py-2">
                                                            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                                Add
                                                            </button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                            <div className="mb-10 overflow-hidden rounded-lg bg-white">
                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h1 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">Rejected Project</h1>
                                    <table className="table-auto">
                                        <thead>
                                            <tr >
                                                <th className="px-4 py-2">Project Name</th>
                                                <th className="px-4 py-2">Required Changes</th>
                                                <th className="px-4 py-2">Add New Project</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                rejectdata.map((item, i) =>
                                                    <tr key={i}>
                                                        <td className="border px-4 py-2">{item.projectname}</td>
                                                        <td className="border px-4 py-2">{item.requiredchange}</td>
                                                        <td className="border px-4 py-2">
                                                            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                                Add
                                                            </button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
