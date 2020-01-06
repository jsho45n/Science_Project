import React, { useEffect, useState } from 'react';
import Quizitem from './Quizitem';
import axios from 'axios';




const QuizLevelone = () => {
    const [chooseArray, setchooseArray] = useState(null);
    const [loading, setLoading] = useState(null);
    const [index, setIndex] = useState(0);


    const next = () => {
        setIndex(index + 1);

    }


    useEffect(() => {
        const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
        const fetchData = async () => {
            console.log("요청함.");
            setLoading(true);
            try {
                const response = await axios.post(('http://10.156.147.202:3000/api/question/upload'),
                    {
                        level: "1"
                    },
                    {
                        headers: {
                            'x-access-token': token
                        }
                    });
                setchooseArray(response.data.chooseArray);
                console.log(response);
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

    if (!chooseArray) {
        return null;
    }



    return (
        <div>
            <Quizitem number={index} key={index} chooseArray={chooseArray} next={next} />
        </div>
    );
};


export default QuizLevelone;
