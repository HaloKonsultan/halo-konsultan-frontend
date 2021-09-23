import React from "react";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Title from "antd/es/typography/Title";

const { Meta } = Card;
const Schedule = () => {

    return (
        <>
            <Card
                  style={{ width: 454, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA", backgroundColor: "#F4F4F4"}}
                  title={
                      <>
                          <Meta
                              title={<Title style={{color: "white", margin: 0}} level={4}>Konsultasi hari ini</Title>}
                              description={<p style={{color: "white", margin: 0}}>Sabtu, 18 September 2021</p>}
                          />
                      </>
                  }
            >
                <Card
                    style={{ width: 407, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }}
                    type="inner"
                >
                    <Meta
                        title={<Title style={{margin: 0}} level={5}>Strategi Digitalisasi UMKM lewat program pemerintah</Title>}
                        description="Pukul 12.00" />
                </Card>
                <Card
                    style={{ marginTop: 16, width: 407, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }}
                    type="inner"
                >
                    <Meta
                        title={<Title style={{margin: 0}} level={5}>Strategi Digitalisasi UMKM lewat program pemerintah</Title>}
                        description="Pukul 04.00" />
                </Card>
            </Card>
        </>
    )
}

export default Schedule