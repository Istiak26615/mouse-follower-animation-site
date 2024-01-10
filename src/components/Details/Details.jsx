import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import "./Details.css";
import solutions from "../../data/solutions.json";
import services from "../../data/services.json";


const Details = () => {
  const { id } = useParams();
  const solution = solutions.find((obj) => obj.id === id);
  const service = services.find((obj) => obj.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (

    <Container sx={{ mt: "2rem", color: "black", minHeight: '100vh' }}
    >
      {solution ?
        <>
          {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} sx={{ marginRight: "2rem" }} order={{ xs: 2, sm: 2, md: 1 }}>
          <Typography sx={{ fontSize: "3rem", textAlign: "center", color: "black" }}>{solution.Title}</Typography>
          
         
          <Box>
            {solution.description.map((item) => (
              <Typography sx={{ fontSize: "1.1rem", textAlign: "justify", mb: ".5rem" }}>{item.match(/^\d/) ? '\u00A0 \u00A0 \u00A0' : null}{item}</Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} order={{ xs: 1, sm: 1, md: 2 }}>
          <img width="100%" height="300px" src={solution.image} alt='' />
        </Grid>
      </Grid> */}
          <Box>
            <Box>
              <img width="100%" height="100%" src={solution.image} alt='' />
            </Box>
            <Box sx={{margin:"0rem"}}>
            <Typography sx={{ fontSize: "3rem", textAlign: "center", color: "black" }}>{solution.Title}</Typography>
              {solution.description.map((item) => (
                <Typography sx={{fontFamily: 'Ysabeau, sans-serif', fontSize: "2rem", textAlign: "justify", m: ".5rem" }}>{item.match(/^\d/) ? '\u00A0 \u00A0 \u00A0' : null}{item}</Typography>
              ))}
            </Box>
          </Box>
        </>
        :
        <>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={7} sx={{ marginRight: "2rem" }} order={{ xs: 2, sm: 2, md: 1 }}>
            <Typography sx={{ fontSize: "3rem", textAlign: "center", color: "black" }}>{service.Title}</Typography>


            <Box>
              {service.description.map((item) => (
                <Typography sx={{ fontSize: "1.1rem", textAlign: "justify", mb: ".5rem" }}>{item.match(/^\d/) ? '\u00A0 \u00A0 \u00A0' : null}{item}</Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} order={{ xs: 1, sm: 1, md: 2 }}>
            <img width="100%" height="300px" src={service.image} alt='' />
          </Grid>
        </Grid> */}
        <Box>
            <Box>
              <img width="100%" height="100%" src={service.image} alt='' />
            </Box>
            <Box sx={{margin:"10rem"}}>
            <Typography sx={{ fontSize: "3rem", textAlign: "center", color: "black" }}>{service.Title}</Typography>
              {service.description.map((item) => (
                <Typography sx={{fontFamily: 'Ysabeau, sans-serif', fontSize: "2rem", textAlign: "justify", mb: ".5rem" }}>{item.match(/^\d/) ? '\u00A0 \u00A0 \u00A0' : null}{item}</Typography>
              ))}
            </Box>
          </Box>
        </>
      }
    </Container>

  )
}

export default Details
