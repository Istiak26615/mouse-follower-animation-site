import React, { useRef } from 'react'
import services from "../../data/services.json"
import axios from 'axios';
import Card from '../Cards/Card'
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import "./Service.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Services = () => {
    // const scrollableDivRef = useRef(null);

    const handleScroll = (event) => {
        event.preventDefault();
        const scrollableDiv = scrollableDivRef.current;

        scrollableDiv.scrollTop += event.deltaY;
    };
    console.log("services", services)
    return (
        <Container>
        <Box sx={{ marginTop: "7rem", color: "black", minHeight: "60vh" }}>
            <Box sx={{ display: "flex" }}>
                <Typography sx={{ marginY: "2rem", fontSize: "3rem", textAlign: 'left' }}>Services</Typography>

            </Box>

            <Box sx={{display:{xs:"none", md:"none",lg:"block"}}}>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <div >
                            <Box sx={{ height: "550px", width: "600px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ fontSize: "2rem" }}>
                                    {services[0].Title}
                                </Typography>

                            </Box>
                        </div>
                        <div >
                            <Box sx={{ height: "550px", width: "600px", textAlign: "centerr", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ fontSize: "2rem" }}>
                                    {services[1].Title}
                                </Typography>

                            </Box>
                        </div>
                        <div >
                            <Box sx={{ height: "550px", width: "600px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Typography sx={{ fontSize: "2rem" }}>
                                    {services[2].Title}
                                </Typography>
                                <Typography>

                                </Typography>
                            </Box>
                        </div>
                        <div >
                            <Box sx={{ height: "550px", width: "600px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Typography sx={{ fontSize: "2rem" }}>
                                    {services[3].Title}
                                </Typography>
                                <Typography>

                                </Typography>
                            </Box>
                        </div>
                        <div >
                            <Box sx={{ height: "550px", width: "600px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Typography sx={{ fontSize: "2rem" }}>
                                    {services[4].Title}
                                </Typography>

                            </Box>
                        </div>
                        <div >
                            <Box sx={{ height: "550px", width: "600px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Typography sx={{ fontSize: "2rem" }}>
                                    {services[5].Title}
                                </Typography>
                                <Typography>

                                </Typography>
                            </Box>
                        </div>

                    </div>
                    <div>
                        <div className='cards' >
                            <Link href={`/details/${services[0].id}`} state={{ title: services[0].Title, description: services[0].description, image: services[0].image }} style={{
                                textDecoration: "none", color: "black"
                            }}>
                                <Box sx={{ display: "flex" }}>

                                    <img data-cursor-text="View Details" data-cursor-stick height="550px" width="600px" src={services[0].image} alt='' />
                                </Box>
                            </Link>
                        </div>
                        <div className='cards' >
                        <Link href={`/details/${services[1].id}`} state={{ title: services[1].Title, description: services[1].description, image: services[1].image }} style={{
                                textDecoration: "none", color: "black"
                            }}>
                            <Box data-cursor-text="View Details" data-cursor-stick sx={{ display: "flex" }}>

                                <img height="550px" width="600px" src={services[1].image} alt='' />
                            </Box>
                            </Link>
                        </div>
                        <div className='cards' >
                        <Link href={`/details/${services[2].id}`} state={{ title: services[2].Title, description: services[2].description, image: services[2].image }} style={{
                                textDecoration: "none", color: "black"
                            }}>
                            <Box sx={{ display: "flex" }}>

                                {/* <Typography> */}
                                
                                <img data-cursor-text="View Details" data-cursor-stick height="550px" width="600px" src={services[2].image} alt='' />
                                {/* </Typography> */}
                            </Box>
                            </Link>
                        </div>
                        <div className='cards' >
                        <Link href={`/details/${services[3].id}`} state={{ title: services[3].Title, description: services[3].description, image: services[3].image }} style={{
                                textDecoration: "none", color: "black"
                            }}>
                            <Box sx={{ display: "flex" }}>

                                {/* <Typography> */}
                                <img data-cursor-text="View Details" data-cursor-stick height="550px" width="600px" src={services[3].image} alt='' />
                                {/* </Typography> */}
                            </Box>
                            </Link>
                        </div>
                        <div className='cards'>
                        <Link href={`/details/${services[4].id}`} state={{ title: services[4].Title, description: services[4].description, image: services[4].image }} style={{
                                textDecoration: "none", color: "black"
                            }}>
                            <Box sx={{ display: "flex" }}>

                                {/* <Typography> */}
                                <img data-cursor-text="View Details" data-cursor-stick height="550px" width="600px" src={services[4].image} alt='' />
                                {/* </Typography> */}
                            </Box>
                            </Link>
                        </div>
                        <div className='cards'>
                        <Link href={`/details/${services[5].id}`} state={{ title: services[5].Title, description: services[5].description, image: services[5].image }} style={{
                                textDecoration: "none", color: "black"
                            }}>
                            <Box sx={{ display: "flex" }}>

                                {/* <Typography> */}
                                <img data-cursor-text="View Details" data-cursor-stick height="550px" width="600px" src={services[5].image} alt='' />
                                {/* </Typography> */}
                            </Box>
                            </Link>
                        </div>

                    </div>
                </Box>
            </Box>
            
            <Grid sx={{display:{xs:"flex", md:"flex",lg:"none"}, justifyContent:"space-around"}}  container spacing={{ xs: 2,sm:2, md: 3 }} columns={{ xs: 2, sm: 3, md: 11, lg:12 }}>
                {
                    services.map((service) => {
                        return (
                            <>
                                <Grid xs={2} sm={4} md={4}>
                                    <div>
                                      
                                        <Card sx={{margin:"1rem"}}
                                        id={service.id}
                                            icon={service.icon}
                                            title={service.Title}
                                            description={service.description}
                                            image={service.image}
                                        />
                                    </div>
                                </Grid>
                            </>)
                    })
                }
            </Grid>







        </Box>
        </Container>
    )
}

export default Services
