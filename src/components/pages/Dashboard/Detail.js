import React from "react"
import { Typography } from 'antd';
import { Input } from 'antd';

const { Title, Paragraph } = Typography;

const ConsultationDetail = () => {

    return (
        <>
            <div className="dashboard-container">
                <Title level={3}>Strategi marketing menggunakan digitalisasi</Title>
                <Paragraph >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mus amet sit viverra sed iaculis laoreet pellentesque mattis. Libero aliquet orci, tempor ut. Eleifend ipsum ultrices phasellus at sed habitant. Varius viverra dui nunc sit cras massa fermentum. Tincidunt donec ultrices egestas vitae. Pellentesque risus amet et ultrices mattis. In nulla mauris ipsum vitae varius nisi morbi imperdiet tortor. Odio ultrices lacus, leo pharetra enim. Consectetur proin enim, id at bibendum venenatis nisi. Porta fames neque lorem viverra massa consequat viverra.
                </Paragraph>
                <Paragraph >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mus amet sit viverra sed iaculis laoreet pellentesque mattis. Libero aliquet orci, tempor ut. Eleifend ipsum ultrices phasellus at sed habitant. Varius viverra dui nunc sit cras massa fermentum. Tincidunt donec ultrices egestas vitae. Pellentesque risus amet et ultrices mattis. In nulla mauris ipsum vitae varius nisi morbi imperdiet tortor. Odio ultrices lacus, leo pharetra enim. Consectetur proin enim, id at bibendum venenatis nisi. Porta fames neque lorem viverra massa consequat viverra.
                </Paragraph>
                <Paragraph >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mus amet sit viverra sed iaculis laoreet pellentesque mattis. Libero aliquet orci, tempor ut. Eleifend ipsum ultrices phasellus at sed habitant. Varius viverra dui nunc sit cras massa fermentum. Tincidunt donec ultrices egestas vitae. Pellentesque risus amet et ultrices mattis. In nulla mauris ipsum vitae varius nisi morbi imperdiet tortor. Odio ultrices lacus, leo pharetra enim. Consectetur proin enim, id at bibendum venenatis nisi. Porta fames neque lorem viverra massa consequat viverra.
                </Paragraph>

                <br/>
                <p className="dashboard-label" >Preferensi Konsultasi Klien</p>
                <Input style={{width: 344, borderRadius: 8}} prefix="Konsultasi Online" disabled />

                <br/><br/>
                <p className="dashboard-label" >Lokasi Konsultasi</p>
                <Input style={{width: 344, borderRadius: 8}} prefix="Rumah mas fatih" disabled />
            </div>
        </>
    )
}

export default ConsultationDetail