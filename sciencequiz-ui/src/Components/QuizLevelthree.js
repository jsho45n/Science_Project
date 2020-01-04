import React, { useEffect, useState } from 'react';
import Quizitem from './Quizitem';
import axios from 'axios';



const QuizLevelone = () => {
    const [quizes, setQuiz] = useState(null);
    const [loading, setLoading] = useState(false);




    useEffect(() => {
        const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
        const fetchData = async () => {
            console.log("요청함.");
            setLoading(true);
            try {
                const response = await axios.get(('http://10.156.147.202:3000/api/question/upload'),
                    {
                        level: "3"
                    },
                    {
                        headers: {
                            'x-access-token': token
                        }
                    });
                setQuiz(response.data);
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


export default QuizLevelone;
