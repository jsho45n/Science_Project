import React, { useEffect, useState } from 'react';
import Quizitem from './Quizitem';
import axios from 'axios';



const QuizLevelthree = () => {
    const [quizes, setQuiz] = useState(null);
    const [loading, setLoading] = useState(false);




    useEffect(() => {
        const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(('https://10.156.147.202:3000/api/question/upload'), {
                    headers: token,
                    level: 3,
                });
                setQuiz(response.data.quizes);
            }
            catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        alert("로딩중...");
        return null;
    }

    if (!quizes) {
        return null;
    }

    return (
        <div>
            <Quizitem key={quizes.qesname} quizes={quizes} />
        </div>
    );
};


export default QuizLevelthree;
