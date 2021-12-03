import React, {useContext, useEffect, useState} from "react";
import { Form, Input, Modal, Select} from "antd";
import PrimaryButton from "./ButtonPrimary";
import {ContextProfile} from "../context/ContextProfile";

const {Option} = Select;

function ModalVirtualAccount(props) {
    const {input, setInput, functions} = useContext(ContextProfile)
    const {fetchData, functionEditProfile} = functions
    const [isAccountVisible, setIsAccountVisible] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Modal
                className="profile-modal"
                title="Tambahkan Rekening"
                visible={props.visible}
                onCancel={props.onCancel}
                footer={null}
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={props.onFinish}
                    onFinishFailed={props.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nama Bank"
                        name="bank"
                        rules={[
                            {
                                required: true,
                                message: 'Please input bank name!',
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            bordered={false}
                            style={{borderRadius: 8, overflow: "hidden", boxShadow: "0 0 0 1px #CED4DA"}}
                            placeholder="Pilih bank"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="BRI">BRI</Option>
                            <Option value="BNI">BNI</Option>
                            <Option value="BCA">BCA</Option>
                            <Option value="BSI">BSI</Option>
                            <Option value="MANDIRI">MANDIRI</Option>
                            <Option value="MAYBANK">MAYBANK</Option>
                            <Option value="CITIBANK">CITIBANK</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Nomor Rekening"
                        name="card_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input rekening number!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item
                        label="Nama Pemegang Rekening"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input rekening name!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item>
                        <PrimaryButton htmlType="submit" text="Tambahkan Rekening"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalVirtualAccount