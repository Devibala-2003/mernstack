import {BrowserRouter,Routes,Route,Link}from 'react-router-dom';

import './Header.css'
import Home from './Home';
import Info from './Info';
import EntryForm from './EntryForm';

function Header(props){
  //  console.log(props.stud);
    function insertUser(users,file){
       // console.log(students)
        props.insertToDB(users,file)
    }
    function getUdID(id){
        //console.log(id);
    props.getUdID(id)
    }

    return(
        <BrowserRouter>
         <div>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/users">Product Review Details</Link></li>
                <li><Link to="/usersForm"> User Entry Form</Link></li>
            </ul>
            <Routes>
             
           <Route exact path='/'element={<Home />}></Route>
           <Route exact path='/users'element={<Info Ud={props.Ud} getUdID={getUdID}/>}></Route>
           <Route exact path='/usersForm'element={<EntryForm inUd={props.inUd} setUser={insertUser}/>}></Route>

        
            </Routes>
         </div>





        </BrowserRouter>
    
    )
}

export default Header;
