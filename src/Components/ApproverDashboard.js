import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ApproverDashBorad = () => {
    const [userData, setUserData] = useState({ name: "", faculty: "" });
    const [selectedFaculty, setSelectedFaculty] = useState("1");
    const [faculties, setFaculties] = useState([
        { id: "1", name: "Amit" },
        { id: "4", name: "Rohan" },
        { id: "6", name: "Raj" }
    ]
    );

    useEffect(() => {
        const token1 = localStorage.getItem("token");
        axios
            .get("http://127.0.0.1:8000/api/user/", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token1}`
                },
            })
            .then(async (response) => {
                console.log(response.data);
                if (response.data) {
                    //    setFaculties(response.data.results.filter((usr)=>{return usr.role=='faculty'}))
                    //    console.log(faculties)

                }
            })

            console.log(userData);
            
    }, [selectedFaculty]);


    const navigate = useNavigate();
    // function submit(){
    //     navigate("/studentdashborad");
    // }

    // useEffect(() => {
    //     //no need to come here if already logged in
    //     if (localStorage.getItem("token")) {
    //         navigate("studentdashboard");
    //     }
    // }, [navigate]);

    const submit = async () => {

        var jsonData = JSON.stringify(userData);
        console.log(jsonData);
        const token1 = localStorage.getItem("token")
        await axios
            .post("http://127.0.0.1:8000/api/project/group/", jsonData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token1}`
                },
            })
            .then(async (response) => {
                console.log(response.data);
                localStorage.setItem("groupid",response.data.id);
                
                    navigate("/invite")
                
            })

    };

    const handleChange = (event)=>{
        setSelectedFaculty(event.target.value);
        // setUserData((prevData) => {
        //     return { ...prevData, faculty: event.target.value };
        // });
        for(let i = 0;i<faculties.length;i++){
            if(faculties[i].name==event.target.value){
                setUserData((prevData) => {
                    return { ...prevData, faculty: faculties[i].id };
                });
            }
        }
    }


    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center px-6 mx-auto py-12 lg:py-24">
                <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight w-full text-center tracking-tight text-gray-900 md:text-2xl ">
                            Group Info
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
                                    Enter Group Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    required
                                    value={userData.name}
                                    onChange={(e) => {
                                        setUserData((prevData) => {
                                            return { ...prevData, name: e.target.value };
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Select Faculty
                                </label>
                                <select name="faculties" id="faculties" onChange={handleChange}>
                                    {faculties.map((faculty, index) => {
                                        return <option value={faculty.name} key={faculty.id}>{faculty.name}</option>
                                    })}
                                </select>
                                {/* <select
                                    type="text"
                                    name="faculty"
                                    id="faculty"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    required
                                    autoComplete="on"
                                    value={userData.faculty}
                                    onChange={(e) => {
                                        setUserData((prevData) => {
                                            return { ...prevData, faculty: e.target.value };
                                        });
                                    }}
                                /> */}
                            </div>

                            <button
                                type="submit"
                                onClick={() => submit()}
                                className="w-full text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Send For Approver
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproverDashBorad;
