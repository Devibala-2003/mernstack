import'./EntryForm.css';
import React,{useState} from'react'
function EntryForm(props){


    let[sUName,setSUName]=useState('');
    let[sEmail,setSEmail]=useState('');
    let[sPName,setSPName]=useState('');
    let[sPReview,setSPReview]=useState('');
    
    let[sRating,setSRating]=useState('');
    let[sImageFile,setSImageFile]=useState([]);
    let[sImage,setSImage]=useState([]);
    let[inUd,setInUd]=useState(false);
    function sUNameHandle(event){
        //console.log(event.target.value);
        setSUName(event.target.value)
        setInUd(false)
    }
    function sEmailHandle(event){
        //console.log(event.target.value);
        setSEmail(event.target.value)
    }
    function sPNameHandle(event){
        //console.log(event.target.value);
        setSPName(event.target.value)

    }
    function sPReviewHandle(event){
        //console.log(event.target.value);
        setSPReview(event.target.value)

    }
    
    function sRatingHandle(event){
       // console.log(event.target.value);
        setSRating(event.target.value)
    }
    function  sImageHandle(event){
        setSImageFile(event.target.files[0])
        setSImage(event.target.value)
    }

    function saveUsers(event){
       event.preventDefault();
       let users={
        u_name:sUName,
        emailid:sEmail,
        p_name:sPName,
        p_review:sPReview,
        rating:sRating,
        simage:sUName+sImageFile.name
       }
       //console.log(students.simage);
       props.setUser(users,sImageFile)
       setSPName('');
       setSUName('');
       setSPReview('');
       setSEmail('');
       setSRating('');
       setSImageFile([]);setSImage("")
       setInUd(props.inUd)
    //console.log(props.instud)
             
       
    }
    return(
        <div>
        <form onSubmit={saveUsers} >
            <div className="ef border border-primary rounded">
                <fieldset>
                    <legend>User Entry Form</legend>

                    <div className="input-group pad">
                        <span className="input-group-text">User Name</span>
                        <input type="text"aria-label="User name"
                        id='sUName'
                        value={sUName}
                        onChange={sUNameHandle}/>
                    </div>
                    <div className="input-group pad">
                        <span className="input-group-text">User Mail ID</span>
                        <input type="text"aria-label="User mailid"
                        id='sEmail'
                        value={sEmail}
                        onChange={sEmailHandle}/>
                    </div>
                    <div className="input-group pad">
                        <span className="input-group-text">Product Name</span>
                        <input type="text"aria-label="Product name"
                        id='sPName'
                        value={sPName}
                        onChange={sPNameHandle}/>
                    </div>
                    <div className="input-group pad">
                        <span className="input-group-text">Product Review</span>
                        <input type="text"aria-label="Product Review"
                        id='sPReview'
                        value={sPReview}
                        onChange={sPReviewHandle}/>
                    </div>
                    
                    <div className="input-group pad">
                        <span className="input-group-text">Rating</span>
                        <input type="text"aria-label="Rating"
                        id='sRating'
                        value={sRating}
                        onChange={sRatingHandle}/>
                    </div>
                    <div className="input-group pad">
                        <span className="input-group-text">Product Photo</span>
                        <input type="file"aria-label="Product image"
                        id='sImage'
                        value={sImage}

                        onChange={sImageHandle}/>
                    </div>
                    <div className='btdiv'>
                        <button className='btn btn-primary me-md-2' type='clear'>Clear</button>
                        <button className='btn btn-primary me-md-2' type='clear'>Submit</button>
                    </div>
                </fieldset>
            </div>
        </form>{
            inUd &&
            <div className='msg'>
                <label>User Inserted</label>
        
        </div>}
        </div>
    )
}

export default EntryForm;