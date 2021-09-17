import React from "react"
import { Row, Col } from 'antd';
import "../assets/css/register.css"
import 'antd/dist/antd.css';
import image1 from "../assets/img/people.png"
import image2 from "../assets/img/comment.png"
import image3 from "../assets/img/news.png"
import background from "../assets/img/auth-background.png";

const Onboard = () => {
    
    return (
        <>
                <div className="container" style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "824px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}>
                    <table>
                        <tbody>
                        <th>
                            <td>Gabung bersama HaloKonsultan dan Dapatkan.</td>
                        </th>
                        <tr>
                            <td>
                                <Row>
                                    <Col span={4}><img className="image-table" src={image1} alt=""/></Col>
                                    <Col span={20}>
                                        <h2>Kemudahan Mencari Klien</h2>
                                        <p>Dengan HaloKonsultan, Anda dapat kesempatan untuk lebih mudah dalam mencari klien Anda.</p>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Row>
                                    <Col span={4}><img className="image-table" src={image2} alt=""/></Col>
                                    <Col span={20}>
                                        <h2>Konsultasi Lebih Fleksibel</h2>
                                        <p>Atur jadwal untuk memberikan konsultasi kepada klien Anda, sehingga Anda memiliki fleksibilitas terhadap waktu Anda.</p>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Row>
                                    <Col span={4}><img className="image-table" src={image3} alt=""/></Col>
                                    <Col span={20}>
                                        <h2>Manajemen Konsultasi yang Lebih Baik</h2>
                                        <p>HaloKonsultan membantu mengatur konsultasi Anda dengan lebih baik, dan memberi pengalaman konsultasi yang baik.</p>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        </>
    )
}

export default Onboard