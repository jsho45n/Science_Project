import './QuizStartScreen.css';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const QuizStartScreen = () => {
    
    const showdirector = () => {
        alert("만든 이 : 전세훈, 유명철, 양승빈");
    }
    
    return (
        <div>
            <p>Funny Science Quiz (FSQ)</p>
            <Button className="button" type="primary" onClick={showdirector}>
                <Link to="/login">과학퀴즈시작하기</Link>
            </Button>
        </div>
    );
};


export default QuizStartScreen;
