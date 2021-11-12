import React, {useState, useContext, useEffect} from "react";
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
import {ContextProfile} from "../../context/ContextProfile";
import {Pencil, X} from "phosphor-react";

const {Meta} = Card;
const {Title, Text} = Typography;
const {Option} = Select;
const {TextArea} = Input;

const EditBiodata = () => {
    const {input, setInput, inputProvince, setInputProvince, functions} = useContext(ContextProfile)
    const {fetchData, functionEditBiodata, dataCity} = functions
    const [value, setValue] = React.useState(1);

    useEffect(() => {
        fetchData()

    }, [])

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);

    const onChangeGender = e => {
        console.log('radio checked', e.target.value);
        let typeOfValue = e.target.value
        let name = "gender"
        setInput({...input, [name]: typeOfValue})
    };

    const handleProvinceChange = (value) => {
        console.log(value[1])
        console.log(value[0])

        let typeOfValue = value[0]
        let name = "province"

        setInput({...input, [name]: typeOfValue})
        dataCity(value[1])
    }

    const handleCityChange = (value) => {
        console.log(value)

        let typeOfValue = value
        let name = "city"

        setInput({...input, [name]: typeOfValue})
    }

    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const showSkillModal = () => {
        setIsSkillVisible(true);
    };

    const showEducationModal = () => {
        setIsHistoryVisible(true);
    };

    const handleExperience = (values) => {
        console.log('Success:', values);
        let experience = input.consultant_experience.push(values)
        setInput({...input, experience})

        console.log(input)
        setIsExperienceVisible(false);
    }

    const handleSkill = (values) => {
        console.log('Success:', values);
        let skill = input.consultant_skill.push(values)
        setInput({...input, skill})

        console.log(input)
        setIsSkillVisible(false);
    };

    const handleEducation = (values) => {
        console.log('Success:', values);
        let education = input.consultant_education.push(values)
        setInput({...input, education})

        console.log(input)
        setIsHistoryVisible(false);
    };

    const updateExperience = (position, start_year, end_year) => {
        let index = input.consultant_experience.findIndex(x => x.position === position);

        setInput({...input, position: position, start_year: start_year, end_year: end_year})
        setIsExperienceVisible(true);
        input.consultant_experience.splice(index, 1);
    }
  
    const updateSkill = (skills) => {
        let index = input.consultant_skill.findIndex(x => x.skills === skills);

        setInput({...input, skills: skills})
        setIsSkillVisible(true);
        input.consultant_skill.splice(index, 1);
    }

    const updateEducation = (institution_name, major, start_year, end_year) => {
        let index = input.consultant_education.findIndex(x => x.institution_name === institution_name);

        setInput({...input, institution_name: institution_name, major: major, start_year: start_year, end_year: end_year})
        setIsHistoryVisible(true);
        input.consultant_education.splice(index, 1);
    }

    const deleteSkill = (event) => {
        console.log(input.consultant_skill)
        let index = input.consultant_skill.findIndex(x => x.skills === event.currentTarget.value);

        console.log(index)
        input.consultant_skill.splice(index, 1);
        console.log(input)
    }

    const deleteExperience = (event) => {
        console.log(input.consultant_experience)
        let index = input.consultant_experience.findIndex(x => x.position === event.currentTarget.value);

        console.log(index)
        input.consultant_experience.splice(index, 1);
        console.log(input)
    }

    const deleteEducation= (event) => {
        console.log(input.consultant_education)
        let index = input.consultant_education.findIndex(x => x.institution_name === event.currentTarget.value);

        console.log(index)
        input.consultant_education.splice(index, 1);
        console.log(input)
    }

    const handleCancel = () => {
        setIsExperienceVisible(false);
        setIsSkillVisible(false);
        setIsHistoryVisible(false);
    };

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name
        console.log("tesvalue " + typeOfValue)
        console.log("tesname " + name)

        setInput({...input, [name]: typeOfValue})
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const props = {
        onChange({file}) {
            if (file.status !== 'uploading') {
                const values = {
                    id: -1,
                    photo: file.name
                };
                //let documentationInput = input.consultant_documentation.push(values)

                // console.log("ini documentation input")
                // console.log(values)
                //setInput({...input, documentationInput})
            }
        },
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        functionEditBiodata()
    }

    
    
    return (
        <>
            <Nav/>
            <div className="container-profile">
                <Card title="Edit Profil Diri" style={{width: 528, borderRadius: 8}}>
                    <Space size={24} direction="vertical">
                        <Row>
                            <Col span={8}>
                                <img src={input.photo} alt="profile-picture"
                                     style={{width: 144, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                            </Col>
                            <Col span={16}>
                                <Upload {...props}>
                                    <Button style={{borderRadius: 4}}>Edit Profile</Button>
                                </Upload>
                                <h4 style={{color: "gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                            </Col>
                        </Row>

                        <div>
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
                                name="description"
                                placeholder="Deskripsi"
                                onChange={handleChange}
                                value={input.description}/><br/><br/>

                            <Text type="secondary">Jenis Kelamin</Text><br/>
                            <Radio.Group onChange={onChangeGender}>
                                <Radio value="Pria">Pria </Radio>
                                <Radio value="Wanita">Wanita</Radio>
                            </Radio.Group><br/><br/>

                            <Text type="secondary">Bidang Keahlian</Text>
                            <Input style={{borderRadius: 8, height: 48}}
                                   name="position"
                                   onChange={handleChange}
                                   placeholder="Bidang Keahlian"
                                   value={input.position}/>
                        </div>
                        <Space direction="vertical" style={{width: "100%"}}>
                            <Text type="secondary">Provinsi</Text>
                            <Select
                                defaultValue={input.province}
                                onChange={handleProvinceChange}
                                showSearch
                                bordered={false}
                                style={{
                                    borderRadius: 8,
                                    overflow: "hidden",
                                    border: "solid 1px #CED4DA",
                                    width: "100%"
                                }}
                                placeholder="Provinsi"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    inputProvince.province && (
                                        <>
                                            {inputProvince.province.map((e, index) => {
                                                return (
                                                    <>
                                                        <Option value={[e.name, e.id]}>{e.name}</Option>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )}
                            </Select>
                        </Space>

                        <Space direction="vertical" style={{width: "100%"}}>
                            <Text type="secondary">Kota</Text>
                            <Select
                                defaultValue={input.city}
                                onChange={handleCityChange}
                                showSearch
                                bordered={false}
                                style={{
                                    borderRadius: 8,
                                    overflow: "hidden",
                                    border: "solid 1px #CED4DA",
                                    width: "100%"
                                }}
                                placeholder="Kota"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    inputProvince.cities && (
                                        <>
                                            {inputProvince.cities.map((e, index) => {
                                                return (
                                                    <>
                                                        <Option value={e.name}>{e.name}</Option>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )}
                            </Select>
                        </Space>

                        <Space direction="vertical" style={{width: "100%"}}>
                            <PageHeader
                                style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                ghost={false}
                                subTitle={<Text type="secondary">Pengalaman</Text>}
                                extra={[
                                    <Button
                                        onClick={showExperienceModal}
                                        style={{
                                            color: "#3B85FA"
                                        }}
                                        type="text">
                                        <b>+ Tambah Pengalaman Kerja</b>
                                    </Button>,
                                ]}
                            />
                            <h6 style={{color: "gray"}}>
                                Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang
                                konsultasi
                            </h6>
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
                                                            borderRadius: 8,
                                                            overflow: "hidden"
                                                        }}
                                                        type="inner"
                                                        title={<>
                                                            <Row>
                                                                <Col span={21}>
                                                                    <Text>{e.position}</Text><br/>
                                                                    <Text style={{fontSize: 14}}
                                                                          type="secondary">{e.start_year} - {e.end_year}</Text>
                                                                </Col>
                                                                <Col span={3}>
                                                                    <Space>
                                                                        <Button value={e.id}
                                                                                style={{padding: 0, paddingTop: 10}}
                                                                                type="link"><Pencil
                                                                                onClick={() => updateExperience(e.position, e.start_year, e.end_year)}
                                                                            size={24} weight="fill"/></Button>
                                                                        <Button value={e.id}
                                                                                style={{padding: 0, paddingTop: 10}}
                                                                                onClick={deleteExperience} type="link"><X
                                                                            size={24}/></Button>
                                                                    </Space>
                                                                </Col>
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
                        <Space direction="vertical" style={{width: "100%"}}>
                            <PageHeader
                                style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                ghost={false}
                                subTitle={<Text type="secondary">Keahlian</Text>}
                                extra={[
                                    <Button
                                        onClick={showSkillModal}
                                        style={{
                                            color: "#3B85FA"
                                        }}
                                        type="text">
                                        <b>+ Tambah Bidang Keahlian</b>
                                    </Button>,
                                ]}
                            />
                            {
                                input.consultant_skill && (
                                    <>
                                        {input.consultant_skill.map((e, index) => {
                                            return (
                                                <>
                                                    <Card
                                                        style={{
                                                            width: 480,
                                                            height: 48,
                                                            borderRadius: 8,
                                                            overflow: "hidden"
                                                        }}
                                                        type="inner"
                                                        title={
                                                            <>
                                                                <Row>
                                                                    <Col span={21}>
                                                                        <Text>{e.skills}</Text>
                                                                    </Col>
                                                                    <Col span={3}>
                                                                        <Space>
                                                                            <Button value={e.id}
                                                                                    style={{
                                                                                        padding: 0,
                                                                                        paddingBottom: 10
                                                                                    }} type="link"><Pencil
                                                                                    onClick={() => updateSkill(e.skills)}
                                                                                size={24} weight="fill"/></Button>
                                                                            <Button value={e.id}
                                                                                    style={{
                                                                                        padding: 0,
                                                                                        paddingBottom: 10
                                                                                    }}
                                                                                    onClick={deleteSkill} type="link"><X
                                                                                size={24}/></Button>
                                                                        </Space>
                                                                    </Col>
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

                        <Space direction="vertical" style={{width: "100%"}}>
                            <PageHeader
                                style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                ghost={false}
                                subTitle={<Text type="secondary">Pendidikan</Text>}
                                extra={[
                                    <Button
                                        onClick={showEducationModal}
                                        style={{
                                            color: "#3B85FA"
                                        }}
                                        type="text">
                                        <b>+ Tambah Riwayat Pendidikan</b>
                                    </Button>,
                                ]}
                            />
                            {
                                input.consultant_education && (
                                    <>
                                        {input.consultant_education.map((e, index) => {
                                            return (
                                                <>
                                                    <Card
                                                        style={{
                                                            width: 480,
                                                            height: 68,
                                                            borderRadius: 8,
                                                            overflow: "hidden"
                                                        }}
                                                        type="inner"
                                                        title={
                                                            <>
                                                                <Row>
                                                                    <Col span={21}>
                                                                        <Text>{e.institution_name}</Text><br/>
                                                                        <Text
                                                                            type="secondary">{e.major} {e.start_year} - {e.end_year}</Text>
                                                                    </Col>
                                                                    <Col span={3}>
                                                                        <Space>
                                                                            <Button value={e.id}
                                                                                    style={{
                                                                                        padding: 0,
                                                                                        paddingTop: 10
                                                                                    }}
                                                                                    type="link"><Pencil
                                                                                    onClick={() => updateEducation(e.institution_name, e.major, e.start_year, e.end_year)}
                                                                                size={24} weight="fill"/></Button>
                                                                            <Button value={e.id}
                                                                                    style={{
                                                                                        padding: 0,
                                                                                        paddingTop: 10
                                                                                    }}
                                                                                    onClick={deleteEducation} type="link"><X
                                                                                size={24}/></Button>
                                                                        </Space>
                                                                    </Col>
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
                        <Button size="large"
                                className="button"
                                type="primary"
                                block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                                onClick={handleSubmit}>
                            Simpan
                        </Button>
                    </Space>
                </Card>
            </div>

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

                                <Input style={{borderRadius: 8, width: 215}}/>
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

                                <Input style={{borderRadius: 8, width: 215}}/>
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

                                <Input style={{borderRadius: 8, width: 215}}/>
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

                                <Input style={{borderRadius: 8, width: 215}}/>
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
        </>
    )
}

export default EditBiodata