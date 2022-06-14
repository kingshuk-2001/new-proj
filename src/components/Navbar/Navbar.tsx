import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavbarData } from './NavbarData';
import Submenu from './Submenu';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { ClickAwayListener } from '@mui/material';


const Nav = styled.div`
background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 80px;
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
color : #003060;
`;

const SidebarNav = styled.nav<{ sidebar: boolean }>`
background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 250px;
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
        <NavIcon to='/logout'>
          <LogoutRoundedIcon  />
        </NavIcon>
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