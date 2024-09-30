import React, { useState } from "react";
import { ENFJ, ENFP, ENTJ, ENTP, ESFJ, ESFP, ESTJ, ESTP, INFJ, INFP, INTJ, INTP, ISFJ, ISTJ, ISTP, ISFP } from '../assets/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

export default function Types(props) {
    const { t, setLan } = props;
    const [idx, setIdx] = useState(0);
    const types = [
        { name: "ENFP", imgUrl: ENFP },
        { name: "ENFJ", imgUrl: ENFJ },
        { name: "ENTJ", imgUrl: ENTJ },
        { name: "ENTP", imgUrl: ENTP },
        { name: "ESFJ", imgUrl: ESFJ },
        { name: "ESFP", imgUrl: ESFP },
        { name: "ESTJ", imgUrl: ESTJ },
        { name: "ESTP", imgUrl: ESTP },
        { name: "INFJ", imgUrl: INFJ },
        { name: "INFP", imgUrl: INFP },
        { name: "INTJ", imgUrl: INTJ },
        { name: "INTP", imgUrl: INTP },
        { name: "ISFJ", imgUrl: ISFJ },
        { name: "ISTJ", imgUrl: ISTJ },
        { name: "ISTP", imgUrl: ISTP },
        { name: "ISFP", imgUrl: ISFP }
    ];

    const handleDecrease = () => {
        if(idx === 0)setIdx(types.length - 1);
        else setIdx(idx - 1);
    }
    const handleIncrease = () => {
        setIdx((idx + 1) % types.length);
    }
    return (
        <>
            <Header setLan={setLan}/>
            <div className="type-container">
                <p>
                    <span onClick={handleDecrease}><FontAwesomeIcon icon={faChevronLeft} /></span> <strong>{idx + 1} / 16</strong> <span onClick={handleIncrease}><FontAwesomeIcon icon={faChevronRight} /></span>
                </p>
                <img src={types[idx].imgUrl} />
                <h2>{types[idx].name}</h2>
                <p>{t(types[idx].name.toLowerCase())}</p>
            </div>
        </>
    )
} 