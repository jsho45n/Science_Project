import './QuizStartScreen.css';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const QuizStartScreen = () => {
    return (
        <div>
            <p>과학퀴즈 누가누가 더 빨리 풀까?</p>
            <Button className="button" type="primary">
                <Link to="/login">과학퀴즈시작하기</Link>
            </Button>
        </div>
    );
};


export default QuizStartScreen;