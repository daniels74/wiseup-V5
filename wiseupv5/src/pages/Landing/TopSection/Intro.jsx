import React from 'react'
import { Container } from '@mui/material'
//import { Box } from '@mui/system'

const Intro = () => {
  return (
    <Container
    sx={{
        position: "relative",
        backgroundColor: "black", //"#19202b",
        display: {xs: "none", sm: "flex"},
        flexDirection: "column",
        alignItems: "center",
        height: {xs: "200px", sm: "300px"},
        gap: "1rem",
        zIndex: "1"
    }}
    >
        <h3>
            Site Specs
        </h3>
        <ul>
            <li>
                Login/Logout
            </li>
            <li>
                User Data for profile, profile pic, blog, about.
            </li>
            <li>
                Add/follow friends and chat with them
            </li>
            <li>
                Share your knowledge
            </li>
            <li>
                Gain insight on different pieces of knowledge and perspective
            </li>
            <li>
                Opacity in dashboard
            </li>
            <li>
                Apply react spring
            </li>
        </ul>
    </Container>
  )
}

export default Intro