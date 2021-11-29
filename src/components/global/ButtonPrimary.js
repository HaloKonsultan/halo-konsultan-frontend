import React from "react"
import {Button} from "antd";

function DangerButton(props) {

    return (
        <>
            <Button
                block
                form={props.form}
                onClick={props.onClick}
                value={props.value}
                size="large"
                className="button"
                type="primary"
                htmlType={props.htmlType}
                style={{height: 44, borderRadius: 8, backgroundColor: "#3B85FA"}}>
                {props.text}
            </Button>
        </>
    )
}

export default DangerButton