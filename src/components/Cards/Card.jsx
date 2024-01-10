import { Box, Button, Link, Typography } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
// import { Link } from 'react-router-dom'

const Card = (props) => {
  let id = props.id
  let icon = props.icon
  let title = props.title
  let description = props.description
  let image = props.image
  AOS.init({ duration: 1500 });
  return (
    <>
      <Link href={`/details/${id}`} state={{ title: title, description: description, image: image }} style={{
        textDecoration: "none", color: "black"
      }}>
        <Box 
          // data-cursor-img={image}
          // data-cursor="-hidden" 
        >
          <Box sx={{
            margin: "2rem", display: 'flex',flexDirection: "column",
            alignItems: 'center',
            //  justifyContent: 'space-around',
            // height: '10vh',
            textDecoration: "none",
          }}>
            <img height="253px" width="337px" src={image} alt=''/>
            {/* <Box sx={{ fontSize: "3rem" }}><i class={icon}></i></Box> */}
            
            <Button
                style={{ background: "rgb(242 241 236)" }}
                variant="contained" sx={{ margin: 2, marginLeft: 1, color:"black", borderRadius: '73px', width:"50%" }}
              >
                Details
              </Button>
            <Typography data-aos="flip-down" sx={{
              fontSize: "1.2rem", textAlign: "center", color: 'black',margin:"1rem"
            }}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Link>
    </>
  )
}

export default Card
