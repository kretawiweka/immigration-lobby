import React, { Component } from 'react';
import { Typography, Card, Row, Col, Image, Button } from 'antd';

import { ContentChatRoom } from './style';

const { Title } = Typography;

class StartChatRoomAlt extends Component {
  render() {
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
                <Title level={3}>
                  Terima kasih telah menguhubungi Petugas Duta Layanan
                </Title>
                <Title level={2}>
                  Kantor Imigrasi Kelas I Jakarta Selatan.
                </Title>
                <br></br>
                <br></br>
                <br></br>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                  style={{ background: '#b0b0b0', border: '1px solid #949494' }}
                >
                  <strong>Tutup</strong>
                </Button>
              </center>
            </Card>
          </Col>
        </Row>
      </ContentChatRoom>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default StartChatRoomAlt;
