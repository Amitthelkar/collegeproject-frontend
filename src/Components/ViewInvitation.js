import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewInvitation() {

    const [project, setProject] = useState("");
   const [projectid, setProjectid] = useState("");
   const [userData, setUserData] = useState({})

   const navigate=useNavigate();
    useEffect(() => {
        const token1 = localStorage.getItem("token");
        axios
            .get("http://127.0.0.1:8000/api/project/group-invite/", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token1}`
                },
            })
            .then(async (response) => {
         setProjectid(response.data.results[0].id)
         console.log(response.data.results[0].id)
                for (let i = 0; i < response.data.results.length; i++) {
                    if (response.data.results[i].student == localStorage.getItem("userid")) {
                        setProject(response.data.results[i].student);
                        console.log(response.data.results[i].student)
                    }
                }
            })

    }, []);

    const Accept =async () => {
        var jsonData = JSON.stringify(userData);
        console.log(jsonData);
        const token1 = localStorage.getItem("token")
        await axios
            .post(`http://127.0.0.1:8000/api/project/group-invite/${projectid}/accept/`, jsonData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token1}`
                },
            })
            .then(async (response) => {
                console.log(response.data);
               
                
            })
        

    };

    const Reject =async () => {
        var jsonData = JSON.stringify(userData);
        console.log(jsonData);
        const token1 = localStorage.getItem("token")
        await axios
            .post(`http://127.0.0.1:8000/api/project/group-invite/${projectid}/reject/`, jsonData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token1}`
                },
            })
            .then(async (response) => {
                console.log(response.data);
             
            })
        

    };



    return (
        <div>

            <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[35px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-3 md:w-1/2 xl:w-1/2">
                            <div className="mb-10 overflow-hidden rounded-lg bg-white">
                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h1 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                        My Invite</h1>
                                    <table className="table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2">Project Name</th>
                                                <th className="px-4 py-2">Accept</th>
                                                <th className="px-4 py-2">Reject</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-gray-200 border border-gray-300 " >

                                                <td className="px-4 py-2 border-r-2 border-gray-300">
                                                    {project}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <button
                                                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                                        type="button"
                                                        onClick={() => {
                                                            Accept();
                                                        }}
                                                    >
                                                        Accept

                                                    </button></td>
                                                <td className="border px-4 py-2">
                                                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                                     type="button"
                                                        onClick={() => {
                                                            Reject();
                                                        }}
                                                    >
                                                        Reject
                                                    </button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ViewInvitation;
