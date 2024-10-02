import React from "react";
import vn from "../assets/images/vietnam.svg";
import ko from "../assets/images/korea.svg";
import { useNavigate } from "react-router";
export default function Header(props) {
    const { setLan } = props;
    const navigate = useNavigate();
    const handleClick = (e) => {
        const { id } = e.target;
        setLan(id);
    }
    return (
        <div className="header-container">
            <span onClick={() => {
                navigate("/");
            }}>MBTI</span>
            <div>
                <img src={ko} alt="ko" id="ko" title="Korean" className="lan-btn" onClick={(e) => handleClick(e)} />
                <img src={vn} alt="vn" id="vn" title="Vietnamese" className="lan-btn" onClick={(e) => handleClick(e)} />
            </div>
        </div>
    )
}