import React from 'react';
import {
  Breadcrumb,
  Card,
  Form,
  Button,
  Select,
  Typography,
  Row,
  Col,
} from 'antd';

import Layout from '../../components/Layout';
import { SubFeatureContent, BreadCrumbContainer } from './style';

const { Option } = Select;
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const InformationCounter = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Layout>
        <SubFeatureContent>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Laporan</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Rekam Counter</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <Card style={{ margin: '14px', flex: '1' }}>
                <Title level={5} style={{ marginLeft: 100 }}>
                  <strong>Rekam Counter</strong>
                </Title>
                <br></br>
                <Form {...layout}>
                  <Form.Item
                    label="Jenis Layanan"
                    name="jenis_layanan"
                    rules={[{ required: true, message: 'Pilih jenis layanan' }]}
                    style={{ flex: 1 }}
                  >
                    <Select
                      defaultValue="Pilih Jenis Layanan"
                      onChange={handleChange}
                    >
                      <Option value="Paspor">Paspor</Option>
                      <Option value="Izin Tinggal">Izin Tinggal</Option>
                      <Option value="Visa">Visa</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Jenis Produk"
                    name="jenis_produk"
                    rules={[{ required: true, message: 'Pilih jenis produk' }]}
                    style={{ flex: 1 }}
                  >
                    <Select
                      defaultValue="Pilih Jenis Produk"
                      onChange={handleChange}
                    >
                      <Option value="Paspor Biasa 48 Halaman">
                        Paspor Biasa 48 Halaman
                      </Option>
                      <Option value="Paspor Biasa 24 Halaman">
                        Paspor Biasa 24 Halaman
                      </Option>
                      <Option value="Paspor Elektronik 48 Halaman">
                        Paspor Elektronik 48 Halaman
                      </Option>
                      <Option value="Paspor Elektronik Polikarbonat">
                        Paspor Elektronik Polikarbonat
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Informasi Produk"
                    name="informasi_produk"
                    rules={[
                      {
                        required: true,
                        message: 'Pilih informasi produk yang ditanyakan',
                      },
                    ]}
                    style={{ flex: 1 }}
                  >
                    <Select
                      defaultValue="Pilih Informasi Produk"
                      onChange={handleChange}
                    >
                      <Option value="Jenis Permohonan">Jenis Permohonan</Option>
                      <Option value="Biaya Permohonan">Biaya Permohonan</Option>
                      <Option value="Tujuan permohonan">
                        Tujuan Permohonan
                      </Option>
                      <Option value="Dokumen Persyaratan">
                        Dokumen Persyaratan
                      </Option>
                      <Option value="Tahapan Permohonan">
                        Tahapan Permohonan
                      </Option>
                    </Select>
                  </Form.Item>
                  <div style={{ float: 'right', display: 'flex' }}>
                    <Button
                      style={{ margin: '0 7px' }}
                      type="primary"
                      htmlType="submit"
                      size="large"
                    >
                      Rekam
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
            <Col span={6}></Col>
          </Row>
        </SubFeatureContent>
      </Layout>
    </>
  );
};

export default InformationCounter;
