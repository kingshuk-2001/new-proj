import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { isTemplateExpression } from 'typescript';

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #7F7FD5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color : black;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #7F7FD5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  &:hover {
    background: #7F7FD5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    cursor: pointer;
    color: black;
  }
`;


const Submenu = (props: any) => {

    const [subnav, setsubnav] = useState(false)
    const showSubnav = () => {
        setsubnav(!subnav)
    }

    return (
        <>
            <SidebarLink to={props.item.path} onClick={()=>{
                if(props.item.subNav){
                    showSubnav()
                }
                else{
                    props.showSidebar(false)
                }
            }}>
                <div>
                    {props.item.icon}
                    <SidebarLabel>{props.item.title}</SidebarLabel>
                </div>
                <div>
                    {props.item.subNav && subnav
                        ? props.item.iconOpened
                        : props.item.subNav
                            ? props.item.iconClosed
                            : null}
                </div>
            </SidebarLink >
            {subnav &&
                props.item.subNav.map((item:any, index:any) => {
                    return (
                        <DropdownLink to={item.path} key={index} >
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    )
}


export default Submenu