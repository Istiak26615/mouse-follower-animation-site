import React from 'react'
import solutions from "../../data/solutions.json"
import Card from '../Cards/Card'
import { Box, Grid, Typography } from '@mui/material'
import AOS from 'aos';
import 'aos/dist/aos.css';



const BannerService = () => {
    AOS.init({ duration: 2000 });
    return (
        <Box>
            <Box sx={{ margin: "3rem", color: "black", minHeight: "60vh", display: {xs:"none", md:"none",lg:"flex"}, flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                <Typography sx={{ marginY: "1rem", fontSize: "1rem", textAlign: 'left' }}>Technology That Makes Life Better
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={2} sm={4} md={4}>
                        <div
                            // data-cursor-img={solutions[0].image}
                            data-cursor-video="https://storage.googleapis.com/bucket-playground-tal/shishirTemp/scrolling-through-pinterest-SBV-300154750-HD.mp4
                            "
                        >
                            <>

                                <Box
                                    data-cursor-video="https://storage.googleapis.com/bucket-playground-tal/shishirTemp/scrolling-through-pinterest-SBV-300154750-HD.mp4
                                    "
                                >
                                    <Box sx={{
                                        marginY: "3rem", display: 'flex', flexDirection: "column",
                                        // alignItems: 'center',
                                        // justifyContent: 'center',
                                        // height: '10vh',
                                        textDecoration: "none",
                                    }}>

                                        <Typography sx={{
                                            fontSize: "4rem", textAlign: "center", color: 'white',
                                            WebkitTextStroke: '1px black',
                                            WebkitTextFillColor: 'transparent', margin: "1rem",
                                            "&:hover": {
                                                WebkitTextFillColor: 'black',
                                                color:"black"
                                              }
                                        }}>
                                            Websites
                                        </Typography>
                                    </Box>
                                </Box>

                            </>
                        </div>
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        <div
                            data-cursor-video="https://storage.googleapis.com/bucket-playground-tal/shishirTemp/Mind%20School%20App%202.mp4"
                        >
                            <>

                                <Box
                                    data-cursor-video=" https://storage.googleapis.com/bucket-playground-tal/shishirTemp/Mind%20School%20App%202.mp4"
                                >
                                    <Box sx={{
                                        marginY: "3rem", display: 'flex', flexDirection: "column",
                                        // alignItems: 'center',
                                        // justifyContent: 'center',
                                        // height: '10vh',
                                        textDecoration: "none",
                                    }}>

                                        <Typography sx={{
                                            fontSize: "4rem", textAlign: "center", color: 'white',
                                            WebkitTextStroke: '1px black',
                                            WebkitTextFillColor: 'transparent', margin: "1rem",
                                            "&:hover": {
                                                WebkitTextFillColor: 'black',
                                                color:"black"
                                              }
                                        }}>
                                            Apps
                                        </Typography>
                                    </Box>
                                </Box>

                            </>
                        </div>
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        <div
                            data-cursor-video="https://storage.googleapis.com/bucket-playground-tal/shishirTemp/marketing.mp4"
                        >
                            <>

                                <Box
                                    data-cursor-video="https://storage.googleapis.com/bucket-playground-tal/shishirTemp/marketing.mp4"
                                    
                                >
                                    <Box sx={{
                                        marginY: "3rem", display: 'flex', flexDirection: "column",
                                        // alignItems: 'center',
                                        // justifyContent: 'center',
                                        // height: '10vh',
                                        textDecoration: "none",
                                    }}>

                                        <Typography sx={{
                                            fontSize: "4rem", textAlign: "center", color: 'white',
                                            WebkitTextStroke: '1px black',
                                            WebkitTextFillColor: 'transparent', margin: "1rem",
                                            "&:hover": {
                                                WebkitTextFillColor: 'black',
                                                color:"black"
                                              }
                                        }}>
                                            Marketing
                                        </Typography>
                                    </Box>
                                </Box>

                            </>
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{  color: "black", minHeight: "60vh", display: {xs:"flex", md:"flex",lg:"none"}, flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                <Typography sx={{ marginY: "1rem", fontSize: "1rem", textAlign: 'left' }}>Technology That Makes Life Better
                </Typography>
                <Box data-aos="fade-up" sx={{display:"flex", flexDirection:"column",alignItems:"flex-start"}}>
                    
                        <div
                        >
                            <>

                                <Box
                                >
                                    <Box sx={{
                                        marginY: "1rem", display: 'flex', flexDirection: "column",
                                        // alignItems: 'center',
                                        // justifyContent: 'center',
                                        // height: '10vh',
                                        textDecoration: "none",
                                    }}>

                                        <Typography  sx={{
                                            fontSize: "4rem", textAlign: "center", color: 'white',
                                            WebkitTextStroke: '1px black',
                                            WebkitTextFillColor: 'transparent',
                                            
                                        }}>
                                            Websites
                                        </Typography>
                                    </Box>
                                </Box>

                            </>
                        </div>
                    
                    
                        <div
                        >
                            <>

                                <Box
                                >
                                    <Box sx={{marginY: "1rem",
                                         display: 'flex', flexDirection: "column",
                                        // alignItems: 'center',
                                        // justifyContent: 'center',
                                        // height: '10vh',
                                        textDecoration: "none",
                                    }}>

                                        <Typography data-aos="fade-up" sx={{
                                            fontSize: "4rem", textAlign: "center", color: 'white',
                                            WebkitTextStroke: '1px black',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            Apps
                                        </Typography>
                                    </Box>
                                </Box>

                            </>
                        </div>
                    
                    
                        <div
                        >
                            <>

                                <Box
                                >
                                    <Box sx={{
                                        marginY: "1rem", display: 'flex', flexDirection: "column",
                                        // alignItems: 'center',
                                        // justifyContent: 'center',
                                        // height: '10vh',
                                        textDecoration: "none",
                                    }}>

                                        <Typography data-aos="fade-up" sx={{
                                            fontSize: "4rem", textAlign: "center", color: 'white',
                                            WebkitTextStroke: '1px black',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            Marketing
                                        </Typography>
                                    </Box>
                                </Box>

                            </>
                        </div>
                    
                </Box>
            </Box>

            <Typography sx={{fontFamily: 'Ysabeau, sans-serif', marginTop: "2rem", fontSize: "1.5rem" }}>Tech Analytica Limited is one of the most promising IT Services providers in Bangladesh dedicated to delivering complete IT solutions to its clients, whether they are start-up operations or large corporations. Our receptive approach makes us understand the stipulation in business and gives us the work force in meeting the necessity to accomplishing the goal.

                In addition to having our head office in Bangladesh, we also have our sales office in Canada and ascending toward becoming a paramount business house both locally and internationally. Reliability is our trademark and business relationship are our strength. The company’s high level of productivity and performance is supported by a group of motivated staff and demand structured hardware setup.

                To Tech Analytica Limited, sky is not the limit, thus we continually welcome new opportunities to fulfil the increasing demand in the IT industry worldwide.
            </Typography>
        </Box>
    )
}

export default BannerService
