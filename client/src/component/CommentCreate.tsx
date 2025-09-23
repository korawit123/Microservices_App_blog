import { useState } from "react";
import axios from "axios";


export default  (props: any) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event: any) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${props.postId}/comments`, {
            content
        });
        setContent('');

    }

    return (
        <>  
            <div>
                <form onSubmit={onSubmit}>
                    <div className="my-5">
                        <label>New Comment</label>
                        <input className="border rounded-[5px] w-full px-5" value={content} onChange={e => setContent(e.target.value)} type="text" />
                    </div>
                    <button  className=" border rounded-lg p-2 bg-blue-500 text-white">Submit</button>
                </form>
            </div>
        </>
    );
}