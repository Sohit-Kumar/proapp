import React, { useState, useEffect } from 'react';
import FacebookAuth from 'react-facebook-auth';
import GoogleLogin from 'react-google-login';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import Tooltip from '@material-ui/core/Tooltip';




const Login = () => {
    const MyFacebookButton = ({ onClick }) => (
        <Tooltip title='Facebook'>
            <button onClick={onClick} className='fbtn'>
                <FacebookIcon />
            </button>
        </Tooltip>
    );

    const authenticate = (response) => {
        console.log(response);
        // Api call to server so we can validate the token
    };

    //loginform
    const [form] = Form.useForm();
    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    //googlelogin
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <div className='login'>
                <h1>Hello User</h1>

                <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                    <Form.Item className='uname'
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item className='lname'
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                        {() => (
                            <Button
                                type="button"
                                htmlType="submit"
                                className="loginbtn"
                            >
                                Login
                            </Button>
                        )}
                    </Form.Item>
                </Form>


                <h1 className='lhead'>Login With Facebook|Google</h1>
                <FacebookAuth
                    appId="662640761355870"
                    callback={authenticate}
                    component={MyFacebookButton} />
                <GoogleLogin className='gbtn'
                    clientId="652295880583-1k4mfq2lupu49phqsb1l4t0dbcguh4bb.apps.googleusercontent.com"
                    
                    buttonText=""
                    
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>

        </>
    );
}

export default Login;