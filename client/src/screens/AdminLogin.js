import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch, useSelector } from 'react-redux'

import styled from "styled-components"
const AdminLogin = () => {

    const [password, setPassword] = useState("");
    const[show,setShow] = useState("password") 
    const [roll_no, setRoll_no] = useState("")
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password, roll_no }
        dispatch(loginUser(user))
    };

    const handleShow = ()=> {
        if(show === "password"){
            setShow("text")
        } else {
            setShow("password")
        }
    }

    return (
        <LoginContainer >
           
           <img src="https://images.pexels.com/photos/2167677/pexels-photo-2167677.jpeg?auto=compress&cs=tinysrgb&w=600" alt="login-image" className="loginImage" />
            <div className="login-container">                      
            <div className="companyName">
                    <h1 className="companyLogo">📙</h1>
                    <div>
                        <h1 >Hello Admin! </h1>
                        <h1 >Login to your Account!</h1>
                        </div>
                        </div>  
                         <p>ID Number</p>    
                        <input type="text" className="form-control"
                         placeholder="Enter Your ID Number" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
                  
                  <p>Password</p>    
                        <input type="text"  
                        className="form-control" type={show} placeholder="Enter Your Password"
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                     <p onClick={handleShow} className="showpassword">show password</p>
             



                    <button  onClick={() => PostData()}>
                        Login 
                    </button>
                    <div>you are a student?
                    <Link to="/login" >Login!</Link>
                    </div>
                    </div>
                    
               
 
        </LoginContainer>
    );
};



export default AdminLogin;

const LoginContainer=styled.div`
display:flex;
width:100%;
height:100vh;
.login-container{
    .companyName{
        margin-bottom:20px; 
        .companyLogo{
            font-size:80px;
        }
    }
    .showpassword{
        cursor:pointer;
        background:wheat;
        font-weight:bold;
        padding:5px;
        align-self:flex-start;
    }
width:60%;
display:flex;
flex-direction:column;
justify-content:center;
row-gap:10px;
padding-right:5rem;
padding-left:5rem;
p{
    margin-bottom:0;
}


}
.loginImage{
    width:40%;
}

button{
padding:10px;
border:none;
font-weight:bold;
background: rgb(30,136,229);
background: linear-gradient(90deg, rgba(30,136,229,1) 16%, rgba(252,69,69,1) 100%);

}
`

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { loginUser } from "../actions/user_action";
// import { useDispatch, useSelector } from 'react-redux'
// import AdminIMage from "../Images/admin2.jpg"

// const AdminLogin = () => {

//     const [password, setPassword] = useState("");
//     const[show,setShow] = useState("password") 
//     const [roll_no, setRoll_no] = useState("")
//     const dispatch = useDispatch()

//     const PostData = () => {
//         const user = { password, roll_no }
//         dispatch(loginUser(user))
//     };

//     const handleShow = ()=> {
//         if(show === "password"){
//             setShow("text")
//         } else {
//             setShow("password")
//         }
//     }

//     return (
//         <div >
//             <div className="LoginPage"></div>
//             <div className="login_container">
               
//                     <div className="col-md-6 m-auto" style={{opacity:1}}>
//                         <div style={{marginLeft:"37%"}}>
//                         <div id="circle"></div>
//                           <h3 className="LMS" style={{fontFamily:"sans-serif"}}>LMS</h3>
//                         </div>
//                         <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Libary
// Management System</p>


// <img src={AdminIMage} alt="StudentIMage" style={{height:"220px",width:"220px",borderRadius:"50%"}} />
// <br />
//                     <div style={{marginTop:"20px"}}>
//                         <input type="text" className="form-control" style={{height:"60px",borderRadius:"20px"}}
//                          placeholder="Employee Id" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
//                     </div>
//                     <br />
//                     <div>
//                         <input type="text"  style={{height:"60px",borderRadius:"20px"}}
//                         className="form-control" type={show} placeholder="Password"
//                          value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <i className="fas fa-eye"  onClick={() =>  handleShow()}></i>
//                     </div>
//                      <br />



//                     <button style={{width:"100%",height:"60px",color:"white",borderRadius:"20px",backgroundColor:"red"}} onClick={() => PostData()}>
//                         Login 
//                     </button>
//                     </div>
//                     <br />
//                     <Link to="/home"  style={{fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>Go To Home Page</Link>
               
//             </div>
//         </div>
//     );
// };



// export default AdminLogin;