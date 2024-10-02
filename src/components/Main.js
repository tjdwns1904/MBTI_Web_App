import React from "react";
import mbti from "../assets/images/mbti.jpg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Main(props) {
    const { t, setLan } = props;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/test");
    }
    return (
        <>
            <Header setLan={setLan}/>
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