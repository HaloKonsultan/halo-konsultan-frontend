import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import PrimaryButton from "./ButtonPrimary";
import {ContextProfile} from "../context/ContextProfile";

const {Option} = Select;

function ModalChooseAccount(props) {
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
                title="Pilih Rekening Tujuan"
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
                        label="Sebelum mengakhiri konsultasi silakan pilih rekening untuk pengiriman pembayaran"
                        name="bank"
                        rules={[
                            {
                                required: true,
                                message: 'Masukkan rekening tujuan!',
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            onChange={props.onChange}
                            bordered={false}
                            style={{borderRadius: 8, overflow: "hidden", boxShadow: "0 0 0 1px #CED4DA"}}
                            placeholder="Pilih Rekening"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                input.consultant_virtual_account && (
                                    <>
                                        {input.consultant_virtual_account.map((e, index) => {
                                            return (
                                                <>
                                                    <Option value={[e.bank, e.name, e.card_number]}>{e.name} - {e.card_number} ({e.bank})</Option>
                                                </>
                                            )
                                        })}
                                    </>
                                )
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <PrimaryButton htmlType="submit" text="Selesaikan Konsultasi"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalChooseAccount