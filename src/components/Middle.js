import React from 'react'
import { Box, Stack, Skeleton,Grid,Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

const Middle = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }} sx={{background:"#F0F2F7"}}>

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{background:'white'}}>
        <Grid md={4} item>
           <Typography variant="h1" sx={{ 
              boxShadow: 0,
              width: '300',
              height: '10rem',
              bgcolor: '#101010',
              color: 'black',
              p: 1,
              m: 1,
              borderRadius: 2,
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: '700',
             }}> 45</Typography>
                </Grid>
        <Grid md={4} item>
          On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens.On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens. In either case, the card's raised dragged elevation is 8dp.
          On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens. In either case, the card's raised dragged elevation is 8dp.
          On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens. In either case, the card's raised dragged elevation is 8dp. In either case, the card's raised dragged elevation is 8dp.
        </Grid> 
        <Grid md={4} item>
          On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens.On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens. In either case, the card's raised dragged elevation is 8dp.
          On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens. In either case, the card's raised dragged elevation is 8dp.
          On mobile, a card’s default elevation is most often 1dp, but can be 0dp in order to have fewer shadows on denser screens. In either case, the card's raised dragged elevation is 8dp. In either case, the card's raised dragged elevation is 8dp.
        </Grid>
        
      </Grid>
    </Box>
    
      </Box>

  )
}

export default Middle