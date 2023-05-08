import axios from 'axios';
import React, { useState } from 'react';

function NewIdea() {
    const [str, setStr] = useState("");
    const [per, setper] = useState("");
    const[ideastr,setIdeastr]=useState({string : ""})
    const submit = async (e) => {
        e.preventDefault();
        setIdeastr({string:str})
        console.log(ideastr)
        await axios
        .post('http://192.168.43.202:8000/newidea/',{
            "idea_str": str
        })
          .then(function (response) {
            setper(response.data)
            console.log(per)
            console.log(JSON.stringify(response));
          })

    }

    

    const onChangeText = e => {
        e.preventDefault();
        // console.log(e.target.value)
        setStr(e.target.value);
      };
   
    return (
        <>
            <form >
                <label for="editor" class="sr-only">Publish post</label>
                <textarea id="editor" rows="8"  value={str}  onChange={onChangeText} class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:black focus:ring-0 dark:text-black dark:placeholder-black border-2 border-black" placeholder="Write an article..." ></textarea>
                {/* <input type='text' value={str}  onChange={onChangeText} aria-multiline={true}/> */}
                <button  onClick={submit} class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Add New Idea
                </button>
            </form>
        </>
    );
}

export default NewIdea;
