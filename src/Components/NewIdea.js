import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewIdea() {

    const [str, setStr] = useState("");
    const [per, setPer] = useState("");

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        await axios.get('http://127.0.0.1:8000/newidea/' + str)
            .then((response) => {
                setPer(response.data)
                console.log(per)
                console.log(JSON.stringify(response));
            })

    }


    function sendApprover(e) {
        e.preventDefault();
        console.log("from send approver")
        navigate("/approverdashboard")
    }



    const onChangeText = e => {
        e.preventDefault();
        // console.log(e.target.value)
        setStr(e.target.value);
    };

    return (
        <>
            <form >
                <label htmlFor="editor" className="sr-only">Publish post</label>
                <textarea id="editor" rows="8" value={str} onChange={onChangeText} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:black focus:ring-0 dark:text-black dark:placeholder-black border-2 border-black" placeholder="Write an article..." ></textarea>
                {/* <input type='text' value={str}  onChange={onChangeText} aria-multiline={true}/> */}
                <button onClick={submit} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-800 rounded-lg  hover:bg-slate-800">
                    Add New Idea
                </button>
                <br></br>
                <br></br>
                <div>{per}</div>

                <br></br>
                <button onClick={sendApprover} style={{ display: per ? "flex" : "none" }} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-800 rounded-lg  hover:bg-slate-800">
                    Send for approval</button>
            </form>
        </>
    );
}

export default NewIdea;
