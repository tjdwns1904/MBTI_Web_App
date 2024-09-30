import React, { useEffect, useState } from "react";
import { ENFJ, ENFP, ENTJ, ENTP, ESFJ, ESFP, ESTJ, ESTP, INFJ, INFP, INTJ, INTP, ISFJ, ISTJ, ISTP, ISFP } from '../assets/index';
import { useNavigate } from "react-router";

export default function Results(props) {
    const { t, answers } = props;
    const navigate = useNavigate();
    const [ result, setResult ] = useState("");
    const scoring = {
        'q1A': 'E', 'q1B': 'I', 'q2A': 'S', 'q2B': 'N', 'q3A': 'S', 'q3B': 'N', 'q4A': 'T', 'q4B': 'F', 'q5A': 'T', 'q5B': 'F', 'q6A': 'J', 'q6B': 'P', 'q7A': 'J', 'q7B': 'P',
        'q8A': 'E', 'q8B': 'I', 'q9A': 'S', 'q9B': 'N', 'q10A': 'S', 'q10B': 'N', 'q11A': 'T', 'q11B': 'F', 'q12A': 'T', 'q12B': 'F', 'q13A': 'J', 'q13B': 'P', 'q14A': 'J', 'q14B': 'P',
        'q15A': 'E', 'q15B': 'I', 'q16A': 'S', 'q16B': 'N', 'q17A': 'S', 'q17B': 'N', 'q18A': 'T', 'q18B': 'F', 'q19A': 'T', 'q19B': 'F', 'q20A': 'J', 'q20B': 'P', 'q21A': 'J', 'q21B': 'P',
        'q22A': 'E', 'q22B': 'I', 'q23A': 'S', 'q23B': 'N', 'q24A': 'S', 'q24B': 'N', 'q25A': 'T', 'q25B': 'F', 'q26A': 'T', 'q26B': 'F', 'q27A': 'J', 'q27B': 'P', 'q28A': 'J', 'q28B': 'P',
        'q29A': 'E', 'q29B': 'I', 'q30A': 'S', 'q30B': 'N', 'q31A': 'S', 'q31B': 'N', 'q32A': 'T', 'q32B': 'F', 'q33A': 'T', 'q33B': 'F', 'q34A': 'J', 'q34B': 'P', 'q35A': 'J', 'q35B': 'P',
        'q36A': 'E', 'q36B': 'I', 'q37A': 'S', 'q37B': 'N', 'q38A': 'S', 'q38B': 'N', 'q39A': 'T', 'q39B': 'F', 'q40A': 'T', 'q40B': 'F', 'q41A': 'J', 'q41B': 'P', 'q42A': 'J', 'q42B': 'P',
        'q43A': 'E', 'q43B': 'I', 'q44A': 'S', 'q44B': 'N', 'q45A': 'S', 'q45B': 'N', 'q46A': 'T', 'q46B': 'F', 'q47A': 'T', 'q47B': 'F', 'q48A': 'J', 'q48B': 'P', 'q49A': 'J', 'q49B': 'P',
        'q50A': 'E', 'q50B': 'I', 'q51A': 'S', 'q51B': 'N', 'q52A': 'S', 'q52B': 'N', 'q53A': 'T', 'q53B': 'F', 'q54A': 'T', 'q54B': 'F', 'q55A': 'J', 'q55B': 'P', 'q56A': 'J', 'q56B': 'P',
        'q57A': 'E', 'q57B': 'I', 'q58A': 'S', 'q58B': 'N', 'q59A': 'S', 'q59B': 'N', 'q60A': 'T', 'q60B': 'F', 'q61A': 'T', 'q61B': 'F', 'q62A': 'J', 'q62B': 'P', 'q63A': 'J', 'q63B': 'P',
        'q64A': 'E', 'q64B': 'I', 'q65A': 'S', 'q65B': 'N', 'q66A': 'S', 'q66B': 'N', 'q67A': 'T', 'q67B': 'F', 'q68A': 'T', 'q68B': 'F', 'q69A': 'J', 'q69B': 'P', 'q70A': 'J', 'q70B': 'P',
    }
    const imgUrls = {
        ENFJ: ENFJ,
        ENFP: ENFP,
        ENTJ: ENTJ,
        ENTP: ENTP,
        ESFJ: ESFJ,
        ESFP: ESFP,
        ESTJ: ESTJ,
        ESTP: ESTP,
        INFJ: INFJ,
        INFP: INFP,
        INTJ: INTJ,
        INTP: INTP,
        ISFJ: ISFJ,
        ISTJ: ISTJ,
        ISTP: ISTP,
        ISFP: ISFP
    }
    const calculate = () => {
        if (result.length > 4) return;
        let scores = {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        }
        for(let i = 1; i <= 70; i++){
            scores = { ...scores, [scoring[answers[i]]]: scores[scoring[answers[i]]] + 1 };
        }
        let newResult = "";
        if (scores.E <= scores.I) {
            newResult += 'I';
        } else {
            newResult += 'E';
        }
        if (scores.S <= scores.N) {
            newResult += 'N';
        } else {
            newResult += 'S';
        }
        if (scores.T <= scores.F) {
            newResult += 'F';
        } else {
            newResult += 'T';
        }
        if (scores.J <= scores.P) {
            newResult += 'P';
        } else {
            newResult += 'J';
        }
        setResult(newResult);
    }

    const handleClick = () => {
        navigate("/");
    }

    useEffect(() => {
        calculate();
    }, [])

    return (
        <div className="result-container">
            <img src={imgUrls[result]} alt="" />
            <p>{t(result.toLowerCase())}</p>
            <button className="blue-btn" onClick={handleClick}>{t('toMenu')}</button>
        </div>
    )
} 