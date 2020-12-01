import React from 'react';
import { Breadcrumb, Card, Form, Button, Select } from 'antd';

import Layout from '../../components/Layout';
import { SubFeatureContent, BreadCrumbContainer } from './style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;

const FrequentlyAsk = () => {
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
                <strong>Informasi Sering Ditanyakan</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Card>
            <Form {...layout}>
              <Form.Item label="Jenis Layanan">
                <Select
                  defaultValue="Pilih Jenis Layanan"
                  onChange={handleChange}
                >
                  <Option value="Jenis Layanan Keimigrasian">
                    Jenis Layanan Keimigrasian
                  </Option>
                  <Option value="Jenis Produk">Jenis Produk</Option>
                  <Option value="Jenis Permohonan">Jenis Permohonan</Option>
                  <Option value="Biaya Permohonan">Biaya Permohonan</Option>
                  <Option value="Tujuan permohonan">Tujuan Permohonan</Option>
                  <Option value="Dokumen Persyaratan">
                    Dokumen Persyaratan
                  </Option>
                  <Option value="Tahapan Permohonan">Tahapan Permohonan</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Jenis Produk">
                <Select
                  defaultValue="Pilih Jenis Produk"
                  onChange={handleChange}
                >
                  <Option value="Jenis Layanan Keimigrasian">
                    Jenis Layanan Keimigrasian
                  </Option>
                  <Option value="Jenis Produk">Jenis Produk</Option>
                  <Option value="Jenis Permohonan">Jenis Permohonan</Option>
                  <Option value="Biaya Permohonan">Biaya Permohonan</Option>
                  <Option value="Tujuan permohonan">Tujuan Permohonan</Option>
                  <Option value="Dokumen Persyaratan">
                    Dokumen Persyaratan
                  </Option>
                  <Option value="Tahapan Permohonan">Tahapan Permohonan</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Jenis Permohonan">
                <Select
                  defaultValue="Pilih Jenis Permohonan"
                  onChange={handleChange}
                >
                  <Option value="Jenis Layanan Keimigrasian">
                    Jenis Layanan Keimigrasian
                  </Option>
                  <Option value="Jenis Produk">Jenis Produk</Option>
                  <Option value="Jenis Permohonan">Jenis Permohonan</Option>
                  <Option value="Biaya Permohonan">Biaya Permohonan</Option>
                  <Option value="Tujuan permohonan">Tujuan Permohonan</Option>
                  <Option value="Dokumen Persyaratan">
                    Dokumen Persyaratan
                  </Option>
                  <Option value="Tahapan Permohonan">Tahapan Permohonan</Option>
                </Select>
              </Form.Item>
              <div style={{ float: 'right', display: 'flex' }}>
                <Button
                  style={{ margin: '0 7px' }}
                  type="primary"
                  htmlType="submit"
                >
                  Simpan
                </Button>
                <Button style={{ margin: '0 7px' }} htmlType="submit">
                  Batal
                </Button>
              </div>
            </Form>
          </Card>
        </SubFeatureContent>
      </Layout>
    </>
  );
};

export default FrequentlyAsk;
