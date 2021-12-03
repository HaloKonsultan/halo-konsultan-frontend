import React, {useContext, useEffect} from "react"
import {Select} from "antd";
import {ContextProfile} from "../context/ContextProfile";

const {Option} = Select;

function SelectDropdown(props) {
    const {input, setInput, inputProvince, inputCategories, functions} = useContext(ContextProfile)
    const {fetchData, functionEditBiodata, dataCity, functionDeleteExperience, functionDeleteSkill, functionDeleteEducation} = functions

    useEffect(() => {
        fetchData()

    }, [])

    return (
        <>
            <Select
                size="large"
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                showSearch
                bordered={false}
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    border: "solid 1px #CED4DA",
                    width: "100%",
                }}
                placeholder={props.placeholder}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {props.option}
            </Select>
        </>
    )
}

export default SelectDropdown