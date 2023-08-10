import React from 'react'
import { Typography,Box,Toolbar} from '@mui/material'

const question = () => {
  return (
   <>
   <Box>
    <Toolbar sx={{height:100}}/>
    <Typography variant='h3'>Question Name</Typography>
    <Typography variant='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod itaque earum nostrum illo perspiciatis natus aperiam, blanditiis fuga laudantium tempora?</Typography>
   </Box>
   
   </>
  )
}

export default question