import React, { useState } from 'react'
import styled from "styled-components"
import image1 from "../Images/landing.jpg"

const Landing = () => {
  const [isopen, setOpen] = useState(false);
  return (
    <Wrapper>
      <FirstContainer>
        <h1>Library Management System</h1>
        <p>Welcome to Library Management System built by Nitish Kumar Jha , your one-stop solution for efficient and organized library management. We take pride in providing a seamless experience for both administrators and students, ensuring easy access to a vast collection of books and resources.</p>
        {!isopen && <p style={{ cursor: "pointer", color: "red" }} onClick={() => setOpen(true)}>Read More...</p>}
        {isopen && <p style={{ cursor: "pointer", color: "red" }} onClick={() => setOpen(false)}>Read Less...</p>}
        {isopen &&
          <>
            <b>For Administrators</b>

            Our system empowers library administrators with powerful tools to efficiently manage library resources:
            <ul>
              <li>
                Admin Dashboard: A user-friendly interface that allows administrators to monitor and control all library activities.
              </li>
              <li>
                Book Management: Easily add, edit, and delete books from the library catalog. Keep track of vital book details, including title, author, publisher, year, and copies available.
              </li>
              <li>
                Issue and Return: Streamline the lending process with a simple yet effective system for issuing and returning books. Set due dates, track borrowed books, and automate fine calculations.
              </li>
              <li>
                Recommended Books: Discover the latest and most popular books recommended by students and other administrators. Enhance your library collection by adding highly sought-after titles.
              </li>
              <li>
                Fine Management: Implement a fine system to encourage timely book returns. Automatically calculate fines for overdue books, ensuring fair and consistent enforcement.
              </li>
            </ul>

            <b>For Students</b>
            <li>
              Our library management system caters to students' needs, making it easy to explore, recommend, and borrow books:
            </li>
            <li>
              Student Dashboard: A personalized space where students can view their borrowed books, recommendations, and account information.
            </li>
            <li>
            </li>Book Recommendations: Students can recommend books they've enjoyed, helping others discover new reading materials. This interactive feature promotes a sense of community
            within the library.
            <li>
              Book Search: Easily search and explore the library catalog by title, author, or genre. Find the perfect book for your academic or leisure reading.
            </li>
            <li>
              Book Issuing: Borrow books hassle-free with a few clicks. Keep track of due dates and renew books if needed.
            </li>
            <li>
            </li>Fines and Notifications: Receive timely notifications about due dates and outstanding fines to ensure a smooth library experien
            ce.

            <p> At our LMS, we are dedicated to promoting literacy and fostering a love for reading among students. Our Library Management System is designed to make the library experience efficient, enjoyable, and accessible to all.</p>

          </>
        }
        <Button><a href="/home">Get Started</a></Button>
      </FirstContainer>

      <SecondContainer>
        <img src={image1} alt="landing_image" />
      </SecondContainer>
    </Wrapper>
  )
}

export default Landing;

const Wrapper = styled.div`
display:flex;
flex-direction:row;
min-height:100vh;
align-items:center;

justify-content:center;
`

const FirstContainer = styled.div`
width:50%;
padding:20px;
text-align:justify;
h1{
    font-size:3rem;
    font-weight:bolder;

}
p{

}
`
const SecondContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:center;
img{
    width:100%;

}
`
const Button = styled.button`
padding:10px 20px;
 color:black;
 background:#24a4dc;
 font-weight:bold;
 letter-spacing:2px;
 border:none;
 border-radius:10px;
transition:1s all;

a{
    text-decoration:none;
    color:black;
}
 &:hover{
    color:white;
    transform:scale(1.2);
    margin-left:10px;
 }
`