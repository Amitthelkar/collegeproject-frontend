import React from 'react';

function NewIdea() {
    return (
        <>
            <form>
                 <label for="editor" class="sr-only">Publish post</label>
                    <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:black focus:ring-0 dark:text-black dark:placeholder-black border-2 border-black" placeholder="Write an article..." required></textarea>
                
                <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                 Add New Idea
                </button>
            </form>

            
        </>
    );
}

export default NewIdea;
