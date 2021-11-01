import React from "react"
import {Button} from "antd";

function ButtonDanger(props) {

    return (
        <>
            <Button
                block
                onClick={props.onClick}
                value={props.value}
                size="large"
                className="button"
                type="default"
                style={{height: 44, borderRadius: 8}} danger>
                {props.text}
            </Button>
        </>
    )
}

export default ButtonDanger