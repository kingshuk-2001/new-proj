import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { LogoutOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './Header.css'
import useLocalStorage from '../../routes/useAuth';


//Header component for displaying navbar -> contains link to all pages

const Header: React.FC = () => {


    const [userInfo, setUserInfo] = useLocalStorage("user-info", "");

    return (

        <div className='headof'>

            <Menu className='head-cont' mode="horizontal">

                <div className='first'>
                    <Menu.Item className='item' icon={<MailOutlined />}>
                        <Link className="link" to="/dashboard">Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item className='item' icon={<MailOutlined />}>
                        <Link className="link" to="/about">About</Link>
                    </Menu.Item>

                    <Menu.SubMenu className='item' key="SubMenu" title="user options" icon={<SettingOutlined />}>
                        <Menu.Item icon={<AppstoreOutlined />}>
                            <Link to="/list">ListUser</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </div>

                <Menu.Item className='logout' icon={<LogoutOutlined />}>
                    <Link className="logout-link" to="/logout">LogOut</Link>
                </Menu.Item>
            </Menu>

         </div>

    )
}

export default Header



