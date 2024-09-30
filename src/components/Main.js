import React from "react";
import vn from "../assets/vietnam.svg";
import ko from "../assets/korea.svg";
import mbti from "../assets/mbti.jpg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Main(props) {
    const { t, setLan } = props;
    const navigate = useNavigate();
    const handleClick = (e) => {
        const { id } = e.target;
        setLan(id);
    }
    const handleNavigate = () => {
        navigate("/test");
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
            <div className="body-container">
                <img src={mbti} alt=""/>
                <h2>{t('name')}</h2>
                <p>{t('intro')}</p>
                <button className="blue-btn" onClick={handleNavigate}>{t('start')}</button>
                <Link to={"/types"}>{t('about')}</Link>
            </div>
        </>
    )
} 