import React from "react"
import {Button, Form, Input, Modal} from "antd";

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
                        label="Judul Dokumen"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input document title!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item
                        label="Deskripsi Dokumen"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input document description!',
                            },
                        ]}
                    >
                        <TextArea style={{borderRadius: 8}} rows={4} name="description"/>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            size="large"
                            className="button"
                            type="primary" block
                            style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                            htmlType="submit">
                            Tambahkan Dokumen
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalAddDocument