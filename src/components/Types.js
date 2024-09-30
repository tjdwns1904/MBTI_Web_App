import React, { useState } from "react";
import { ENFJ, ENFP, ENTJ, ENTP, ESFJ, ESFP, ESTJ, ESTP, INFJ, INFP, INTJ, INTP, ISFJ, ISTJ, ISTP, ISFP } from '../assets/index';
import vn from "../assets/vietnam.svg";
import ko from "../assets/korea.svg";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Types(props) {
    const { t, setLan } = props;
    const [idx, setIdx] = useState(0);
    const navigate = useNavigate();
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

    const handleClick = (e) => {
        const { id } = e.target;
        setLan(id);
    }
    const handleDecrease = () => {
        if(idx == 0)setIdx(types.length - 1);
        else setIdx(idx - 1);
    }
    const handleIncrease = () => {
        setIdx((idx + 1) % types.length);
    }
    return (
        <>
            <div className="header-container">
                <span onClick={() => {
                    navigate("/");
                }}>MBTI</span>
                <div>
                    <img src={ko} alt="ko" id="ko" title="Korean" className="lan-btn" onClick={(e) => handleClick(e)} />
                    <img src={vn} alt="vn" id="vn" title="Vietnamese" className="lan-btn" onClick={(e) => handleClick(e)} />
                </div>
            </div>
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