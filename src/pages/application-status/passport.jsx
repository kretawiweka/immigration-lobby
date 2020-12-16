import React, { useState } from 'react';
import {
  Breadcrumb,
  Typography,
  Card,
  Form,
  Input,
  DatePicker,
  Space,
  Button,
  Row,
  Col,
  Image,
  Steps,
} from 'antd';

import Layout from '../../components/Layout';
import { ContentPassport, BreadCrumbContainer } from './style';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const { Title } = Typography;
const { Step } = Steps;

const ApplicationStatusPassport = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Layout>
      <ContentPassport>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>Status Permohonan</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Paspor</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <div style={{ margin: '14px 0' }}>
          <Card>
            <Row>
              <Title level={4}>Pengecekan Status Permohonan Paspor</Title>
            </Row>
            <hr></hr>
            <br></br>
            <Form
              className="login-form"
              layout="horizontal"
              onFinish={() => {
                setIsVisible(true);
              }}
            >
              <Row>
                <Col span={4}>Nomor Permohonan</Col>
                <Col span={20}>
                  <Form.Item
                    name="nomor_permohonan"
                    rules={[
                      { required: true, message: 'Masukkan nomor permohonan' },
                    ]}
                    style={{ flex: 1 }}
                  >
                    <Input placeholder="Nomor Permohonan" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={4}>Tanggal Lahir</Col>
                <Col span={20}>
                  <Form.Item name="tanggal_lahir" style={{ flex: 1 }}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <DatePicker
                        onChange={onChange}
                        format={'DD-MM-YYYY'}
                        placeholder="Masukkan Tanggal Lahir"
                        style={{ width: '100%' }}
                      />
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={4}>Kantor Imigrasi</Col>
                <Col span={20}>
                  <Form.Item>
                    <Input
                      placeholder="Kantor Imigrasi Kelas I Jakarta Selatan"
                      disabled
                    />
                  </Form.Item>
                </Col>
              </Row>
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
        </div>
        {isVisible && (
          <div style={{ margin: '14px 0' }}>
            <Card title="Hasil Pencarian">
              <Row>
                <Col span={1}></Col>
                <Col span={7}>
                  <center>
                    <Image
                      style={{
                        width: '100%',
                        margin: 25,
                        border: '1px solid black',
                      }}
                      src="https://www.dfa.ie/media/dfa/passport/passportphotographs/photojpen-117-300x450.jpg"
                    />
                  </center>
                  <hr></hr>
                  <Row>
                    <Title level={5}>Identitas</Title>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Nama Lengkap</Col>
                    <Col span={15}>
                      <strong>Supriyadi Munawar Akbar</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>NIK</Col>
                    <Col span={15}>
                      <strong>3275071208710031</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Jenis Kelamin</Col>
                    <Col span={15}>
                      <strong>Laki-Laki</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Tempat Tanggal Lahir</Col>
                    <Col span={15}>
                      <strong>Jakarta, 12 Agustus 1971</strong>
                    </Col>
                  </Row>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <Row>
                    <Title level={5}>Permohonan</Title>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Nomor Permohonan</Col>
                    <Col span={15}>
                      <strong>129120000000023810</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Lokasi Permohonan</Col>
                    <Col span={15}>
                      <strong>Kantor Imigrasi Kelas I Jakarta Selatan</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Tanggal Permohonan</Col>
                    <Col span={15}>
                      <strong>15 November 2020 pukul 10:04:39</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Tanggal Pembayaran</Col>
                    <Col span={15}>
                      <strong>17 November 2020 pukul 15:04:39</strong>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Jenis Produk</Col>
                    <Col span={15}>
                      <strong>Paspor Elektronik 48 Halaman</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Jenis Permohonan</Col>
                    <Col span={15}>
                      <strong>Baru</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}></Col>
                    <Col span={8}>Tujuan Permohonan</Col>
                    <Col span={15}>
                      <strong>Wisata</strong>
                    </Col>
                  </Row>
                </Col>
                <Col span={2}></Col>
                <Col span={13}>
                  <Title level={5}>Status Tahapan</Title>
                  <br></br>
                  <Row>
                    <Col span={2}></Col>
                    <Col span={22}>
                      <Steps direction="vertical" current={6} percent={50}>
                        <Step
                          title="1. Penginputan Data"
                          description="Selesai pada tanggal 15 November 2021 pukul 10:04:39"
                        />
                        <Step
                          title="2. Pengambilan Biometrik"
                          description="Selesai pada tanggal 15 November 2021 pukul 10:23:01"
                        />
                        <Step
                          title="3. Pelaksanaan Wawancara"
                          description="Selesai pada tanggal 15 November 2021 pukul 10:25:58"
                        />
                        <Step
                          title="4. Pembayaran Biaya Permohonan"
                          description="Selesai pada tanggal 17 November 2021 pukul 15:04:39"
                        />
                        <Step
                          title="5. Pengadjudikasian Permohonan"
                          description="Selesai pada tanggal 18 November 2021 pukul 08:03:21"
                        />
                        <Step
                          title="6. Pengalokasian Paspor"
                          description="Selesai pada tanggal 18 November 2021 pukul 13:14:47"
                        />
                        <Step
                          title="Pencetakan Paspor"
                          subTitle="(Sedang diproses)"
                        />
                        <Step
                          title="Pengujian Kualitas Paspor"
                          description=""
                        />
                        <Step title="Penyerahan Paspor" description="" />
                        <Step title="Selesai" description="" />
                      </Steps>
                    </Col>
                  </Row>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <Title level={5}>Prediksi Permohonan Selesai</Title>
                  <br></br>
                  <Row>
                    <Col span={2}></Col>
                    <Col span={3}>Tanggal</Col>
                    <Col span={5}>
                      <Input placeholder="25 November 2020" disabled />
                    </Col>
                    <Col span={1}></Col>
                    &emsp;
                    <Col span={3}>Pukul</Col>
                    <Col span={5}>
                      <Input placeholder="14.30" disabled />
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <Title level={5}>
                    Kabari Permohonan Selesai Kepada Pemohon
                  </Title>
                  <br></br>
                  <Form>
                    <Row>
                      <Col span={2}></Col>
                      <Col span={3}>Nama</Col>
                      <Col span={5}>
                        <Form.Item
                          name="nama_pemohon"
                          rules={[{ required: true, message: 'Masukkan Nama' }]}
                          style={{ flex: 1 }}
                        >
                          <Input placeholder="Nama" />
                        </Form.Item>
                      </Col>
                      <Col span={1}></Col>
                      &emsp;
                      <Col span={3}>Nomor HP</Col>
                      <Col span={5}>
                        <Form.Item
                          name="nomor_hp"
                          rules={[
                            { required: true, message: 'Masukkan Nomor HP' },
                          ]}
                          style={{ flex: 1 }}
                        >
                          <Input placeholder="Nomor Handphone" />
                        </Form.Item>
                      </Col>
                      <Col span={1}></Col>
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
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        )}
      </ContentPassport>
    </Layout>
  );
};

export default ApplicationStatusPassport;
