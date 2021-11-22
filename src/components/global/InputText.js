import React from "react"
import {Input} from 'antd';

function InputText(props) {

    return (
        <>
            <Input style={{borderRadius: 8, height: 48}}
                   type={props.type}
                   name={props.name}
                   onChange={props.onChange}
                   placeholder={props.placeholder}
                   value={props.value}
                   id={props.id}
                   required
            />
        </>
    )
}

InputText.defaultProps = {
    type: 'text',
};

export default InputText