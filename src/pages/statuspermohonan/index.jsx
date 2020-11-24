import React from 'react';
import { Card, Breadcrumb } from 'antd';

import Layout from '../../components/Layout';
import { Content, CardContent, CardTitle } from './style';

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
            </Breadcrumb>
            <CardContent>
            <Card
                hoverable
                style={{ width: 240, margin: 14 }}
                cover={
                    <img
                    alt="example"
                    src="https://indonesia.go.id/assets/img/content_image/1564472296_Paspor_Indonesia.jpg"
                    />
                }
                >
                <CardTitle>Paspor</CardTitle>
            </Card>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://www.tsunagulocal.com/wp-content/uploads/2020/08/visannonth2.jpg"
                />
              }
            >
              <CardTitle>Izin Tinggal</CardTitle>
            </Card>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
