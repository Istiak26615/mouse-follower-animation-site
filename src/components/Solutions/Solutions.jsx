import React from 'react'
import solutions from "../../data/solutions.json"
import Card from '../Cards/Card'
import { Box, Grid, Typography } from '@mui/material'


const Solutions = () => {
    return (
        <Box sx={{ marginTop: "7rem",margin:"3rem", color:"black", minHeight:"60vh" }}>
            <Typography sx={{ marginY: "2rem", fontSize: "3rem"}}>Solutions</Typography>
            <Grid sx={{display:"flex", justifyContent:"space-around"}}  container spacing={{ xs: 2,sm:2, md: 3 }} columns={{ xs: 2, sm: 3, md: 11, lg:12 }}>
                {
                    solutions.map((solution) => {
                        return (
                            <>
                                <Grid xs={2} sm={4} md={4}>
                                    <div>
                                      
                                        <Card sx={{margin:"1rem"}}
                                        id={solution.id}
                                            icon={solution.icon}
                                            title={solution.Title}
                                            description={solution.description}
                                            image={solution.image}
                                        />
                                    </div>
                                </Grid>
                            </>)
                    })
                }
            </Grid>

        </Box>
    )
}

export default Solutions
