import React from "react"
import {Form, Input, Modal} from "antd";
import InputText from "./InputText";
import ButtonPrimary from "./ButtonPrimary";
import LabelText from "./LabelText";

const {TextArea} = Input;

function ModalAddDocument(props) {

    return (
        <>
            <Modal
                destroyOnClose={true}
                className="profile-modal"
                title="Tambahkan Dokumen"
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
                        label={<LabelText text="Judul Dokumen" />}
                        name="title"
                        required={false}
                        rules={[
                            {
                                required: true,
                                message: 'Silahkan isi judul dokumen.',
                            },
                        ]}
                    >
                        <InputText/>
                        {/*<Input style={{borderRadius: 8}}/>*/}
                    </Form.Item>

                    <Form.Item
                        label={<LabelText text="Deskripsi Dokumen" />}
                        name="description"
                        required={false}
                        rules={[
                            {
                                required: true,
                                message: 'Silahkan isi deskripsi dokumen.',
                            },
                        ]}
                    >
                        <TextArea style={{borderRadius: 8}} rows={6} name="description"/>
                    </Form.Item>

                    <Form.Item>
                        <ButtonPrimary text="Tambahkan Dokumen" htmlType="submit"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalAddDocument