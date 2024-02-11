// react js
import { useEffect , useState } from "react";
import NotePage from "./NotePage.jsx";

// auth
import {auth} from "../fb_setup/config.js";
import { logOut } from "../fb_setup/auth.js";

import {useNavigate} from "react-router-dom";
// crud
import { getData , addData , deleteData} from "../fb_setup/store.js";

import Loading from "./Loading.jsx";
function Home(){
    const navigate = useNavigate();
    // toggle to note pad
    const [toggle, setToggle] = useState(false);
    const [searchData,setSearchData] = useState("");
    const [loading, setLoading] = useState(false);
    // data
    const [data , setData] = useState([]);

    // check if the user is authenticated
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                setIsAuth(true);
            }
            else{
                setIsAuth(false);
                navigate("/auth");
            }
        })
    } , [])

    function handleData(){
        setLoading(true);
        getData(auth?.currentUser?.uid).then(v => {
            setData(v);
            setLoading(false);
        });
    }
    // get data from store.js (database)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                handleData();
            }
            
        })
        
    }, [auth?.currentUser?.uid])
    

    

    const [selectData, setSelectData] = useState({});

    if(isAuth){
        return (
            <div>
                {loading && <Loading />}
                {/* render Note page if toggle is true  */}
                { toggle ? <NotePage data={selectData} /> : (
                <div className="home-container">
                    {/* top bar */}
                    <div className="topBar">
                        <h1>My Notes</h1>
                        {/* signout */}
                        <div>
                            <button className="account-btn" title={auth?.currentUser?.email} >
                                <i className="fa-solid fa-user"></i>
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="signout-btn" title="logout" onClick={() => {
                                logOut();
                            }}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </button>
                        </div>
                    </div>
                    <br /><br />
                    {/* search box */}
                    <div className="search">
                        <input type="text" className="search-bar" placeholder="search by title..." onInput={(e) => setSearchData(e.target.value)} />
                    </div>
                    <br /><br />
                    {/* all notes  */}
                    
                    {data.map( (v , i) => 
                        (v.title.toLowerCase()).includes(searchData) &&
                        <div className="notes" key={i}>

                            {/* title on box */}
                            <h3 className="title-on-box">{v.title}</h3>
                            <hr /><br />

                            {/* content on box  */}
                            <p className="content-on-box">{v.content.substring(0 , 50)+"..."}</p>

                            {/* open button  */}
                            <button className="read-btn" title="open" onClick={() => {
                                setSelectData(v)
                                setToggle(!toggle)
                            }}>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </button>
                            
                            {/* delete button */}
                            <button className="del-btn" title="delete" onClick={() => {
                                deleteData(v.id).then(handleData);
                                
                            }}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    )}
                    {/* add button  */}
                    <button className="add-btn" title="add" onClick={() => {
                        addData(auth?.currentUser?.uid);
                        getData(auth?.currentUser?.uid).then(handleData);
                    }}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div> )
                }
            </div>  
        ) 
    }
}
export default Home;