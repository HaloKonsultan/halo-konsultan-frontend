import React, {useContext, useState} from "react"
import {useHistory, useLocation} from "react-router-dom"
import Cookies from "js-cookie";
import {Button, Layout, PageHeader, Row, Col, Modal, Typography, Space} from 'antd';
import {ContextProfile} from "../context/ContextProfile"

const {Text, Title} = Typography;
const NavMessage = (props) => {
    const {functions} = useContext(ContextMessage)
    const {functionEndForum} = functions
    const [isEndForum, setIsEndForum] = useState(false);

    const showModal = () => {
        setIsEndForum(true);
    };

    const handleCancel = () => {
        setIsEndForum(false);
    };

    const onFinish = () => {
        functionEndForum()
        setIsEndForum(false);
    };
    

    return (
        <>
            <Layout>
            {
             Cookies.get('token') !== undefined &&
                    <PageHeader
                        onBack={props.onBack}
                        style={{backgroundColor: "white", borderBottom: " 1px solid #CED4DA", width:"100%"}}
                        title={props.title}
                        extra={[
                            <Button  key="1" size="large"
                            danger 
                            style= {{borderRadius: 8}}
                            onClick={showModal}>
                                    <Row>
                                        <Col span={12}>Akhiri Diskusi</Col>
                                    </Row>
                          </Button>
                        ]}
                    />
                }

                <Modal
                    className="profile-modal"
                    title={<Title level={4}>Apakah Anda ingin mengakhiri percakapan ini ?</Title>}
                    visible={isEndForum}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={onFinish}
                        //onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item>
                            <Row>
                                <Col span={12}>
                                    <div style={{marginRight: 4}}>
                                        <PrimaryButton onClick={handleCancel} text="Lanjutkan Percakapan"/>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div style={{marginLeft: 4}}>
                                        <ButtonDanger htmlType="submit" text="Akhiri Diskusi"/>
                                    </div>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Modal>
            
            </Layout>
        </>
    )
}

export default NavMessage