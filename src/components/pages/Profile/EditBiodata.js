import React, {useState, useParams, useContext, useEffect} from "react";
import {
    Row,
    Col,
    Space,
    Form,
    Card,
    Typography,
    Modal,
    Input,
    Button,
    Radio,
    DatePicker,
    Select,
    PageHeader,
    Upload,
    message
} from 'antd';
import "../../../assets/css/profile.css"
import Nav from "../../layout/Header";
import {EditOutlined} from "@ant-design/icons";
import {ContextProfile} from "../../context/ContextProfile";
import { size } from "lodash";

const {Meta} = Card;
const {Title, Text} = Typography;
const { Option } = Select;
const {TextArea} = Input;

const EditBiodata = () => {
    const {input, setInput, functions} = useContext(ContextProfile)
    const {fetchData, functionEditBiodata, dataProvinces, dataCity} = functions

    useEffect(() => {
        fetchData()
        // dataProvinces();
        // dataCity();
    }, [])

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    // Tambah Pengalaman Kerja
    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const handleExperience = (values) => {
        console.log('Success:', values);
        let experience = input.consultant_experience.push(values)
        setInput({...input, experience})

        console.log(input)
        setIsExperienceVisible(false);
    }

    // Tambah Bidang Keahlian
    const showSkillModal = () => {
        setIsSkillVisible(true);
    };

    const handleSkill = (values) => {
        console.log('Success:', values);
        let consultant_skillInput = input.consultant_skill.push(values)
        setInput({...input, consultant_skillInput})

        console.log(input)
        setIsSkillVisible(false);
    };

    // Tambah Riwayat Pendidikan
    const showHistoryModal = () => {
        setIsHistoryVisible(true);
    };

    const handleEducation = (values) => {
        console.log('Success:', values);
        let consultant_educationInput = input.consultant_education.push(values)
        setInput({...input, consultant_educationInput})

        console.log(input)
        setIsHistoryVisible(false);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
        setIsSkillVisible(false);
        setIsHistoryVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("input bang")
        console.log(input)
        console.log("================")

        functionEditBiodata()
    }

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

        setInput({ ...input, [name]: typeOfValue })
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

      function onChanged(value) {
        console.log(`selected ${value}`);
      }

      function onBlur() {
        console.log('blur');
      }

      function onFocus() {
        console.log('focus');
      }

      function onSearch(val) {
        console.log('search:', val);
      }


    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

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
                                {/* <Upload {...props}>
                                    <Button style={{borderRadius: 4}}>Edit Profile</Button>
                                </Upload> */}
                                <h4 style={{color: "gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                                {/* <Button
                                type="primary"
                                onClick={this.handleUpload}
                                disabled={fileList.length === 0}
                                loading={uploading}
                                style={{ marginTop: 16, borderRadius: 8 }} >
                            {uploading ? 'Uploading' : 'Upload File'}
                            </Button> */}
                            </Col>
                        </Row><br/><br/>
                        
                        <form id="1" method="post" onSubmit={handleSubmit}>
                        <Text type="secondary">Nama Lengkap</Text>
                        <Input style={{borderRadius: 8, height: 48}}
                               name="name"
                               onChange={handleChange}
                               placeholder="Nama lengkap"
                               value={input.name}/><br/><br/>
            
                        <Text type="secondary">Deskripsi</Text>
                        <TextArea
                            style={{borderRadius: 8}}
                            rows={6}
                            name = "description"
                            placeholder="Deskripsi"
                            onChange={handleChange}
                            value={input.description}/>
                        <br/>

                        <Text type="secondary">jenis Kelamin</Text><br/>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Laki - Laki </Radio>
                            <Radio value={2}>Perempuan</Radio>
                        </Radio.Group><br/><br/>

                        <Text type="secondary">Bidang Keahlian</Text>
                        <Input style={{borderRadius: 8, height: 48}}
                               name="position"
                               onChange={handleChange}
                               placeholder="Bidang Keahlian"
                               value={input.position}/><br/><br/>
                        </form><br/>

                        <Text type="secondary">Provinsi</Text>
                        <Select
                          showSearch
                          style={{ width: 480 }}
                          placeholder="Provinsi"
                          optionFilterProp="children"
                          rows={6}
                          onChange={onChanged}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                         filterOption={(input, option) =>
                       option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                >
                    
                {
                    input.provinces && (
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

                </Select><br/><br/>
                        <Text type="secondary">Kota</Text>
                        <Select
                          showSearch
                          style={{ width: 480 }}
                          placeholder="Kota"
                          optionFilterProp="children"
                          rows={6}
                          onChange={onChanged}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                         filterOption={(input, option) =>
                       option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                >
                {
                    input.city  && (
                        <>
                            {input.city.map((e, index) => {
                                return (
                                    <>
                                        <Option value={e.name}>{e.name}</Option>
                                    </>
                                )
                            })}
                        </>
                )}
                </Select>
                        <br/><br/>

                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0, width: 450}}
                            ghost={false}
                            subTitle={<Text type="secondary">Pengalaman Kerja</Text>}
                            extra={[
                                <Button onClick={showExperienceModal} style={{color: "#3B85FA"}}
                                        type="text"> + Tambah Pengalaman Kerja
                                </Button>,
                            ]}/>
                            <h6 style={{color: "gray"}}>
                            Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang
                            konsultasi</h6>
                        <Space size={8} direction="vertical">
                            {
                                input.consultant_experience && (
                                    <>
                                        {input.consultant_experience.map((e, index) => {
                                            return (
                                                <>
                                                    <Card
                                                        style={{
                                                            width: 480,
                                                            height: 68,
                                                            borderRadius: 8
                                                        }}
                                                        type="inner"
                                                        title={ <>
                                                            <Text>{e.position}</Text>
                                                             <br/>
                                                            <Row>
                                                                <Col span={21}>
                                                                <Text style={{fontSize:14}} type="secondary">{e.start_year} - {e.end_year}</Text>
                                                                </Col>
                                                                <Button onClick={showExperienceModal} type="text">
                                                                    <EditOutlined/> 
                                                                </Button>
                                                                {/* {input.consultant_experience.map(e, index)}     */}
                                                            </Row>   
                                                        </>
                                                        
                                                    }    
                                                    >
                                                    </Card>
                                                </>
                                            )
                                        })}
                                    </>
                                )}
                        </Space>

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
                                input.consultant_skill  && (
                                    <>
                                        {input.consultant_skill.map((e, index) => {
                                            return (
                                                <>
                                                    <Card
                                                        style={{
                                                            width: 480,
                                                            height: 48,
                                                            borderRadius: 8
                                                        }}
                                                        type="inner"
                                                        title={
                                                            <>
                                                            <Row>
                                                                <Col span={21}>
                                                                <Text>{e.skills}</Text>
                                                                </Col>
                                                                <Button onClick={showSkillModal} type="text">
                                                                    <EditOutlined/> 
                                                                </Button>
                                                            </Row>   
                                                            </>
                                                        }
                                                    >
                                                    </Card>
                                                </>
                                            )
                                        })}
                                    </>
                                )}
                        </Space>

                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0, width: 450}}
                            ghost={false}
                            subTitle={<Text type="secondary">Pendidikan</Text>}
                            extra={[
                                <Button onClick={showHistoryModal} style={{color: "#3B85FA"}}
                                        type="text"> + Tambah Riwayat Pendidikan
                                </Button>,
                            ]}/>
                        <Space size={8} direction="vertical">
                            {
                                input.consultant_education  && (
                                    <>
                                        {input.consultant_education.map((e, index) => {
                                            return (
                                                <>
                                                    <Card
                                                        style={{
                                                            width: 480,
                                                            height: 68,
                                                            borderRadius: 8
                                                        }}
                                                        type="inner"
                                                        title={
                                                            <> 
                                                            <Text>{e.institution_name}</Text>
                                                             <br/>
                                                             <Row>
                                                                <Col span={21}>
                                                                <Text type="secondary">{e.major} {e.start_year} - {e.end_year}</Text>
                                                                </Col>
                                                                <Button onClick={showHistoryModal} type="text">
                                                                    <EditOutlined/> 
                                                                </Button>
                                                            </Row>   
                                                            </>
                                                        }
                                                    >
                                                    </Card>
                                                </>
                                            )
                                        })}
                                    </>
                                )}
                        </Space>

              {/*MODAL HERE*/}
                        <Modal
                            destroyOnClose={true}
                            className="profile-modal"
                            title="Tambahkan Pengalaman kerja"
                            visible={isExperienceVisible}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <Form
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                layout="vertical"
                                onFinish={handleExperience}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Titel Pengalaman Kerja"
                                    name="position"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input position!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8}}/>
                                </Form.Item>

                                <Row>
                                    <Col span={12}>
                                    <Form.Item
                                    label="Tahun Mulai"
                                    name="start_year"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input start year!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8, width : 215}}/>
                                </Form.Item>
                                    </Col>
                                    <Col span={11} offset={1}>
                                    <Form.Item
                                    label="Tahun Selesai"
                                    name="end_year"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input end year!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8, width : 215}}/>
                                </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item>
                                    <Button
                                        size="large"
                                        className="button"
                                        type="primary" block
                                        style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                                        htmlType="submit">
                                        Tambahkan Riwayat Pendidikan
                                    </Button>
                                </Form.Item>
                            </Form>
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
                                onFinish={handleSkill}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Titel Bidang Keahlian"
                                    name="skills"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input skills!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8}} />
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
                            destroyOnClose={true}
                            className="profile-modal"
                            title="Tambah Riwayat Pendidikan"
                            visible={isHistoryVisible}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <Form
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                layout="vertical"
                                onFinish={handleEducation}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Nama Instansi"
                                    name="institution_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input institution name!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8}}/>
                                </Form.Item>

                                <Form.Item
                                    label="Titel"
                                    name="major"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input major!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8}}/>
                                </Form.Item>

                                <Row>
                                    <Col span={12}>
                                    <Form.Item
                                    label="Tahun Mulai"
                                    name="start_year"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input start year!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8, width : 215}}/>
                                </Form.Item>
                                    </Col>
                                    <Col span={11} offset={1}>
                                    <Form.Item
                                    label="Tahun Selesai"
                                    name="end_year"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input end year!',
                                        },
                                    ]}
                                    
                                >
                                    
                                    <Input style={{borderRadius: 8, width : 215}}/>
                                </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item>
                                    <Button
                                        size="large"
                                        className="button"
                                        type="primary" block
                                        style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                                        htmlType="submit">
                                        Tambahkan Riwayat Pendidikan
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>

                        <br/><br/>
                        <Button size="large"
                            className="button"
                            type="primary"
                            block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                            htmlType="submit"
                            form="1">
                        Simpan
                    </Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default EditBiodata