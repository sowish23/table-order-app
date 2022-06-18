import React, { useState } from "react";
import "./Order.css"
import foodImg from "../imgs/img1.jpeg"
import foodImg2 from "../imgs/img2.jpeg"
import axios from "axios"

const Order = () => {
    const LAMBDA_URL = '' //lambda api gate post url
    const [order, setOrder] = useState([])
    const postOrder = () => {
        axios.post(LAMBDA_URL, {
            order
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div className="order_screen">
            <div className="order_top">
                <div>
                    Table No.8
                </div>
            </div>
            <div className="order_content">
                <div className="order_list">
                    <div className="order_img">
                        <img src={foodImg} alt=""/>
                    </div>
                    <div className="order_name">타코야끼</div>
                    <div className="order_btn">
                        <button onClick={() => {
                            setOrder(["타코야끼"])
                        }}>선택하기</button>
                    </div>
                </div>
                <div className="order_list">
                    <div className="order_img">
                        <img src={foodImg2} alt=""/>
                    </div>
                    <div className="order_name">떡볶이</div>
                    <div className="order_btn">
                        <button onClick={() => {
                            setOrder(["떡볶이"])
                        }}>선택하기</button>
                    </div>
                </div>
            </div>
            <div className="order_tablelist">
                <div className="order_tablelist_list">
                    {
                        order.map((e, i) => {
                            return(
                                <div className="order_tablelist_item" key={i}>
                                    <div>{e}</div>
                                    <div className="order_tablelist_x" onClick={()=> setOrder([])}>X</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="order_tablelist_btn">
                    <button onClick={() => postOrder()}>주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Order;