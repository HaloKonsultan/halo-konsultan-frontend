import React from "react"
import {Input} from 'antd';

function InputText(props) {

    return (
        <>
            <Input style={{borderRadius: 8, height: 48, backgroundColor: "#F4F4F4", border: "none"}}
                   type={props.type}
                   name={props.name}
                   onChange={props.onChange}
                   placeholder={props.placeholder}
                   value={props.value}
                   id={props.id}
                   required={props.required}
                   validationErrors={{
                       isDefaultRequiredValue: 'Field is required'
                   }}
            />
        </>
    )
}

InputText.defaultProps = {
    type: 'text',
    required: true
};

export default InputText