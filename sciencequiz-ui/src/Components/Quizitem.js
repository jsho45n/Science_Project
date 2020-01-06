import React, { useState } from 'react';
import './Quizitem.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Input } from 'antd';
var correctanswer = 0;
var quizlength = 0;

const Quizitem = ({ next, chooseArray, history, number }) => {

    const [answer, setAnswer] = useState({ answer: '' });
    const [quesname, setQuesname] = useState({ quesname: '' });
    const { qesname, qesContent, qesimg } = chooseArray[number];



    const answerhandleChange = (event) => {
        setAnswer({ Answer: event.target.value })
        setQuesname({ qesname: event.target.name })
    }


    const handlesubmit = e => {
        console.log(chooseArray);
        console.log(quesname.qesname);
        console.log(answer.Answer);
        console.log(quizlength);
        console.log(correctanswer);
        axios.post(("http://10.156.147.202:3000/api/question/check"), {
            qesname: quesname.qesname,
            Answer: answer.Answer
        }).then(result => {
            console.log(result);
            console.log(result.status)
            if (result.status === 200) {
                correctanswer = correctanswer + 1;
                console.log(correctanswer);
                quizlength = quizlength + 1;
                console.log(quizlength);
                next();
            }
            else if (result.status === 201) {
                quizlength = quizlength + 1;
                console.log('틀림');
                console.log(quizlength);
                next();
            }
            if (quizlength === chooseArray.length) {
                alert("모든 문제를 풀었습니다!");
                alert(`당신이 맞힌 문제의 개수는? : ${correctanswer}`);
                window.location.href = "/quiz";
            }
        }).catch(error => console.log(error))
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handlesubmit();
            next();
        }
    }



    return (
        <div>
            <div className="quizview">
                {qesimg && (
                    <div className="quizimage">
                        <img src={qesimg} alt="quizimage" />
                    </div>
                )}
                <div className="contents">
                    <h1>{qesname}</h1>
                    <br />
                    <br />
                    <h2>{qesContent}</h2>
                    <Input name={qesname} className="inputanswer" type="text" onChange={answerhandleChange} onKeyPress={handleKeyPress} placeholder="정답은?" />
                </div>
            </div>
        </div >
    );
};

export default withRouter(Quizitem);
