import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import axios from 'axios';
import "./signup.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginContext from '../../context/LoginContext';
const { Option } = Select;


const SignUp: React.FC = () => {

  //get list user from context
  const {userlist} : any = useContext(LoginContext)
  //variable to store if user got succesfully registered
  const [reg, setreg] = useState(false)

  // on form submit ->
  //  check if username already exists -> 
  //  if no -> 
  //  post to json server using axios
  
  const onFinish = (values: any) => {
    if (userlist.find((user: any) =>
      (values.username === user.username))) {
         alert("user exists")
      }
    else if (userlist.find((user: any) =>
    (values.email === user.email))) {
       alert("email exists")
    }
    else {
      axios.post('http://localhost:4000/userDetails', values)
        .catch(error => {
          console.error('There was an error!', error);
        });
      setreg(true)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <>
      <div className="form">
        <h2>Sign Up</h2>
        {reg ? (
          <>
            <h2>User Registered</h2>
            <button><Link className="link" to="/login">Login</Link></button>
          </>

        ) : (
          <Form

            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true,  pattern: new RegExp(/^[A-Za-z]\w{7,14}$/), message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label="Role">
              <Input.Group compact>
                <Form.Item
                  name={'role'}
                  rules={[{ required: true, message: 'Province is required' }]}
                >
                  <Select placeholder="Select role">
                    <Option value="super-admin">super-admin</Option>
                    <Option value="admin">admin</Option>
                    <Option value="visitor">visitor</Option>
                  </Select>
                </Form.Item>
              </Input.Group>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true,type:'email', message: "The input is not valid E-mail!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="btn" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}

      </div>
    </>
  );
};

export default SignUp;