import { useState } from "react";
import axios from "axios";
import { serialize } from "v8";



export default function PostCreate() {
    const [title, setTitle] = useState('')

    const onSubmit = async (event: any) => {
        event.preventDefault();
        await axios.post('http://localhost:32221/posts', {
            title
        });
        setTitle('')
    }

    return (
    <>
    <div className="mb-5">
        <form onSubmit={onSubmit}>
            <div className="mb-5">
                <label htmlFor="">Title</label> <br />
                <input value={title} onChange={e => setTitle(e.target.value)} className=" px-4 form-control border-1 rounded-lg w-full" type="text" />
            </div>
            <button className="btn btn-primary border rounded-lg p-2 bg-blue-500 text-white">Submit</button>
        </form>
    </div>
    </>
    );
    
}