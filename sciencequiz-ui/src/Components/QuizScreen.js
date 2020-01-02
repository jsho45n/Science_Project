import './QuizScreen.css';
import { Button, Form, Input, Icon, Modal } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';




const QuizScreen = ({ history }) => {


    const [login, setLogin] = useState({ id: '', password: '' })
    const [register, setRegister] = useState({ id: '', password: '', nick: '' })


    const loginhandleChange = (event) => {
        setLogin({ [event.target.name]: event.target.value });
    }

    const loginhandleSubmit = (e) => {
        e.preventDefault();
        axios.post(("http://10.156.147.202:3000/api/user/login"), {
            id: login.id,
            password: login.password
        }).then(result => {
            console.log(result);
            if (result.status === 403) {
                alert("로그인 실패");
                history.push('/login');
            }
            return result.data.token;
        }).then(token => {
            if (token) {
                localStorage.setItem("token", JSON.stringify(token, login.id, login.password));
                history.push('/quiz');
            }
            else {
                return;
            }
        }).catch(error => console.log(error))
    }



    const registerhandleChange = (event) => {
        setRegister({ [event.target.name]: event.target.value });
    }

    const registerhandleSubmit = (e) => {
        e.preventDefault();
        axios.post(("http://10.156.147.202:3000/api/user/register"), {
            id: register.id,
            password: register.password,
            nick: register.userNick
        }).then(result => {
            console.log(result);
            window.location.reload();
        }).catch(error => console.log(error))
        console.log('요청함');
        console.log(e);
        alert("회원가입완료");
    }

    const [modal, setModal] = useState('');
    const onClickShow = () => setModal('true');
    const handleOk = () => setModal('');
    const handleCancel = () => setModal('');


    return (
        <div className="LoginScreen">
            <Form className="login-form">
                <Form.Item>
                    <Input name="id" className="login-input" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} onChange={loginhandleChange} />} placeholder="Username"></Input>
                </Form.Item>
                <Form.Item>
                    <Input name="password" type="password" className="login-input-password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} onChange={loginhandleChange} />} placeholder="Password"></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={loginhandleSubmit} htmlType="submit" className="login-form-button">
                        로그인
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={onClickShow} htmlType="submit" className="login-form-register-button">
                        회원가입
                    </Button>
                    <Modal
                        title="회원가입"
                        visible={modal}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <Input name="id" className="register-input-id" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} onChange={registerhandleChange} />} placeholder="등록할 ID를 입력하세요"></Input>
                        <br />
                        <br />
                        <Input name="password" type="password" className="register-input-password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} onChange={registerhandleChange} />} placeholder="등록할 비밀번호를 입력하세요."></Input>
                        <br />
                        <br />
                        <Input name="userNick" type="nickname" className="register-input-nickname" prefix={<Icon type="aliwangwang" style={{ color: 'rgba(0,0,0,.25)' }} onChange={registerhandleChange} />} placeholder="등록할 별명을 입력하세요."></Input>
                        <br />
                        <br />
                        <Button type="primary" onClick={registerhandleSubmit} htmlType="submit" className="register-form-register-button">
                            회원가입
                        </Button>
                    </Modal>
                </Form.Item>
            </Form>

        </div>
    );
};



export default withRouter(QuizScreen);
