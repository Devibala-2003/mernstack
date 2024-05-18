import axios from "axios";

import Header from "./Component/Header";
import{useEffect, useState }from"react";

function App(){
    const[users,setUsers]=useState([])
    const[inUd,setInUd]=useState(false)
    useEffect(()=>{
        getUsers();
    },[])
    const getUsers=async()=>{
        const res=await axios.get("http://127.0.0.1:4000/users/:id")
        //console.log(res.data.students);
        setUsers(res.data.users);
    }
    //console.log(students);
    const insertToDB=async (users,file)=>{
        let formdata=new FormData();
        formdata.append("file",file)
        const res=await axios.post("http://127.0.0.1:4000/users",users)
        
        const res1=await axios.post("http://127.0.0.1:4000/users/upload",formdata)
        console.log(res.data.msg);
        console.log(res1.data.msg);
        if(res.data.msg==="Created"&&res1.data.msg==="uploaded")
             setInUd(true)
        getUsers();
    }
    const deleteUser=async(id)=>{
        //console.log(id);
        const res=await axios.delete(`http://127.0.0.1:4000/users/${id}`)
         console.log(res);
         getUsers();
         if(res.data.message==="Deleted")
         alert("User details Deleted");
    }
    return(

        <div>
            <Header Ud={users} inUd={inUd} insertToDB={insertToDB}getUdID={deleteUser}></Header>
           
        </div>
    )}
export default App;