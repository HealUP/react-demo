import React from "react";


export default function PackList() {
    return (
        <section>
            <h1>
                Get rid of bad habit List
            </h1>
            <ul>
            <Item isPacked={true}
                name="交接工作">
            </Item>
            <Item isPacked={true}
                name="归还物资">
            </Item>
            <Item isPacked={false}
                name="smocking">
            </Item></ul>
        </section>
    );
}


function Item({ isPacked, name }) {

    // if (isPacked) {
    //     return <li>{name} ✔</li>;
    // }
    // return <li>{name} ❗</li>;

    // 三目运算符
    return <li>
        {isPacked ? name + "✔" : name}
    </li>
}
