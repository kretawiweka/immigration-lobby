import React from 'react';
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
  Steps
} from 'antd';

import Layout from '../../components/Layout';
import { ContentIzinTinggal, BreadCrumbContainer } from './style';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const { Title } = Typography;
const { Step } = Steps;

const ApplicationStatusIzinTinggal = () => {
  return (
    <>
      <Layout>
        <ContentIzinTinggal>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Status Permohonan</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Izin Tinggal</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>

          <Card>                  
            <Row>
              <Title level={4}>Pengecekan Status Permohonan Izin Tinggal</Title>
            </Row>
            <hr></hr>
            <br></br>
            <Form className="login-form" layout="horizontal">
              <Row>
                <Col span={4}>Nomor Permohonan</Col>
                <Col span={20}>
                  <Form.Item
                    name="nomor_permohonan"
                    rules={[{ required: true, message: 'Masukkan nomor permohonan' }]}
                    style={{ flex: 1 }}
                  >
                    <Input placeholder="Nomor Permohonan" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={4}>Tanggal Lahir</Col>
                <Col span={20}>
                  <Form.Item
                    name="tanggal_lahir"
                    rules={[{ required: true, message: 'Masukkan tanggal lahir' }]}
                    style={{ flex: 1 }}
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <DatePicker
                        onChange={onChange}
                        format={'DD-MM-YYYY'}  
                        placeholder='Masukkan Tanggal Lahir'
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
                      placeholder="Kantor Imigrasi Kelas I Ngurah Rai"
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
          <br></br>
          <Card title="Hasil Pencarian">
            <Row>
              <Col span={1}></Col>
              <Col span={7}>
                <center>
                  <Image
                    style={{ width: '100%', margin: 25, border: '1px solid black' }}
                    src="https://bbpsdmp-medan.kominfo.go.id/wp-content/uploads/2019/04/PAS%20PHOTO13.jpg"
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
                  <Col span={15}><strong>Aisyah Aminati Bt Djafar Malek</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>NIORA</Col>
                  <Col span={15}><strong>W7PXY192P</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Tempat, Tanggal Lahir</Col>
                  <Col span={15}><strong>Perlis, 03 Februari 1990</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Jenis Kelamin</Col>
                  <Col span={15}><strong>Perempuan</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Nomor Paspor</Col>
                  <Col span={15}><strong>TX193809</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Kewarganegaraan</Col>
                  <Col span={15}><strong>Malaysia</strong></Col>
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
                  <Col span={15}><strong>32918710000000381</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Lokasi Permohonan</Col>
                  <Col span={15}><strong>Kantor Imigrasi Kelas I Ngurah Rai</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Tanggal Permohonan</Col>
                  <Col span={15}><strong>28 November 2020 pukul 10:04:39</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Tanggal Pembayaran</Col>
                  <Col span={15}><strong>03 Desember 2020 pukul 09:13:40</strong></Col>
                </Row>
                <br></br>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Jenis Produk</Col>
                  <Col span={15}><strong>ITAS</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Jenis Permohonan</Col>
                  <Col span={15}><strong>Perpanjangan ke-1 masa berlaku 2 Tahun</strong></Col>
                </Row>
                <Row>
                  <Col span={1}></Col>
                  <Col span={8}>Tujuan Permohonan</Col>
                  <Col span={15}><strong>Pertukaran Mahasiswi (Pendidikan)</strong></Col>
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
                      <Step title="1. Pengecekan Berkas dan Pencetakan Resi" description="Selesai pada tanggal 28 November 2021 pukul 10:04:39" />
                      <Step title="2. Pemeriksaan Daftar Cekal" description="Selesai pada tanggal 28 November 2021 pukul 10:23:01" />
                      <Step title="3. Pemindaian Berkas Dokumen" description="Selesai pada tanggal 28 November 2021 pukul 10:25:58" />
                      <Step title="4. Pemeriksaan Penjamin" description="Selesai pada tanggal 28 November 2021 pukul 15:04:39" />
                      <Step title="5. Pengambilan Data Biometrik" description="Selesai pada tanggal 28 November 2021 pukul 08:03:21" />
                      <Step title="6. Transaksi Pembayaran" description="Selesai pada tanggal 03 Desember 2021 pukul 13:14:47" />
                      <Step title="Persetujuan Izin Tinggal" subTitle="(Sedang diproses)" />
                      <Step title="Penerbitan Nomor Register" description="" />
                      <Step title="Pemindaian Dokumen Selesai" description="" />
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
                    <Input placeholder="06 Desember 2020" disabled />
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
                <Title level={5}>Kabari Permohonan Selesai Kepada Pemohon</Title>
                <br></br>
                <Form>
                  <Row>
                    <Col span={2}></Col>
                    <Col span={3}>Nama</Col>
                    <Col span={5}>
                      <Form.Item
                        name="nama_pemohon"
                        rules={[{ required: true, message: 'Masukkan nama' }]}
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
                          rules={[{ required: true, message: 'Masukkan nomor HP' }]}
                          style={{ flex: 1 }}
                      >
                        <Input placeholder="Masukkan Nomor Handphone" />
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
            <br></br>
          </Card>
        </ContentIzinTinggal>
      </Layout>
    </>
  );
};

export default ApplicationStatusIzinTinggal;