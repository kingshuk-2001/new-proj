import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const NavbarData = [
  {
    title : 'DashBoard',
    path : '/dashBoard',
    icon : <DashboardRoundedIcon/>,
    iconClosed: <ArrowDropDownRoundedIcon/>,
    iconOpen : <ArrowDropUpRoundedIcon/>
  },
  {
    title : 'About',
    path : '/about',
    icon : <InfoRoundedIcon/>,
    iconClosed: <ArrowDropDownRoundedIcon/>,
    iconOpen : <ArrowDropUpRoundedIcon/>
  },
  {
    title : 'users',
    path : '/users',
    icon : <PersonRoundedIcon/>,
    iconClosed: <ArrowDropDownRoundedIcon/>,
    iconOpen : <ArrowDropUpRoundedIcon/>,
    subNav : [
      {
        title : 'ListUsers',
        path : '/users/list',
        icon : <ViewListRoundedIcon/>
      },
      {
        title : 'AddUsers',
        path : '/users/add',
        icon : <PersonAddAltRoundedIcon/>
      }
    ]
  },
  {
    title : 'Products',
    path : '/products',
    icon : <LocalMallRoundedIcon/>,
    iconClosed: <ArrowDropDownRoundedIcon/>,
    iconOpen : <ArrowDropUpRoundedIcon/>
  },
  {
    title : 'Settings',
    path : '/settings',
    icon : <SettingsRoundedIcon/>,
    iconClosed: <ArrowDropDownRoundedIcon/>,
    iconOpen : <ArrowDropUpRoundedIcon/>
  },
  {
    title : 'Profile',
    path : '/profile',
    icon : <AccountBoxIcon/>,
    iconClosed: <ArrowDropDownRoundedIcon/>,
    iconOpen : <ArrowDropUpRoundedIcon/>
  }
]
