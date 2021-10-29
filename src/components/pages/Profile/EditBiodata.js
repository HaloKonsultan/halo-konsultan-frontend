import React, {useState, useParams, useContext, useEffect} from "react";
import {Row, Col, Space, Form, Card, Typography, Modal, Input, Button, Radio, DatePicker, Select, PageHeader} from 'antd';
import "../../../assets/css/profile.css"
import Nav from "../../layout/Header";
import {CloseOutlined} from "@ant-design/icons";
import {ProfileContext} from "../../context/ProfileContext";

const {Meta} = Card;
const {Title, Text} = Typography;
const { Option } = Select;
const EditBiodata = () => {
    const {input, setInput, functions} = useContext(ProfileContext)
    const {fetchData, functionEditBiodata, provinces} = functions

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const showSkillModal = () => {
        setIsSkillVisible(true);
    };

    const showHistoryModal = () => {
        setIsHistoryVisible(true);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
        setIsSkillVisible(false);
        setIsHistoryVisible(false);
    };

    const [value, setValue] = React.useState(1);
    
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };   

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name
        console.log("tesvalue " + typeOfValue)
        console.log("tesname " + name)

        // setInput({ ...input, [name]: typeOfValue })
    };
  
    const onFinish = (values) => {
        console.log('Success:', values);
        let documentInput = input.document.push(values)
        setInput({...input, documentInput})

        console.log(input)
        setIsExperienceVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const deleteInput = (event) => {
        let title = parseInt(event.currentTarget.value)
        var index = input.document.indexOf(title);

        input.document.splice(index, 1);
        console.log(input)
    }
    const deleteInputData = (event) => {
        let title = event.target.name
        console.log(title)
        let index = input.document.indexOf(title);

        console.log(index)
        input.document.splice(index, 1);
        console.log(input)
    }
    //   function onChange(value) {
    //     console.log(`selected ${value}`);
    //   }
      
      function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }
    const {TextArea} = Input;

    return (
        <>
            <Nav/>
            <div className="container-profile">
                <Card title="Edit Profil Diri" style={{width: 528, borderRadius: 8}}>
                <form id="2">
                    <Row>
                        <Col span={8}>
                            <img
                                src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                                alt="profile-picture"
                                style={{width: 144, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                        </Col>
                        <Col span={16}>
                            <Button style={{borderRadius: 4}}>Edit Profile</Button>
                            <h4 style={{color: "gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                            <Button style={{borderRadius: 8}} type="primary">Upload file</Button>
                        </Col>
                    </Row>

                    <Space size={24} direction="vertical">

                    </Space>
                    <br/><br/>
                    <h4 style={{color: "gray"}}>Nama Lengkap</h4>
                    <Input 
                    style={{borderRadius: 8, height: 48}} 
                    placeholder="Nama lengkap" 
                    prefix={input.name} 
                    onChange={handleChange}/>
                    
                    <br/><br/>
                    <h4 style={{color: "gray"}}>Deskripsi tentang Anda</h4>
                    <TextArea 
                    style={{borderRadius: 8}} 
                    rows={6} 
                    placeholder="Deskripsi"
                    prefix={input.description}/>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Jenis Kelamin</h4>
                    <Radio.Group onChange={onChange} value={value}> 
                    <Radio value={1}>Laki - Laki </Radio>
                    <Radio value={2}>Perempuan</Radio>
                    </Radio.Group>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Bidang Konsultasi</h4>
                    <Input style={{borderRadius: 8, height: 48}} 
                    placeholder="Bidang Konsultasi" 
                    prefix={input.position}/>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Provinsi</h4>
                    {/* <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Provinsi"
                        optionFilterProp="children"
                        rows={6}
                         onChange={onChange}
                         onFocus={onFocus}
                         onBlur={onBlur}
                        onSearch={onSearch}
                          filterOption={(input, option) =>
                       option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                       
                     }
                >{
                    input.provinces !== null && (
                        <>
                            {input.provinces.map((e, index) => {
                                return (
                                    <>
                                        <Option value={e.name}>{e.name}</Option>
                                    </>
                                )
                            })}
                        </>
                    )}
                </Select> */}

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Kota</h4>
                    <Select defaultValue="Surabaya" style={{borderRadius: 8, width: 480}}  onChange={handleChange}
                    rows={6} placeholder="Lokasi/Kota"
                    prefix={input.location}/>           

                    <br/><br/>

                    <Row>
                        <Col span={13}><h4 style={{color: "gray"}}>Pengalaman Kerja</h4></Col>
                        <Col span={11}>
                            <Button onClick={showExperienceModal} 
                            type="link">
                                + Tambah Pengalaman kerja
                            </Button>
                        </Col>
                    </Row>

                    <h6 style={{color: "gray"}}>
                        Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang
                        konsultasi</h6>
                        
                    <PageHeader
                    style={{backgroundColor: "transparent", padding: 0, width: 450}}
                    ghost={false}
                    subTitle={<Text type="secondary">Bidang Keahlian</Text>}
                    extra={[
                        <Button onClick={showSkillModal} style={{color: "#3B85FA"}}
                                type="text"> + Tambah Bidang Keahlian
                        </Button>,
                    ]}/>
                <Space size={8} direction="vertical">
                    {
                        input.consultant_skills !== null && (
                            <>
                                {input.consultant_skills.map((e, index) => {
                                    return (
                                        <>
                                            <Card
                                                style={{
                                                    width: 480,
                                                    height: 48,
                                                    borderRadius: 8,
                                                    boxShadow: "0 0 0 1px #CED4DA"
                                                }}
                                                type="inner"
                                            >
                                                <Meta
                                                    title={
                                                        <>
                                                            <Text>{e.title}</Text>
                                                            <Button onClick={deleteInputData}
                                                                    value={e.skills}
                                                                    name={e.skills}
                                                                    style={{color: "#3B85FA"}}
                                                                    type="text"><CloseOutlined/>
                                                            </Button>
                                                        </>
                                                    }/>
                                            </Card>
                                        </>
                                    )
                                })}
                            </>
                        )}
                     </Space>
                    <Row>
                        <Col span={13}><h4 style={{color: "gray"}}>Pendidikan</h4><br/></Col>
                        <Col span={11}>
                            <Button onClick={showHistoryModal} 
                            type="link">
                                + Tambah Riwayat Pendidikan
                            </Button>
                        </Col>
                    </Row>
                    

                    <Modal
                        className="profile-modal"
                        title="Tambahkan Pengalaman Kerja"
                        visible={isExperienceVisible}
                        onCancel={handleCancel}
                        footer={null}   
                    >
                        <form id="2">
                        <h4 style={{color: "gray"}}>Titel Pengalaman Kerja</h4>
                        <Input style={{borderRadius: 8}} value={input.position}/><br/><br/>
                        <Row>
                            <Col span={12}><h4 style={{color: "gray"}}>Tahun Mulai</h4>
                                <DatePicker style={{width: 215, borderRadius: 8}} 
                                picker="year" value={input.start_year}/>
                            </Col>
                            <Col span={11} offset={1}>
                                <h4 style={{color: "gray"}}>Tahun Selesai</h4>
                                <DatePicker style={{width: 215, borderRadius: 8}}
                                picker="year" value={input.end_year}/><br/><br/>
                            </Col>
                        </Row>
                        
                        <Button size="large" 
                        className="button" 
                        type="primary" 
                        block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                        htmlType="submit"
                        form="2">
                            Tambahkan Pengalaman Kerja
                        </Button>
                        </form>
                    </Modal>

                    
            <Modal
                destroyOnClose={true}
                className="profile-modal"
                title="Tambah Bidang Keahlian"
                visible={isSkillVisible}
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
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Titel bidang keahlian"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input document description!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            size="large"
                            className="button"
                            type="primary" block
                            style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                            htmlType="submit">
                            Tambahkan Bidang Keahlian
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
                
                    <Modal
                        className="profile-modal"
                        title="Tambahkan Riwayat Pendidikan"
                        visible={isHistoryVisible}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <form id="2">
                        <h4 style={{color: "gray"}}>Nama Instansi</h4>
                        <Input style={{borderRadius: 8}} value={input.institution_name}/><br/><br/>
                        <h4 style={{color: "gray"}}>Titel</h4>
                        <Input style={{borderRadius: 8}} value={input.major}/><br/><br/>
                        <Row>
                            <Col span={12}><h4 style={{color: "gray"}}>Tahun Mulai</h4>
                                <Input style={{borderRadius: 8}}  value={input.start_year}/><br/><br/></Col>
                            <Col span={11} offset={1}>
                                <h4 style={{color: "gray"}}>Tahun Selesai</h4>
                                <Input style={{borderRadius: 8}} value={input.end_year}/><br/><br/>
                            </Col>
                        </Row>
                        <Button size="large" 
                        className="button" 
                        type="primary" 
                        block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                        htmlType="submit"
                        form="2">
                            Tambahkan Riwayat Pendidikan
                        </Button>
                        </form>
                    </Modal>

                    <Button
                        size="large"
                        className="button"
                        type="primary" block
                        style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                        htmlType="submit"
                        form="2">
                        Simpan
                    </Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default EditBiodata