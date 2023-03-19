import { useState } from "react";
import { Link } from "react-router-dom";


export default function FacultyDashborad() {
    const [data, setData] = useState([])

    return (
        <>

            <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[35px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-3 md:w-1/2 xl:w-1/2">
                            <div className="mb-10 overflow-hidden rounded-lg bg-white">

                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h1 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                        Rejected Project</h1>
                                    <table class="table-auto">
                                        <thead>
                                            <tr>
                                                <th class="px-4 py-2">Project Name</th>
                                                <th class="px-4 py-2">View</th>
                                                <th class="px-4 py-2">Give Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                data.map((item, i) =>
                                                    <tr>
                                                        <td class="border px-4 py-2">{item}</td>
                                                        <td class="border px-4 py-2"><button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                            View Project
                                                        </button></td>
                                                        <td class="border px-4 py-2">
                                                            <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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
                                    <h1 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                        Project list for review</h1>
                                    <table class="table-auto">
                                        <thead>
                                            <tr>
                                                <th class="px-4 py-2">Project Name</th>
                                                <th class="px-4 py-2">View</th>
                                                <th class="px-4 py-2">Give Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                data.map((item, i) =>
                                                    <tr>
                                                        <td class="border px-4 py-2">{item}</td>
                                                        <td class="border px-4 py-2"><button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                            View Project
                                                        </button></td>
                                                        <td class="border px-4 py-2">
                                                            <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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
