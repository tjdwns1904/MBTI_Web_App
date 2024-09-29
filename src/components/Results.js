import React from "react";
import { ENFJ, ENFP, ENTJ, ENTP, ESFJ, ESFP, ESTJ, ESTP, INFJ, INFP, INTJ, INTP, ISFJ, ISTJ, ISTP, ISFP } from '../assets/index';
import { useNavigate } from "react-router";

export default function Results(props) {
    const { t, result } = props;
    const navigate = useNavigate();
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
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className="result-container">
            <img src={imgUrls[result]} alt="" />
            <p>{t(result.toLowerCase())}</p>
            <button className="blue-btn" onClick={handleClick}>{t('toMenu')}</button>
        </div>
    )
} 