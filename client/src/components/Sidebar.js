import React from 'react';
import { Link } from "react-router-dom"
import { logoutUser } from "../actions/user_action"
import { useDispatch, useSelector } from 'react-redux';
//import {userProfile} from "../actions/user_action"
import styled from "styled-components";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.userLoginReducer);
  return (

    <Wrapper>
      <SidebarContainer>
        <Link to="/dashboard"><i className="fas fa-home "></i> Home </Link>
        {/* <Link to="/dashboard/messages"> <i className="fab fa-facebook-messenger "></i> Messages </Link> */}
        <Link to="/dashboard/allBook"><i className="fas fa-address-book "></i> All Books </Link>
        {currentUser.user.isAdmin ? (
          <>
            <Link to="/dashboard/addBook"> <i className="fas fa-book "></i> Add Book </Link>
            <Link to="/dashboard/manageStudent"><i className="fas fa-users "></i> Manage Students </Link>
            <Link to="/dashboard/stuReqIssue"><i className="fas fa-registered "></i> Issue Request </Link>
            <Link to="/dashboard/Recommandation"><i className="fas fa-book "></i> Book Recommendations </Link>
            <Link to="/dashboard/allissuedBook"> <i className="fas fa-book "></i> All Issued Books </Link>
            <Link to="/dashboard/issue_return"><i className="fas fa-book "></i> Today's Issued Book </Link>
            <Link to="/dashboard/returnBook"> <i className="fas fa-book "></i> Today's Return Books </Link>
            {/* <Link to="/dashboard/addEmployee"> <i className="fas fa-users "></i> Add Employee </Link> */}
          </>
        ) : (
          <>
            {/* <Link to="/dashboard/messages"><i className="fas fa-users"></i>  Borrowed Book </Link> */}
            <Link to="/dashboard/RecomBook"><i className="fas fa-registered "> </i> Recommend Book </Link>
            <Link to="/dashboard/issuedBook"><i className="fas fa-book "></i> Currently Issued Book </Link>
          </>
        )}
        <Link onClick={() => dispatch(logoutUser())} className="logoutbtn"><i className="fas fa-power-off "></i> Logout </Link>
      </SidebarContainer>
    </Wrapper>

    // <div style={{ marginTop: "10%" }}>
    //   <ul>
    //     <li className="list_item"> <i className="fas fa-home "></i> <Link to="/dashboard/"
    //       style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Home </Link>  </li>
    //     <hr style={{ color: "white" }} />
    //     <li> <i className="fab fa-facebook-messenger "></i>
    //       <Link to="/dashboard/messages" style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Messages </Link>  </li>
    //     <hr style={{ color: "white" }} />
    //     <li> <i className="fas fa-address-book "></i>
    //       <Link to="/dashboard/allBook" style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> All Books </Link>  </li>
    //     <hr style={{ color: "white" }} />


    //     {currentUser.user.isAdmin ? (
    //       <>
    //         <li> <i className="fas fa-book "></i>
    //           <Link to="/dashboard/addBook" style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Add Book </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-users "></i>
    //           <Link to="/dashboard/manageStudent" style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Manage Students </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-registered "></i>
    //           <Link to="/dashboard/stuReqIssue" style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Issue Request </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-book "></i> <Link to="/dashboard/Recommandation"
    //           style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Book Recommandation </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-book "></i> <Link to="/dashboard/allissuedBook"
    //           style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> All Issued Book </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-book "></i> <Link to="/dashboard/issue_return"
    //           style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Today Issue Book </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-book "></i> <Link to="/dashboard/returnBook"
    //           style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Today Return Book </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-users "></i> <Link to="/dashboard/addEmployee"
    //           style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Add Employee </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //       </>

    //     ) : (

    //       <>
    //         {/* <li> <i className="fas fa-users"></i> 
    //                 <Link  to="/dashboard/manageStudent"   style={{textDecoration:"none",color:"#f1f1f1",fontSize:"20px",marginLeft:"5px"}}> Borrowed Book</Link>  </li> */}
    //         {/* <hr style={{color:"white"}} /> */}
    //         <li> <i className="fas fa-registered "></i>
    //           <Link to="/dashboard/RecomBook" style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Recommend Book </Link>  </li>
    //         <hr style={{ color: "white" }} />
    //         <li> <i className="fas fa-book "></i> <Link to="/dashboard/issuedBook"
    //           style={{ textDecoration: "none", color: "#f1f1f1", fontSize: "20px", marginLeft: "5px", fontFamily: "Oswald" }}> Curently issued Book</Link>  </li>
    //         <hr style={{ color: "white" }} />
    //       </>
    //     )}


    //     <li onClick={() => dispatch(logoutUser())}> <i className="fas fa-power-off "></i>
    //       <span style={{ fontSize: "20px", color: "#fff", marginLeft: "2px", fontFamily: "Oswald" }}> Logout </span>    </li>
    //   </ul>
    // </div>
  );
};

export default Sidebar;

const Wrapper = styled.div`
width:20%;
padding:20px;
`
const SidebarContainer = styled.div`
  background:aliceblue;
  display:flex;
  flex-direction:column;
  row-gap:10px;
padding:30px 20px;
border-radius:20px;
min-height:940px;
background: #42A5F5;

  a{
    padding:10px;
    border-radius:5px;
     color:white;
     text-decoration:none;
       font-weight:bold;
       background:#f6fbff54;

     &:hover{
      background:white;
       color:#42A5F5;
     }
  }
`