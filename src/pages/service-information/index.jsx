import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Input, Breadcrumb } from 'antd';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle, BreadCrumbContainer } from './style';

const ServiceInformation = () => {
  let history = useHistory();

  const onSubmit = (value) => {
    let searchQuery = encodeURIComponent(value.search);
    history.push({
      pathname: '/pencarian',
      search: `?search=${searchQuery}`,
    });
  };
  return (
    <>
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Informasi Layanan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
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
              <Button htmlType="submit" style={{ marginLeft: '14px' }}>
                Telusuri
              </Button>
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
