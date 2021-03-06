import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import LoginContext from '../../context/LoginContext';
import Navbar from '../../components/Navbar/Navbar';

export const HomePage: React.FC<any> = () => {

    const {username, password, roles}  :any = useContext(LoginContext)

    const [data, setData] = useState<any>();
    useEffect(() => {
        // apiCalls.getCall('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
        //     console.log('res', res);
        //     setData(res);
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
            // console.log('res', res);
            setData(res);
        })
    }, [])

    
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    )
}