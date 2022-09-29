import React, { useContext, useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { UserContext } from '../App'
import { Navigate, Link } from 'react-router-dom'
import Api, {endpoints, authAxios} from '../configs/Api'
import cookies from 'react-cookies'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errMsg, setErrMsg] = useState(null)
    const [user, dispatch] = useContext(UserContext)

    const login = async (event) => {
        event.preventDefault()

        // lay token
        try {
            const res = await Api.post(endpoints['login'], {
                'client_id': 'iINS9jZ8OT5zcmqw4GdFsMo6BrbbNgj2QudUumsD',
                'client_secret': 'sfgsQCxLt8v6j7WLKdfrn9Uq4Oi0TzlXMlsPg6ASLQx1tj5fTYAS5lZoOa11KfKbCqFATlTD40flHuQyYYUQsjY4YJfCzCOFeVSMgaPwej3kRXek6SWmqrvDOveMwneH',
                'username': username,
                'password': password,
                'grant_type': 'password'
            })
    
            
            if (res.status === 200) {
                cookies.save('access_token', res.data.access_token)
    
                // lay current user
                const user = await authAxios().get(endpoints['current-user'])
                console.log(user.data)
                cookies.save('current_user', user.data)
                dispatch({
                    "type": "login",
                    "payload": user.data
                })
            } 
        } catch (error) {
            console.info(error)
            setErrMsg('Username hoac password KHONG chinh xac!!!')
        }
    }

    if (user != null)
        return <Navigate to="/" />

    return (
        <Container style={{
            margin: "10px auto",
            width: "60%",
            borderRadius: "16px",
            boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
            padding: "24px",
          }}>
            <h1 className="text-center text-danger">ĐĂNG NHẬP</h1>

            {errMsg !== null && <Alert key='danger' variant='danger'>
                {errMsg}
            </Alert>}

            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="test" value={username} onChange={evt => setUsername(evt.target.value)} placeholder="Nhap username..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={evt => setPassword(evt.target.value)} placeholder="Nhap password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng Nhập
                </Button>
                <Link to="/signup">Đăng ký tài khoản mới ?</Link>
            </Form>
        </Container>
    )
}

export default Login