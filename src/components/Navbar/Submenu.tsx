import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { isTemplateExpression } from 'typescript';

const SidebarLink = styled(Link)`
  display: flex;
  color: #52446d;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 15px;
  &:hover {
    background : #e2e9f7;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color : #003060;
  }
`;

const SidebarLabel = styled.span`
  padding-bottom : 1px;
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background : white;
  height : 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #52446d;
  font-size: 15px;
  &:hover {
    background : #e2e9f7;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color: #003060;
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
                        <DropdownLink to={item.path} key={index} onClick={props.subtog}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    )
}
// onClick={props.setsidebar(!props.sidebar)}

export default Submenu