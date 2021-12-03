import React, {useContext, useState} from "react"
import {useHistory, useLocation} from "react-router-dom"
import {Button, Layout, PageHeader, Row, Col, Modal, Typography, Space} from 'antd';
import {ContextProfile} from "../context/ContextProfile"


const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;
const NavMessage = (props) => {
    let history = useHistory()
    const location = useLocation();

    const {input} = useContext(ContextProfile)
    const [isSkillVisible, setIsSkillVisible] = useState(false);

    const showSkillModal = () => {
        setIsSkillVisible(true);
    };

    const handleCancel = () => {
        setIsSkillVisible(false);
    };

    return (
        <>
            <Layout>
            {
                    <PageHeader
                        onBack={props.onBack}
                        style={{backgroundColor: "white", borderBottom: " 1px solid #CED4DA"}}
                        title={props.title}
                        extra={[
                            <Button  key="1" size="large"
                            danger 
                            style= {{borderRadius: 8}}
                            onClick={showSkillModal}>
                                    <Row>
                                        <Col span={12}>Akhiri Diskusi</Col>
                                    </Row>
                          </Button>
                        ]}
                    />
                }

                <Modal
                destroyOnClose={true}
                visible={isSkillVisible}
                onCancel={handleCancel}
                footer={null}
                style={{width: 280, height:232}}
               
            >
                 <Text strong>Apakah Anda ingin 
                 mengakhiri percakapan ini?</Text><br/><br/>
                 <Space size={15} direction="vertical">
                 <Button type="primary"style={{width:232, borderRadius: 8}}>Lanjutkan Percakapan</Button>
                 <Button danger
                 style={{width:232, borderRadius: 8}}> Akhiri Diskusi
                          </Button>
                          </Space>
                

                       
            </Modal>
            
            </Layout>
        </>
    )
}

export default NavMessage