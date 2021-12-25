import React from "react"
import {Button} from "antd";

function ButtonPrimary(props) {

    return (
        <>
            <Button
                block
                form={props.form}
                onClick={props.onClick}
                value={props.value}
                className="button"
                type="primary"
                htmlType={props.htmlType}
                style={{
                    height: 44,
                    borderRadius: 8,
                    backgroundColor: props.backgroundColor,
                    width: "100%",
                    color: props.textColor
                }}>
                {props.text}
            </Button>
        </>
    )
}

ButtonPrimary.defaultProps = {
    backgroundColor: "#3B85FA"
};

export default ButtonPrimary