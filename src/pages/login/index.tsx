import React, { useContext, useEffect, useState } from 'react';
import "./login.scss";
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../routes/useAuth';
import axios from 'axios';
import LoginContext from '../../context/LoginContext';
import { Link } from 'react-router-dom';


export const LoginPage: React.FC = (props) => {

    //import setuserlist from context
    const {setuserlist}:any = useContext(LoginContext)

    let users: any = []
    
    //get user details from json server using axios
    useEffect(() => {
        axios
            .get('http://localhost:4000/userDetails')
            .then(response => {
                users = response.data
            })
    }, [])

    

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useLocalStorage("user-info", "");

    const [ispass, setpass] = useState("")
    const onFinish = (credentials: any) => {


        //find if username and passsword
        const auser = users.find((user:any)=>
        (user.username==credentials.username && user.password == credentials.password))

        //if user is found save user details to local storage and navigate to dashboard component
        if(auser){
            console.log("success");
            setpass("yes")
            const temp = {
                'username' : credentials.username,
                'password'  : credentials.password,
                'role' : auser.role
            }
            setUserInfo(temp)
            authenticateUser(credentials.username, credentials.password)
            navigate('/dashboard')
            setuserlist(users)
        }
        else{
            alert("wrong credentials")
        }    
    };

    const authenticateUser = (username: any, password: any) => {
        console.log(username)
        // const USER_API_BASE_URL = "http://localhost:8181/api/users/signIn";
        const USER_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";
        const userData = {
            userName: username,
            password: password,
            email: "prashant@codewalla.com",
            newPassword: "",
            roles: ['admin']
        };
        console.log(userData);

        axios.post(USER_API_BASE_URL).then((res: any) => {
            console.log(res)
            // navigate('/')
        })
        // axios.get(USER_API_BASE_URL).then((res:any)=> {
        //            console.log(res)

        //     })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='login-page-class'>
            <h1>Login Here</h1>

            <Form className='login-form-data'
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >

                <Form.Item
                    label={
                        // <FormattedMessage id="login.username" />
                        "Username"
                    }
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "please_input_your_username",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/^[A-Za-z]\w{7,14}$/),
                            message: "login.please_input_your_password",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <div className='button-style'>
                        <Button type="primary" htmlType="submit" className='submit-button'>
                            Submit
                        </Button>
                        <Button type="primary" className='signup-button' >
                            <Link className="link" to="/signup">Sign Up</Link>
                        </Button>
                    </div>
                </Form.Item>
                <Link className="link" to="/forgot"><p>Forgot password</p></Link>
            </Form>
        </div>

    );
};
