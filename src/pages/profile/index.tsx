import { Avatar, Box, Paper } from '@mui/material'
import React from 'react'
import './profile.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  return (
    <div>
      <Box
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '60%',
            height: 500,
          },
        }}
      >
        <Paper elevation={3} >
          <Avatar sx={{ height: 150, width: 150, position: 'relative', bottom: 20, right: 20 }} alt="Remy Sharp" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
          <h1>Kingshuk</h1>
          <h3>kingshuk@codewalla.com</h3>
          <div className='sub-paper'>
            <div className='age'>
              <span>22</span>
            </div>
            <div className='info'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, molestias?
            </div>
          </div>
          <div className='icons'>
            <LinkedInIcon/>
            <InstagramIcon/>
            <GitHubIcon/>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default Profile