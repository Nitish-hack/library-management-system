import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch, useSelector } from 'react-redux'

import styled from "styled-components"
const Login = () => {

    const [password, setPassword] = useState("");
    const [show, setShow] = useState("password")
    const [roll_no, setRoll_no] = useState("")
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password, roll_no }
        dispatch(loginUser(user));

    };

    const handleShow = () => {
        if (show === "password") {
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
                        <h1 >Hello Student! </h1>
                        <h1 >Login to your Account!</h1>
                    </div>
                </div>
                <p>Roll Number</p>
                <input type="text" className="form-control"
                    placeholder="Enter Your Roll Number" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />

                <p>Password</p>
                <input type="text"
                    className="form-control" type={show} placeholder="Enter Your Password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <p onClick={handleShow} className="showpassword">show password</p>




                <button onClick={() => PostData()}>
                    Login
                </button>
                <div>Don't have an Account?
                    <Link to="/register" >Register!</Link>
                </div>
            </div>



        </LoginContainer>
    );
};



export default Login;

const LoginContainer = styled.div`
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
        background:yellow;
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
background:rgb(30,136,229);
background: linear-gradient(90deg, rgba(30,136,229,1) 16%, rgba(252,69,69,1) 100%);

}
`