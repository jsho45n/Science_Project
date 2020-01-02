import React from 'react';
import './QuizsolveScreen.css';
import { useState, useEffect } from 'react';
import { } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import { Link } from 'react-router-dom';



const QuizsolveScreen = () => {

    const [login, setLogin] = useState(true);

    const removetoken = (e) => {
        localStorage.removeItem('token');
        alert("로그아웃됨");
    }


    useEffect(() => {
        const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).token : null;
        axios.post(("http://10.156.147.202:3000/api/user/login"), {
            headers: token
        }).then(result => {
            console.log(result.status);
            if (result.status === 200) {
                setLogin(true);
                alert("로그인 성공!");
            }
            else {
                setLogin(false);
                alert("로그인 실패");
            }
        }).catch(error => console.log(error))
    }, []);


    return (
        <div>
            {login ? <Button className="buttons" onClick={removetoken} type="primary"><Link to="/login">로그아웃</Link></Button> : <Button className="buttons" type="primary"><Link to="/login">로그인</Link></Button>}
            {login ? <p id="font">도전할 단계를 선택하세요</p> : null}
            {login ? <ul><div id="stage"><Link to="/level1"><p id="stage-font">Level 1</p></Link></div><div id="stage"><Link to="level2"><p id="stage-font">Level 2</p></Link></div><div id="stage"><Link to="level3"><p id="stage-font">Level 3</p></Link></div></ul> : null}
        </div>
    );
};

export default QuizsolveScreen;