import React from 'react'
import ValSlider from './Slider'
import './settings.css'
import { Button, ButtonGroup, Checkbox, FormGroup } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


const Settings = () => {


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];


  return (
    <div>
      <div className='setval'>
        <span>sens</span>
        <ValSlider />
      </div>
      <div className='setval'>
        <span>sens</span>
        <ValSlider />
      </div>
      <div className='setval'>
        <span>sens</span>
        <ValSlider />
      </div>
      <div className='check'>
        <Checkbox {...label}
          color="secondary"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />} />
        <Checkbox
          {...label}
          color="secondary" 
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </div>
      <div className="set-btn">
        <ButtonGroup variant="text" color="secondary" aria-label="text button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        FabProps={{
          sx: {
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.main',
            }
          }
        }}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </div>
  )
}

export default Settings






