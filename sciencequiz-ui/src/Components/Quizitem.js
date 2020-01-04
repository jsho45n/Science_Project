import React, { useState } from 'react';
import './Quizitem.css';
import { withRouter } from 'react-router-dom';

const QuizLevelone = ({ quizes, history }) => {

    const [answer, setAnswer] = useState('');
    const { qesname, qesContent, qesimg, qesAnswer } = quizes;

    var correctanswer = 0;
    var quizlength = 0;

    const handlesubmit = (event) => {
        setAnswer(event.target.value);
        if (answer === { qesAnswer }) {
            correctanswer = correctanswer + 1;
            quizlength = quizlength + 1;
        }
        if (quizlength === 10) {
            alert("수고하셨습니다! 모든 문제를 푸셨습니다!");
            alert("당신이 맞은 문제의 개수는 ? : ", { correctanswer }, "/10");
            history.push('/quiz');
        }
        else {
            quizlength = quizlength + 1;
        }
    }


    return (
        <div>
            <form action="http://10.156.147.202:3000/api/question/upload" method="post" onSubmit={handlesubmit}>
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
                        <ul class="answers">
                            <button type="submit" value={qesContent}>1</button>{qesContent}
                            <br />
                            <br />
                            <button type="submit" value={qesContent}>2</button>{qesContent}
                            <br />
                            <br />
                            <button type="submit" value={qesContent}>3</button>{qesContent}
                            <br />
                            <br />
                            <button type="submit" value={qesContent}>4</button>{qesContent}
                            <br />
                            <br />
                        </ul>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default withRouter(QuizLevelone);
