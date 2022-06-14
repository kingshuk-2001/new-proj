import React, { useState, useEffect, useContext } from 'react';
import { List, Avatar, Button, Skeleton, Spin } from 'antd';
import "./ListUser.css"
import VirtualList from 'rc-virtual-list';
import { UserOutlined, DeleteFilled } from '@ant-design/icons';
import axios from 'axios';
import LoginContext from '../../../context/LoginContext';

interface UserItem {
  id: number,
  username: string,
  password: string,
  role: string,
  email: string;
  age: number;
}


const ListUser: React.FC = () => {

  //to show loading spinner till all user data gets fetched
  const [loading, setloading] = useState(true)
  
  const [userlist, setuserlist] = useState([])
  //get users from json using axios
  useEffect(() => {
    axios
      .get('http://localhost:4000/userDetails')
      .then(response => {
        setuserlist(response.data)
      })
      .then(() => {
        setloading(false)
      })
  }, [])



  //function to delete user from json using axios
  const del = (e: any) => {
    const usertodelete = e.target.parentNode.firstChild.lastChild.firstChild.firstChild.innerHTML
    const u:any = userlist.find((user: any) => {
      return (user.username == usertodelete)
    })
    console.log(u);
    axios.delete(`http://localhost:4000/userDetails/${u?.id}`)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.message);
      });
    const name = e.target.getAttribute("name")
    setuserlist(userlist.filter((user:any) => user.username !== usertodelete));
  }
  

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <List>
          <VirtualList
            className='list-cont'
            data={userlist}
            height={500}
            itemHeight={47}
            itemKey="email"
          >

            {(item: UserItem) => (
              <List.Item extra key={item?.username}>
                <List.Item.Meta
                  className='list-item'
                  avatar={<Avatar className='pic' size={64} icon={<UserOutlined />} />}
                  title={<span>{item?.username}</span>}
                  description={<span>{item?.email}</span>}
                />
                <button  onClick={del}><DeleteFilled></DeleteFilled></button>
              </List.Item>
            )}
          </VirtualList>
        </List>
      )}

    </>
  );
};

export default ListUser;

