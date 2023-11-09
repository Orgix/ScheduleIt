import { useState } from 'react'
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
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
          </Routes>
        </Container>
    </BrowserRouter> 
    </ThemeProvider>
  )
}

export default App
