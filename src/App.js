import React from 'react'
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Middle from "./components/Middle"
import Footer from "./components/Footer"
import { Stack,Box } from "@mui/material";

function App() {
  return (
    <Box>
     <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between">  
    <Sidebar/>
    <Middle/> 
      <Rightbar/>
  
  
    </Stack>   
    <Footer/>
    </Box>
  );
}

export default App;
