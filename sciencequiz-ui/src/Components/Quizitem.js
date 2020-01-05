import React, { useState, useEffect } from 'react';
import './Quizitem.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const QuizLevelone = ({ chooseArray, history }) => {

    const [answer, setAnswer] = useState({ answer: '' });
    const [quesname, setQuesname] = useState({ quesname: '' });
    const { qesname, qesContent, qesimg } = chooseArray[0];
    var i = chooseArray[0];
    var correctanswer = 0;
    var quizlength = 0;

    const answerhandleChange = (event) => {
        setAnswer({ Answer: event.target.value })
        setQuesname({ qesname: event.target.name })
    }

    const handlesubmit = e => {
        console.log(quesname.qesname);
        console.log(answer.Answer);
        axios.post(("http://10.156.147.202:3000/api/question/check"), {
            qesname: quesname.qesname,
            Answer: answer.Answer
        }).then(result => {
            console.log(result);
            if (result.status === 200) {
                correctanswer = correctanswer + 1;
                quizlength = quizlength + 1;
                i = i + 1;
            }
            if (quizlength === chooseArray.length) {
                alert("수고하셨습니다! 모든 문제를 푸셨습니다!");
                alert("당신이 맞은 문제의 개수는 ? : ", { correctanswer });
                history.push('/quiz');
            }
            else {
                quizlength = quizlength + 1;
                i = i + 1;
            }
        }).catch(error => console.log(error))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handlesubmit(e);
        }
    }

    useEffect(() => {
        console.log(chooseArray);
    }, []);

    return (
        <div>
            <div className="quizview">
                {qesimg && (
                    <div className="quizimage">
                        <img src={qesimg} alt="quizimage" />
                    </div>
                )}
                <div className="contents">
                    <h2>{qesname}</h2>
                    <br />
                    <br />
                    <h2>{qesContent}</h2>
                    <input name={qesname} className="inputanswer" type="text" onChange={answerhandleChange} onKeyPress={handleKeyPress} />
                </div>
            </div>
        </div >
    );
};

export default withRouter(QuizLevelone);
