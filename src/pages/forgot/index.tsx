import { Button, Form, Input } from 'antd'
import Password from 'antd/lib/input/Password'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Link } from 'react-router-dom'
import "./forgot.css"

const Forgot = () => {

    //variable to store if user is found by email
    const [isfound, setisfound] = useState(false)

    //variable to store found users details
    const [saveuser, setsaveuser] = useState<any>({})
    
    //variable to store if password change is successfull
    const [changed, setchanged] = useState(false)


    let users: any = []
    //get users from json using axios
    useEffect(() => {
        axios
            .get('http://localhost:4000/userDetails')
            .then(response => {
                users = response.data
            })
    }, [])

    //on email submit 
    const onFinish = (values: any) => {
        let hu = users.find((user: any) =>
            (user.email == values.email))
        setisfound(true)
        console.log(hu);
        setsaveuser(hu)
    }

    //on  new password submit
    const setNewPass = async (values: any) => {

        console.log(saveuser.password);
        console.log(values.password);
        const newur = ({...saveuser})
        newur.password = values.password
        console.log(newur.password);
        
        axios.put(`http://localhost:4000/userDetails/${saveuser?.id}`,newur )
            .then(res => console.log(res.data));
        setchanged(true)
    }

    //on submit fail
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            {isfound ? (
                <div className="newpass">
                    {changed ? (
                        <>
                            <h2>Password Changed</h2>
                            <button><Link className="link" to="/login">Login</Link></button>
                        </>
                    ) : (
                        <>
                            <h2>Enter new password</h2>
                            <Form

                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={setNewPass}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input new password' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button className="btn" type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                        </>
                    )}
                </div>

            ) : (
                <div className="email">
                    <h2>Enter registered email</h2>
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
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button className="btn" type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )
            }


        </div >
    )
}

export default Forgot