import React from "react"
import {Typography} from "antd";
import InputText from "./InputText";

const {Text} = Typography;

function LabelText(props) {

    return (
        <>
            <Text style={{fontSize: props.fontSize, color: props.fontColor}}>{props.text}</Text>
        </>
    )
}

LabelText.defaultProps = {
    fontSize: 14,
    fontColor: "#7A7D81"
};

export default LabelText