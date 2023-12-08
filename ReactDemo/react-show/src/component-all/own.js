import MyButton from "../update/updateUI";
import Gallery from "../describe-ui/component";
import React from "react";
import TodoList from "../jsx/jsxdemo";
import Profile from "../props/props-demo";
import PackList from "../ifDemo/if-demo";

function OwnComponent() {
    return(
        <div>
        <MyButton/>
        <Gallery/>
        <TodoList/>
        <Profile/>
        <PackList/>
        </div>
    );
}


export default OwnComponent;