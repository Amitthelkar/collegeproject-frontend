import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {  useNavigate, useNavigation } from 'react-router-dom';

function ConfirmGroup() {


    const [userData, setUserData] = useState({ groupid:"" })

    const navigate =useNavigate();

    const submit = async () => {


        var jsonData = JSON.stringify(userData);
        var groupid= userData.groupid;
        console.log(jsonData);
        console.log(groupid);
        const token1 = localStorage.getItem("token")
        await axios
            .post(`http://127.0.0.1:8000/api/project/group/${groupid}/conform-group/`, jsonData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token1}`
                },
            })
            .then(async (response) => {
                console.log(response.data);
                navigate("/studentdashboard");
            })
    
    };


    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center px-6 mx-auto py-12 lg:py-24">
                <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight w-full text-center tracking-tight text-gray-900 md:text-2xl ">
                            Invitation
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            action="#"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                console.log(userData);
                            }}
                        >
                            <div >
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Enter Group id
                                </label>
                                <input
                                    type="text"
                                    name="groupid"
                                    id="groupid"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    required
                                    value={userData.groupid}
                                    onChange={(e) => {
                                        setUserData((prevData) => {
                                            return { ...prevData, groupid: e.target.value };
                                        });
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={() => submit()}
                                className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Send Invitation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConfirmGroup;
