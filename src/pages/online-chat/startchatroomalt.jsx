import React from 'react';
import { Typography, Card, Row, Col, Image, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import { ContentChatRoom } from './style';

const { Title } = Typography;

const StartChatRoomAlt = () => {
  const history = useHistory();

  return (
    <ContentChatRoom>
      <Row style={{ height: '775px' }}>
        <Col span={24} style={{ height: '100%' }}>
          <Card style={{ height: '100%' }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
              <Image
                width={150}
                src="https://www.imigrasi.go.id/images/Logo-IM.png"
              />
              <br></br>
              <br></br>
              <br></br>
              <Title level={3}>Mohon maaf, saat ini</Title>
              <Title level={2}>Kantor Imigrasi Kelas I Jakarta Selatan</Title>
              <Title level={3}>sudah tutup.</Title>
              <Title level={3}>
                Silahkan coba hubungi Petugas Duta Layanan kami di jam buka
                kantor. Terima kasih.
              </Title>
              <br></br>
              <br></br>
              <br></br>
              <Button
                type="primary"
                htmlType="button"
                className="login-form-button"
                size="large"
                style={{ background: '#b0b0b0', border: '1px solid #949494' }}
                onClick={() => {
                  history.goBack();
                }}
              >
                <strong>Kembali</strong>
              </Button>
            </center>
          </Card>
        </Col>
      </Row>
    </ContentChatRoom>
  );
};

export default StartChatRoomAlt;
