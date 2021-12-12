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
    Select,
    PageHeader,
    Upload,
} from 'antd';
import "../../../assets/css/profile.css"
import Nav from "../../layout/Header";
import {ContextProfile} from "../../context/ContextProfile";
import {Pencil, X} from "phosphor-react";
import {useHistory} from "react-router";
import SelectDropdown from "../../global/SelectDropdown";
import LabelText from "../../global/LabelText";
import {SERVER_NAME} from "../../context/API";
import noImage from "../../../assets/img/no-image.png";

const {Text, Title} = Typography;
const {Option} = Select;
const {TextArea} = Input;

const EditBiodata = () => {
    let history = useHistory()
    const {
        input,
        setInput,
        inputProvince,
        inputCategories,
        errorMessage,
        loading,
        functions
    } = useContext(ContextProfile)
    const {
        fetchData,
        functionEditBiodata,
        functionDeleteExperience,
        functionDeleteSkill,
        functionDeleteEducation,
        functionUploadImage,
        dataCity,
        dataCategories
    } = functions
    const [gender, setGender] = React.useState(input.gender);

    useEffect(() => {
        fetchData()
    }, [])

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);
    const [sizeError, setSizeError] = useState(false);

    const onChangeGender = e => {
        console.log('radio checked', e.target.value);
        let typeOfValue = e.target.value
        let name = "gender"
        setInput({...input, [name]: typeOfValue})
        setGender(e.target.value)
    };

    const handleCategorieChange = (value) => {
        console.log(value[1])
        console.log(value[0])

        let typeOfValue = value[1]
        let name = "category_id"

        setInput({...input, [name]: typeOfValue})
    }

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
        values["id"] = -1
        let experience = input.consultant_experience.push(values)
        setInput({...input, experience})

        setIsExperienceVisible(false);
        //functionEditBiodata()
    }

    const handleSkill = (values) => {
        values["id"] = -1
        let skill = input.consultant_skill.push(values)
        setInput({...input, skill})

        setIsSkillVisible(false);
        //functionEditBiodata()
    };

    const handleEducation = (values) => {
        values["id"] = -1
        let education = input.consultant_education.push(values)
        setInput({...input, education})

        setIsHistoryVisible(false);
        //functionEditBiodata()
    };

    // const updateExperience = (id, position, start_year, end_year) => {
    //     let index = input.consultant_experience.findIndex(x => x.position === position);
    //
    //     setInput({...input, position: position, start_year: start_year, end_year: end_year})
    //     setIsExperienceVisible(true);
    //     input.consultant_experience.splice(index, 1);
    // }
    //
    // const updateSkill = (id, skills) => {
    //     console.log("ini id skill")
    //     console.log(id)
    //     let index = input.consultant_skill.findIndex(x => x.skills === skills);
    //
    //     setInput({...input, id: id, skills: skills})
    //     setIsSkillVisible(true);
    //     input.consultant_skill.splice(index, 1);
    // }
    //
    // const updateEducation = (id, institution_name, major, start_year, end_year) => {
    //     let index = input.consultant_education.findIndex(x => x.institution_name === institution_name);
    //
    //     setInput({...input, id: id, institution_name: institution_name, major: major, start_year: start_year, end_year: end_year})
    //     setIsHistoryVisible(true);
    //     input.consultant_education.splice(index, 1);
    // }

    const deleteSkill = (event) => {
        let id = parseInt(event.currentTarget.value)

        if (id !== -1) {
            functionDeleteSkill(id)
        } else {
            let index = input.consultant_skill.findIndex(x => x.skills === event.currentTarget.name);
            console.log("ini index", index)
            input.consultant_skill.splice(index, 1);
            setInput({...input})
        }
    }

    const deleteExperience = (event) => {
        let id = parseInt(event.currentTarget.value)

        if (id !== -1) {
            functionDeleteExperience(id)
        } else {
            let index = input.consultant_experience.findIndex(x => x.position === event.currentTarget.name);
            console.log("ini index", index)
            input.consultant_experience.splice(index, 1);
            setInput({...input})
        }
    }

    const deleteEducation = (event) => {
        let id = parseInt(event.currentTarget.value)

        if (id !== -1) {
            functionDeleteEducation(id)
        } else {
            let index = input.consultant_education.findIndex(x => x.institution_name === event.currentTarget.name);
            console.log("ini index", index)
            input.consultant_education.splice(index, 1);
            setInput({...input})
        }
    }

    const handleCancel = () => {
        setIsExperienceVisible(false);
        setIsSkillVisible(false);
        setIsHistoryVisible(false);
    };

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onImageChange = (event) => {
        let formdata = new FormData()
        let size = event.target.files[0].size;
        console.log("size = ", size)

        if (size > 524288) {
            setSizeError(true)
        } else if (event.target.files && event.target.files[0]) {
            setSizeError(false)
            let img = event.target.files[0];
            formdata.append('photo', img)
            console.log("size = ", size)
            functionUploadImage(formdata)
            setInput({...input, photo: URL.createObjectURL(img)})

            console.log("ini input foto ", formdata)
            console.log("ini event foto ", event)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("ini input", input)
        functionEditBiodata()
    }

    return (
        <>
            <Nav/>
            <div className="container-profile" style={{display: "flex", alignItems: "center"}}>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 14, order: 1}}>
                    <Card title={<Title level={4}>Edit Profil Diri</Title>} style={{width: "100%", borderRadius: 8}}
                          loading={loading}>
                        <Space size={24} direction="vertical" style={{width: "100%"}}>
                            <Row>
                                <Col xs={13} sm={8} md={10} lg={6}>
                                    {
                                        input.photo === SERVER_NAME + null &&
                                        <img src={noImage} alt="profile-picture"
                                             style={{
                                                 width: 144,
                                                 height: 144,
                                                 borderRadius: 8,
                                                 boxShadow: "0 0 0 1px #CED4DA"
                                             }}/>
                                    }
                                    {
                                        input.photo !== SERVER_NAME + null &&
                                        <img src={input.photo} alt="profile-picture"
                                             style={{
                                                 width: 144,
                                                 height: 144,
                                                 borderRadius: 8,
                                                 boxShadow: "0 0 0 1px #CED4DA"
                                             }}/>
                                    }
                                </Col>
                                <Col xs={11} sm={16} md={14} lg={18}>
                                    <Space size={8} direction="vertical" style={{width: "100%"}}>
                                        <input type="file" name="myImage" onChange={onImageChange} title=" "/>
                                        {
                                            sizeError === true &&
                                            <LabelText text="Ukuran foto melebihi 512KB!"
                                                       fontSize={12}
                                                       fontColor="#EA3A3A"/>
                                        }

                                        <h4 style={{color: "gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                                    </Space>
                                </Col>
                            </Row>

                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <LabelText text="Nama Lengkap"/>
                                <Input style={{borderRadius: 8, height: 48}}
                                       name="name"
                                       onChange={handleChange}
                                       placeholder="Nama lengkap"
                                       value={input.name}/>
                            </Space>
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <LabelText text="Deskripsi"/>
                                <TextArea
                                    style={{borderRadius: 8}}
                                    rows={6}
                                    name="description"
                                    placeholder="Deskripsi"
                                    onChange={handleChange}
                                    value={input.description}/>
                            </Space>
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <LabelText text="Jenis Kelamin"/>
                                <Radio.Group onChange={onChangeGender} value={gender}>
                                    <Row style={{width: "100%"}}>
                                        <Col span={12}>
                                            <Radio value="Pria">Pria </Radio>
                                        </Col>
                                        <Col span={12}>
                                            <Radio value="Wanita">Wanita</Radio>
                                        </Col>
                                    </Row>

                                </Radio.Group>
                            </Space>

                            <Row style={{width: "100%"}}>
                                <Col span={11}>
                                    <Space size={8} direction="vertical" style={{width: "100%"}}>
                                        <LabelText text="Provinsi"/>
                                        <SelectDropdown
                                            defaultValue={input.province}
                                            onChange={handleProvinceChange}
                                            placeholder="Provinsi"
                                            option={
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
                                        />
                                    </Space>
                                </Col>
                                <Col span={1}/>
                                <Col span={12}>
                                    <Space size={8} direction="vertical" style={{width: "100%"}}>
                                        <LabelText text="Kota"/>
                                        <SelectDropdown
                                            defaultValue={input.city}
                                            onChange={handleCityChange}
                                            placeholder="Kota"
                                            option={
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
                                        />
                                    </Space>
                                </Col>
                            </Row>
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <PageHeader
                                    style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                    ghost={false}
                                    subTitle={<LabelText text="Pendidikan"/>}
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
                                                                width: "100%",
                                                                height: 68,
                                                                borderRadius: 8,
                                                                overflow: "hidden"
                                                            }}
                                                            type="inner"
                                                            title={
                                                                <>
                                                                    <Row>
                                                                        <Col xs={22} sm={22} md={22} lg={23}>
                                                                            <Text>{e.institution_name}</Text><br/>
                                                                            <Text
                                                                                type="secondary">{e.major} {e.start_year} - {e.end_year}</Text>
                                                                        </Col>
                                                                        <Col xs={2} sm={2} md={2} lg={1}>
                                                                            <Space>
                                                                                {/*<Button value={e.id}*/}
                                                                                {/*        style={{*/}
                                                                                {/*            padding: 0,*/}
                                                                                {/*            paddingTop: 10*/}
                                                                                {/*        }}*/}
                                                                                {/*        type="link"><Pencil*/}
                                                                                {/*        onClick={() => updateEducation(e.id, e.institution_name, e.major, e.start_year, e.end_year)}*/}
                                                                                {/*    size={24} weight="fill"/></Button>*/}
                                                                                <Button value={e.id}
                                                                                        name={e.institution_name}
                                                                                        style={{
                                                                                            padding: 0,
                                                                                            paddingTop: 10
                                                                                        }}
                                                                                        onClick={deleteEducation}
                                                                                        type="link"><X
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
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <LabelText text="Bidang Keahlian"/>
                                <SelectDropdown
                                    defaultValue={input.position}
                                    onChange={handleCategorieChange}
                                    placeholder="Bidang Kategori"
                                    option={
                                        inputCategories.categories && (
                                            <>
                                                {inputCategories.categories.map((e, index) => {
                                                    return (
                                                        <>
                                                            <Option value={[e.name, e.id]}>{e.name}</Option>
                                                        </>
                                                    )
                                                })}
                                            </>
                                        )
                                    }
                                />
                            </Space>

                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <PageHeader
                                    style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                    ghost={false}
                                    subTitle={<LabelText text="Pengalaman"/>}
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
                                <h6 style={{color: "gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan
                                    bidang
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
                                                                width: "100%",
                                                                height: 68,
                                                                borderRadius: 8,
                                                                overflow: "hidden"
                                                            }}
                                                            type="inner"
                                                            title={<>
                                                                <Row>
                                                                    <Col xs={22} sm={22} md={22} lg={23}>
                                                                        <Text>{e.position}</Text><br/>
                                                                        <Text style={{fontSize: 14}}
                                                                              type="secondary">{e.start_year} - {e.end_year}</Text>
                                                                    </Col>
                                                                    <Col xs={2} sm={2} md={2} lg={1}>
                                                                        <Space>
                                                                            {/*<Button value={e.id}*/}
                                                                            {/*        style={{padding: 0, paddingTop: 10}}*/}
                                                                            {/*        type="link"><Pencil*/}
                                                                            {/*        onClick={() => updateExperience(e.id, e.position, e.start_year, e.end_year)}*/}
                                                                            {/*    size={24} weight="fill"/></Button>*/}
                                                                            <Button value={e.id}
                                                                                    name={e.position}
                                                                                    style={{
                                                                                        padding: 0,
                                                                                        paddingTop: 10,
                                                                                        float: "right"
                                                                                    }}
                                                                                    onClick={deleteExperience}
                                                                                    type="link"><X
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
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                <PageHeader
                                    style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                    ghost={false}
                                    subTitle={<LabelText text="Keahlian"/>}
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
                                                                width: "100%",
                                                                height: 48,
                                                                borderRadius: 8,
                                                                overflow: "hidden"
                                                            }}
                                                            type="inner"
                                                            title={
                                                                <>
                                                                    <Row>
                                                                        <Col xs={22} sm={22} md={22} lg={23}>
                                                                            <Text>{e.skills}</Text>
                                                                        </Col>
                                                                        <Col xs={2} sm={2} md={2} lg={1}>
                                                                            <Space>
                                                                                {/*<Button value={e.id}*/}
                                                                                {/*        style={{*/}
                                                                                {/*            padding: 0,*/}
                                                                                {/*            paddingBottom: 10*/}
                                                                                {/*        }} type="link"><Pencil*/}
                                                                                {/*        onClick={() => updateSkill(e.id, e.skills)}*/}
                                                                                {/*    size={24} weight="fill"/></Button>*/}
                                                                                <Button value={e.id}
                                                                                        name={e.skills}
                                                                                        style={{
                                                                                            padding: 0,
                                                                                            paddingBottom: 10
                                                                                        }}
                                                                                        onClick={deleteSkill}
                                                                                        type="link"><X
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
                </Col>
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
                            Tambahkan Pengalaman Kerja
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