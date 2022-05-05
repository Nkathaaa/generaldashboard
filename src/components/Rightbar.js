import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,Box} from "@mui/material";
import { CardActionArea } from '@mui/material';
function Rightbar() {
  return (
    
          <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" ,height:"100vh", background:'radial-gradient(circle, rgba(35,119,254) 0%, rgba(232,235,240,1) 0%, rgba(35,119,254) 150%)'}}}>
          <Box position="fixed" width={300}>
      
     
        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Photos
        </Typography>
        
        <Card sx={{ 
          margin: 5, 
          width:250
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="September 14, 2022"
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
  
    </Card>

    <Card sx={{ 
          margin: 5, 
          width:250
        }}>

     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
  
    </Card>

    <Card sx={{ 
          margin: 5, 
          width:250
        }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="September 14, 2022"
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
  
    </Card>
    <Card sx={{ 
          margin: 5, 
          width:250
        }}>

     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
  
    </Card>
   
      </Box>
         </Box>
  )
}

export default Rightbar