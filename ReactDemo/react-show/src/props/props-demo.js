
//props 是 组件的唯一参数！它的作用跟函数的参数相同--事实上！


import React, { Children } from "react";
import "../jsx/image.css";

//写法一：（更加清晰）父组件给子组件传递值
export default function Profile() {
    return (
        <Card>
            <Avtar
            person={{
                name:'xiaolin',
                old:'22',
                address:'Guangzhou-LEGO'
            }}
            size={150}
            />
        </Card>
    );
}

//写法二：（使用展开）父组件给子组件传递值
// export default function Profile(props) {
//     return (
//         <Card>
//             <Avtar{...props}/>
//         </Card>
//     );
// }



// 这里通过props接收传递的JSX
function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

//写法一：这里通过props接收父组件传递的对象、属性  size  指定默认值
function Avtar({ person, size = 100 }) {
    return (
        <img
        className="imageStyle"
        src="https://www.xiaolincoding.com/logo.png"
        alt={person.name}
        width={size}
        height={size}
        ></img>
    );
}

// 写法二：解构
function Avtar2(props) {
    return (
        <img
        className="imageStyle"
        src="https://www.xiaolincoding.com/logo.png"
        alt={props.person.name}
        width={props.size}
        height={props.size}
        ></img>
    );
}