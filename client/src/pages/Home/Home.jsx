import React from 'react'
import { Container,  Button, Typography,Box,Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import {LandingStyles as styles} from './styles'
import background from '../../assets/images/worksp.jpg'
const Home = () => {
  return (
    <Box sx={{...styles.outerContainer,background:'rgba(0,0,0,0.6)'}}>
      <img src={background} style={styles.containersImage} />
      <Grid container sx={{}}>
      
        <Grid item xs={12} sm={7} lg={6} alignItems="center" justifyContent="center" sx={{mt:5,mb:5}}>
        
      <Container sx={styles.container}>
         <>
         <Typography variant="h4" sx={{...styles.welcomeMessage, fontSize:'26px'}}>
            Welcome to ScheduleIt!
          </Typography>
          <Typography variant="body1" sx={styles.appDescription}>
            ScheduleIt is an innovative scheduling platform that elevates your scheduling experience. Our platform is designed with inspiration drawn from military efficiency, offering a dynamic solution for seamless shift delegation and rapid schedule creation. Whether you're a military professional or managing schedules in a civilian setting, ScheduleIt is tailored to meet your unique needs. Experience the power of efficient time management and stay tuned for exciting developments as we continuously enhance and expand ScheduleIt to redefine the way schedules are crafted.
          </Typography>
          <ul style={styles.list}>
            <li style={styles.listItem}><Typography fontSize='1.25rem'>Optimize employee scheduling based on preferences</Typography></li>
            <li style={styles.listItem}><Typography fontSize='1.25rem'>Ensure efficient coverage for different time slots</Typography></li>
            <li style={styles.listItem}><Typography fontSize='1.25rem'>Handle multiple shift durations and specialties</Typography></li>
            <li style={styles.listItem}><Typography fontSize='1.25rem'>Provide a seamless experience for both managers and employees</Typography></li>
          </ul>
          <Typography variant="h4" sx={styles.welcomeMessage}>
            Join ScheduleIt today and revolutionize the way you manage schedules!
          </Typography>
        </>
        </Container>
        </Grid>
        <Grid item xs={12} sm={5} lg={6} alignItems="center" justifyContent="center" sx={{mt:5}}>
        <Box sx={styles.buttonContainer}>
        <Button variant="contained" color="primary" sx={styles.getStartedButton}>
          Get Started
        </Button>
      </Box>
        </Grid>
    </Grid>
    <Box sx={styles.footContainer}>
      <Typography variant="body1">
        © 2023 ScheduleIt. All rights reserved. | Terms of Service | Privacy Policy
      </Typography>
    </Box>
    </Box>
    
  );
}

export default Home

//PLAN: SEPARATE PAGE INTO 2 GRID ITEMS , PUT 2 WHITE CARDS AND CONTAINERS. ADJUST COLOR TO THE BACKGROUND IMAGE
//PLAN STEP 2: SEPARATE ROUTING FOR BOTH CASES THERE IS USER AND NOT , OR CONDITIONAL RENDERING

