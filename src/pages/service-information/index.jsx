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
              <strong>Jenis Layanan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SingleHeader title="JENIS LAYANAN" />
          <div>
            <Button style={{ margin: '0 14px' }}>Indonesia</Button>
            <Button style={{ margin: '0 14px' }}>English</Button>
          </div>
        </div>
        <Content>
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
              <Input placeholder="Ketik untuk mencari informasi layanan keimigrasian" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ marginLeft: '14px' }}>
                Cari
              </Button>
            </Form.Item>
          </Form>
          <CardContent>
            <Link to="/informasi-layanan/1">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Paspor</CardTitle>
              </Card>
            </Link>
            <Link to="/informasi-layanan/2">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Izin Tinggal</CardTitle>
              </Card>
            </Link>
            <Link to="/informasi-layanan/3">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Visa</CardTitle>
              </Card>
            </Link>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default ServiceInformation;
