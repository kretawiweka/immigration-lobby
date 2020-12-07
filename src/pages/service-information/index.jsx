import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';

const ServiceInformation = () => {
  const onSubmit = () => {};
  return (
    <>
      <Layout>
        <SingleHeader title="INFORMASI LAYANAN" />
        <Content>
          <h2>Pencarian Informasi Layanan</h2>
          <Form
            name="basic"
            onFinish={onSubmit}
            style={{ display: 'flex', width: '100%' }}
          >
            <Form.Item
              name="search"
              rules={[{ required: true, message: 'Masukkan kata kunci' }]}
              style={{ flex: 1 }}
            >
              <Input placeholder="Contoh: Syarat Paspor Biasa 24 Halaman" />
            </Form.Item>
            <Form.Item>
              <Button style={{ marginLeft: '14px' }}>Telusuri</Button>
            </Form.Item>
          </Form>
          <CardContent>
            <Link to="/informasi-layanan/1">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Paspor</CardTitle>
              </Card>
            </Link>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default ServiceInformation;
