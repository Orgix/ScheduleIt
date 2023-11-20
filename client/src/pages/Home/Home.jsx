import React from 'react'
import { Container,  Button, Typography,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {LandingStyles as styles} from './styles'
import background from '../../assets/images/worksp.jpg'
const Home = () => {
  return (
    <Box sx={{...styles.outerContainer, backgroundImage: `url(${background})`}}>
    <Container sx={styles.container}>
         <>
         <Grid container>
          <Typography variant="h4" sx={styles.welcomeMessage}>
            Welcome to ScheduleIt!
          </Typography>
          <Typography variant="body1" sx={styles.appDescription}>
            ScheduleIt is an innovative scheduling platform that helps you efficiently manage and organize your team's schedules. Easily create, assign, and track schedules with our user-friendly interface. With ScheduleIt, you can:
          </Typography>
          <ul sx={styles.list}>
              <li sx={styles.listItem}>Optimize employee scheduling based on preferences</li>
              <li sx={styles.listItem}>Ensure efficient coverage for different time slots</li>
              <li sx={styles.listItem}>Handle multiple shift durations and specialties</li>
              <li sx={styles.listItem}>Provide a seamless experience for both managers and employees</li>
            </ul>
          <Typography variant="h4" sx={styles.welcomeMessage}>
            Join ScheduleIt today and revolutionize the way you manage schedules!
          </Typography>
         </Grid>
        </>
    </Container>
    <Box sx={styles.buttonContainer}>
<Button variant="contained" color="primary" sx={styles.getStartedButton}>
    Get Started
  </Button>
    </Box>
    </Box>
    
  );
}

export default Home

//PLAN: SEPARATE PAGE INTO 2 GRID ITEMS , PUT 2 WHITE CARDS AND CONTAINERS. ADJUST COLOR TO THE BACKGROUND IMAGE