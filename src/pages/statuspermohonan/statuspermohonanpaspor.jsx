import React from 'react';
import { Breadcrumb, Typography, Card, Form, Input, DatePicker, Space, Button, Row, Col, Image } from 'antd';

import Layout from '../../components/Layout';
import { Content } from './style';

function onChange(date, dateString) {
    console.log(date, dateString);
  }

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
      <Layout>
        <Content>
            <Breadcrumb>
                <Breadcrumb.Item>Beranda</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Status Permohonan</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Paspor</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <Title level={3}>Cek Status Permohonan Paspor</Title>
            <br></br>
            <Card>
                <Form className="login-form" layout="horizontal">
                    <Form.Item label="Nomor Permohonan">
                        <Input placeholder="Nomor Permohonan"/>
                    </Form.Item>
                    <Form.Item label="Tanggal Lahir">
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                        </Space>
                    </Form.Item>
                    <Form.Item label="Kantor Imigrasi">
                        <Input placeholder="Kantor Imigrasi Kelas I Khusus Jakarta Selatan" disabled/>
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      size="large"
                      style={{ background: '#64aced', float: 'right' }}
                    >
                      <strong>Cek Status</strong>
                    </Button>
                </Form>
            </Card>
            <br></br>
            <Card title="Hasil Pencarian">
                <Row>
                    <Col span={18} push={6}>
                        <Title level={5}>Identitas</Title>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={2}>1.</Col>
                            <Col span={6}>Nama Lengkap</Col>
                            <Col span={14}><strong>Supriyadi Munawar Akbar</strong></Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={2}>2.</Col>
                            <Col span={6}>NIK</Col>
                            <Col span={14}><strong>3275071208710031</strong></Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={2}>3.</Col>
                            <Col span={6}>Tanggal Lahir</Col>
                            <Col span={14}><strong>12 Agustus 1971</strong></Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={2}>4.</Col>
                            <Col span={6}>Lokasi Permohonan</Col>
                            <Col span={14}><strong>Kantor Imgirasi Kelas I Khusus Jakarta Selatan</strong></Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={2}>5.</Col>
                            <Col span={6}>Tanggal Permohonan</Col>
                            <Col span={14}><strong>15 November 2021</strong></Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={2}>6.</Col>
                            <Col span={6}>Tanggal Pembayaran</Col>
                            <Col span={14}><strong>17 November 2021</strong></Col>
                        </Row>
                        <br></br><hr></hr><br></br>
                        <Title level={5}>Status Tahapan</Title>
                        <br></br>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={22}>
                                <Breadcrumb separator=">">
                                    <Breadcrumb.Item>Entri Data</Breadcrumb.Item>
                                    <Breadcrumb.Item href="">Biometrik</Breadcrumb.Item>
                                    <Breadcrumb.Item href="">Wawancara</Breadcrumb.Item>
                                    <Breadcrumb.Item href="">Pembayaran</Breadcrumb.Item>
                                    <Breadcrumb.Item href="">Adjudikasi</Breadcrumb.Item>
                                    <Breadcrumb.Item href="">Alokasi Paspor</Breadcrumb.Item>
                                    <Breadcrumb.Item><strong><u>Pencetakan</u></strong></Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>                        
                        <br></br><hr></hr><br></br>
                        <Title level={5}>Prediksi Selesai</Title>
                        <br></br>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={4}>Tanggal</Col>
                            <Col span={4}><Input placeholder="25 November 2020" disabled/></Col>        
                            <Col span={2}></Col>
                            <Col span={4}>Pukul</Col>
                            <Col span={4}><Input placeholder="14.30" disabled/></Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={4}>Kabari Pemohon Selesai</Col>
                            <Col span={12}><Input placeholder="Nomor Handphone"/></Col>
                            <Col span={2}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ background: '#64aced', float: 'right' }}
                                    >
                                    <strong>Simpan</strong>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} pull={18}>
                        <center>
                            <Image
                                width={350}
                                src="https://www.dfa.ie/media/dfa/passport/passportphotographs/photojpen-117-300x450.jpg"
                            />
                        </center>
                    </Col>
                </Row>
            </Card>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
