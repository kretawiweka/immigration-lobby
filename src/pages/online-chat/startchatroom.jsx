import React from 'react';
import { Typography, Card, Row, Col, Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import { ContentChatRoom } from './style';
import ImmigrationLogo from '../../assets/images/immigration_logo.png';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const StartChatRoom = () => {
  const history = useHistory();

  return (
    <ContentChatRoom>
      <Row style={{ height: '775px' }}>
        <Col span={24} style={{ height: '100%' }}>
          <Card style={{ height: '100%' }}>
            <center>
              <br></br>
              <img
                style={{ width: '280px', height: '100%' }}
                src={ImmigrationLogo}
                alt="Immigration-logo"
              />
              <br></br>
              <br></br>
              <Title level={3}>Selamat siang.</Title>
              <Title level={4}>
                Sebelum memulai percakapan dengan Petugas Duta Layanan di
              </Title>
              <Title level={2}>Kantor Imigrasi Kelas I Jakarta Selatan</Title>
              <Title level={4}>
                mohon masukkan identitas Anda terlebih dahulu.
              </Title>
              <br></br>
              <Row>
                <Col span={6}></Col>
                <Col span={14}>
                  <hr></hr>
                </Col>
              </Row>
              <br></br>
              <Form>
                <Row>
                  <Col span={6}></Col>
                  <Col span={5}>
                    <Title level={5}>Nama:</Title>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name="nama_penanya"
                      rules={[
                        { required: true, message: 'Masukkan nama Anda' },
                      ]}
                      style={{ flex: 1 }}
                    >
                      <Input placeholder="Nama Anda" />
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
                    <Form.Item
                      name="email_penanya"
                      rules={[
                        {
                          required: true,
                          message: 'Masukkan alamat email Anda',
                        },
                      ]}
                      style={{ flex: 1 }}
                    >
                      <Input placeholder="Email Anda" />
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
                    <Link to="/online-chat/room">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        style={{ background: '#64aced', float: 'right' }}
                      >
                        <strong>Mulai Percakapan</strong>
                      </Button>
                    </Link>
                  </Col>
                  <Col span={2}>
                    <Button
                      type="primary"
                      htmlType="button"
                      className="login-form-button"
                      size="large"
                      style={{
                        background: '#b0b0b0',
                        border: '1px solid #949494',
                        float: 'right',
                      }}
                      onClick={() => {
                        history.goBack();
                      }}
                    >
                      <strong>Batal</strong>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </center>
          </Card>
        </Col>
      </Row>
    </ContentChatRoom>
  );
};

export default StartChatRoom;
