import React from "react";
import './image.css';

// 定义一个对象
const dengZh = {
    name : 'Dengzh',
    behavior: 'todoList',
    cssStyle: {
        backgrouondColor: 'gray',
        color: 'black'
    }
};


// 使用 {} 读取对象的值
export default function TodoList() {
    return (
        <div style={dengZh.cssStyle}>  
        <h1>{dengZh.name} {dengZh.behavior}! Dec 8th,2023</h1>
        <img 
        className="imageStyle"
        src="https://pic4.zhimg.com/80/v2-8248be2cedc0e01d6669d87dd6872667_720w.webp"
        alt="Study"
        />
        <ul className="num">
            <li> Learn React!</li>
            <li> read article!</li>
            <li> Observe Marx!</li>
        </ul>

        </div>

    )
}
