import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavbarData } from './NavbarData';
import Submenu from './Submenu';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Avatar, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Nav = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding-right: 40px;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
color : #52446d;
&:hover{
  color : #52446d;
  // transform : rotateY(180deg);
  // transition : all 0.5s ease;
}
`;

const SidebarNav = styled.nav<{ sidebar: boolean }>`
border-right : 2px solid #003060;
width : 250px;
background : white;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }: any) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

// 

const SidebarWrap = styled.div`
width: 100%;
`;
const AvatarCont = styled(Link)`
  border : 2px solid #003060;
  border-radius : 50%;
`;
const BadgeCon = styled.div`
  color : #003060;
  margin-right  :40px;
  margin-top : 10px;
`;

const NavEnd = styled.div`
  cursor : pointer;
  display: flex;
  justify-content : center;
  align-items : center;
`;


const Navbar = () => {

  // useEffect(()=>{

  // },[])

  const [sidebar, setsidebar] = useState(false)

  const showSidebar = () => setsidebar(!sidebar)

  const subtog = () => setsidebar(!sidebar)

  return (
    <div>
      <Nav>
        <NavIcon to='#'>
          <MenuRoundedIcon onClick={showSidebar} />
        </NavIcon>
        <NavEnd>
          <BadgeCon>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon  />
            </Badge>
          </BadgeCon>
          <AvatarCont to='./profile'><Avatar alt="Remy Sharp" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" /></AvatarCont>
          <NavIcon to='/logout'>
            <LogoutRoundedIcon />
          </NavIcon>
        </NavEnd>

      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap >
          <NavIcon to='#'>
            <CloseRoundedIcon onClick={showSidebar} />
          </NavIcon>
          {NavbarData.map((item, index) => {
            return <Submenu item={item} key={index} subtog={subtog} />
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  )
}

export default Navbar