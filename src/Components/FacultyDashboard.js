import { useEffect, useState } from "react";

export default function FacultyDashboard() {

    // const options = {} // these options accept all native `fetch` options
    // // the last argument below [] means it will fire onMount (GET by default)
    // // const { loading, error, data = [] } = useFetch('http://192.168.43.202:8000/api/projects/state/approved', options, [])
    // // const { loadingreject, errorreject, rejected = [] } = useFetch('http://192.168.43.202:8000/api/projects/state/rejected', options, [])

    // const [data, setData] = useState([])
    // const { get, post, response, loading, error } = useFetch('http://127.0.0.1:8000/api/projects/state/approved')
    // const [reject, setReject] = useState([])
    // const { getreject, postreject, responsereject, loadingreject, errorreject } = useFetch('http://127.0.0.1:8000/api/projects/state/rejected')

    // useEffect(() => {
    //     loadInitialTodos()
    //     loadInitialRejected()
    //     console.log(data)
    //     // console.log(reject)
    // }, []) // componentDidMount

    // async function loadInitialTodos() {
    //     const initialTodos = await get()
    //     if (response.ok) setData(initialTodos)
    // }

    // async function loadInitialRejected() {
    //     const initialRejected = await getreject()
    //     if (responsereject.ok) setReject(initialRejected)
    // }

    const [approved, setApproved] = useState([]);
    const [rejected, setRejected] = useState([]);

    useEffect(() => {
        const getapp = async () => {
            const resapproved = await fetch("http://127.0.0.1:8000/api/projects/state/approved/")
            const resappo = await resapproved.json();
            setApproved(await resappo);
        }
        getapp();
    }, []);

    useEffect(() => {
        const getrej = async () => {
            const resrejected = await fetch("http://127.0.0.1:8000/api/projects/state/rejected/")
            const resreje = await resrejected.json();
            setRejected(await resreje);
        }
        getrej();
    }, []);

    return (
        <>
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
                                                <th className="px-4 py-2">Give Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                approved.map((todo, i) => (
                                                    <tr
                                                        key={i}
                                                        className="bg-gray-200 border border-gray-300 "
                                                    >
                                                        <td className="px-4 py-2 border-r-2 border-gray-300">
                                                            {JSON.stringify(todo.title)}
                                                        </td>
                                                        <td className="border px-4 py-2"><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                            view
                                                        </button></td>
                                                        <td className="border px-4 py-2">
                                                            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                                Add
                                                            </button></td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                            <div className="mb-10 overflow-hidden rounded-lg bg-white">
                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h1 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                        Rejected Project</h1>
                                    <table className="table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2">Project Name</th>
                                                <th className="px-4 py-2">View</th>
                                                <th className="px-4 py-2">Give Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                rejected.map((item, i) => (
                                                    <tr
                                                        key={i}
                                                        className="bg-gray-200 border border-gray-300 "
                                                    >
                                                        {/* <div key={i}>{todo.title}</div> */}
                                                        <td className="px-4 py-2 border-r-2 border-gray-300">
                                                            {JSON.stringify(item.title)}
                                                        </td>
                                                        <td className="border px-4 py-2"><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                            view
                                                        </button></td>
                                                        <td className="border px-4 py-2">
                                                            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                                                Add
                                                            </button></td>
                                                    </tr>
                                                ))}
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
