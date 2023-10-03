import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components";
import image from "../Images/Libary.jpg"
import StudentIMage from "../Images/student4.jpg"
import AdminIMage from "../Images/admin2.jpg"

const Home = () => {
    return (

        <OuterContainer className="HomePage"  >

            <Wrapper className="col-md-6 m-auto" style={{display:"flex" ,backgroundColor:"white",padding:"5%"}}>
                <div className="card">
                   <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899113.jpg?size=626&ext=jpg&ga=GA1.1.116568541.1690626650&semt=sph" alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                   <br />
                   <Link className="link_class" to="/adminLogin"> <h3 style={{fontFamily:"Oswald"}}>Signin as  Admin</h3></Link>
                </div>
                <div className="card" style={{marginLeft:"15%"}}>
                   <img src="https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg?size=626&ext=jpg&ga=GA1.1.116568541.1690626650&semt=sph" alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                   <br />
                   <Link className="link_class" to="/login"> <h3 style={{fontFamily:"Oswald"}}>Signin as  Student</h3></Link>  
                </div>
            </Wrapper>
           
            
        </OuterContainer>
    );
};

export default Home;

const OuterContainer=styled.div`

`
const Wrapper=styled.div`


`
