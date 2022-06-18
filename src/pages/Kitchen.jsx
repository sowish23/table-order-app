import React, { useState, useEffect } from "react";
import "./Kitchen.css"
import axios from "axios"

const Kitchen = () => {
    const LAMBDA_URL = '' //lambda api gate post url
    const [order, setOrder] = useState([
        {
            tableno : 8,
            orderList : "떡볶이"
        },
        {
            tableno : 7,
            orderList : "타코야끼"
        },
        {
            tableno : 3,
            orderList : "떡볶이, 타코야끼"
        },
        {
            tableno : 5,
            orderList : "떡볶이"
        }
    ])

    const getOrder = () => {
        axios.get(LAMBDA_URL)
        .then((res) => {
            console.log(res)
            setOrder(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getOrder()
    }, [])

    return(
        <div className="kitchen_screen">
            <div className="kitchen_top">
                <div>
                    주문리스트
                </div>
            </div>
            <div className="kitchen_content">
                {
                    order.map((e, i) => {
                        return(
                            <div className="kitchen_list" key={i}>
                                <div className="kitchen_item">
                                    <div className="kitchen_list_no">No.{e.tableno}</div>
                                    <div className="kitchen_list_title">{e.orderList}</div>
                                </div>
                                <div className="kitchen_list_btn">
                                    <button>조리완료</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Kitchen;