import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunnctionalComponent from "./Pembahasan/FunctionComponent";

export default class Component extends React.Component{
    render(){
        return(
            <div>
                <ClassComponent title="Class Component"/>
                <FunnctionalComponent title="Function Component"/>
            </div>
        )
    }
}