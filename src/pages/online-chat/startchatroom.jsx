import React, { Component } from 'react';
import {
  Typography,
  Card,
  Row,
  Col,
  Image,
  Form,
  Input,
  Button
} from 'antd';

import { ContentChatRoom } from './style';

const { Title } = Typography;

class StartChatRoom extends Component {
  render() {
    return (
      <ContentChatRoom>
          <Row style={{ height: '775px' }}>
            <Col span={24} style={{ height: '100%' }}>
              <Card style={{ height: '100%' }}>
                <center>
                  <Image width={150} src="https://www.imigrasi.go.id/images/Logo-IM.png" />
                  <br></br>
                  <br></br>
                  <br></br>
                  <Title level={3}>Selamat siang.</Title>
                  <Title level={4}>Sebelum memulai percakapan dengan Petugas Duta Layanan di</Title>
                  <Title level={2}>Kantor Imigrasi Kelas I Jakarta Selatan</Title>
                  <Title level={4}>mohon masukkan identitas Anda terlebih dahulu.</Title>
                  <br></br>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={14}>
                      <hr></hr>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={5}>
                      <Title level={5}>Nama:</Title>
                    </Col>
                    <Col span={6}>
                      <Form.Item>
                        <Input placeholder="Masukkan Nama Anda" />
                      </Form.Item>
                    </Col>
                    <Col span={6}></Col>
                  </Row>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={5}>
                      <Title level={5}>Email:</Title>
                    </Col>
                    <Col span={6}>
                      <Form.Item>
                        <Input placeholder="Masukkan Email Anda" />
                      </Form.Item>
                    </Col>
                    <Col span={6}></Col>
                  </Row>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={14}>
                      <hr></hr>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        style={{ background: '#64aced', float: 'right' }}
                      >
                        <strong>Mulai Percakapan</strong>
                      </Button>
                    </Col>
                    <Col span={2}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        style={{ background: '#b0b0b0', border: '1px solid #949494', float: 'right' }}
                      >
                        <strong>Batal</strong>
                      </Button>
                    </Col>
                  </Row>
                </center>
              </Card>
            </Col>
          </Row>
      </ContentChatRoom>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

}

export default StartChatRoom;