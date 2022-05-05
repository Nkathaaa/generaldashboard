import React from 'react'
import { Toolbar,AppBar,Avatar,Badge,Box,InputBase,Menu,MenuItem,styled,Typography,Button,IconButton} from "@mui/material"
import { AcUnit,Mail,Notifications } from '@mui/icons-material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}))

const Icons=styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
}))

const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
const Navbar=()=> {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#F0F2F7" }}>
      <StyledToolbar>
        
        <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuRoundedIcon />
          </IconButton>
        <Search> 
          <InputBase placeholder="search..."/>
          </Search > 
      
            <Button variant="contained" sx={{color:'#fffff'}} disableElevation={true}>2 Updates</Button>
                     
                     <IconButton>
                       <Badge badgeContent={4} color="primary">
                    
                       <Notifications color="action" />
                    
                        </Badge>
                        </IconButton>




            <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            
          />
     

           <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>  



    </AppBar>  
  )
}

export default Navbar