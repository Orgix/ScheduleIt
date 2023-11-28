import { useState } from 'react'
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Employees from './pages/Employees/Employees';
import Profile from './pages/Profile/Profile';
import Schedules from './pages/Schedules/Schedules'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Container, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';

const theme  = createTheme(themeSettings)

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <CssBaseline/>
        <Container maxWidth={false} disableGutters>
          <Navbar color="primary"/>
          <Routes>
            <Route  index element={<Home/>} />
            <Route path="me">
              {/* There will be an index route here, a different component */}
              <Route index element={<Profile/>}/>
              <Route path="employeeList" element={<Employees/>}/>
              <Route path="schedules" element={<Schedules/>} />
            </Route>
          </Routes>
        </Container>
    </BrowserRouter> 
    </ThemeProvider>
  )
}

export default App
