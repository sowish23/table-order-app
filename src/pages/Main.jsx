import React, { } from "react";
import "./Main.css"
import logo from "../imgs/dining-table.png"
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    return(
        <div className="main_screen">
            <div className="main_content">
                <div className="main_title">
                    <div>환영합니다!</div>
                    <div>테이블오더입니다.</div>
                </div>
                <div className="main_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="main_orderbtn">
                    <button onClick={() => navigate('/order')}>주문하기</button>
                </div>

            </div>
        </div>
    )
}

export default Main;