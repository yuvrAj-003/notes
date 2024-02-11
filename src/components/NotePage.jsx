import "../styles.css";
import { useState } from "react";
import { updateData } from "../fb_setup/store";
import Loading from "./Loading";


function NotePage({data}){
    const [titleValue, setTitleValue] = useState(data.title);
    const [contentValue , setContentValue] = useState(data.content);
    const [loading, setLoading] = useState(false);
    function handleUpdate(){
        setLoading(true);
        updateData(data.id , titleValue, contentValue).then(() => {
            setLoading(false);
            window.location.reload(false);
        })
    }
    return (
        <div>
            {/* render home page is saved is true (temp) */}
            {loading && <Loading />}
            <div className="note-container">
                {/* top barr  */}
                <div className="topBar">
                    <input type="text" className="title-bar" value={titleValue} maxLength="16" onInput={(e) => {
                        setTitleValue(e.target.value)
                    }} />
                    {/* save button */}
                    <button className="save-btn" title="save" onClick={handleUpdate}>
                        <i className="fa-solid fa-floppy-disk"></i>
                    </button>
                </div>
                <br />
                {/* note area  */}
                <textarea className="note-box" defaultValue={contentValue} onInput={(e) => setContentValue(e.target.value)}></textarea>
            </div>
        </div> 
    );

}

export default NotePage;