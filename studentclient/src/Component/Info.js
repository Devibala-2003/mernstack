import './Info.css'
function Info(props){
    console.log(props.Ud);
    function deleteAUd(id){
        //console.log(id);
       props.getUdID(id);
    }
    return(
        <div>
            <table className="t1 t3">
                <thead>
                <tr className="t1 t3">
                    <th>USER NAME</th><th>USER MAIL ID</th><th>PRODUCT NAME</th><th>PRODUCT REVIEW</th><th>PRODUCT RATING</th><th>PRODUCT PHOTO</th><th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.Ud.map(s=>{

                  return(      
                <tr className="t2" key={s._id}>
                <td>{s.u_name}</td>
                <td>{s.emailid}</td>  
                <td>{s.p_name}</td>
                <td>{s.p_review}</td>
                 <td>{s.rating}</td>
                 <td>
                    <img src={`http://127.0.0.1:4000/${s.simage}`}></img>
                 </td>
                 <td><button type="button" className="btn btn-outline-danger  btn-sm"onClick={()=>deleteAUd(s._id)}>Delete</button></td>
                </tr>
                         ) })
            }
                </tbody>
            </table>
        </div>
    )
}
export default Info;