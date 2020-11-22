import React from 'react';
import { Card } from 'antd';

import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import { Content, CardContent, CardTitle } from './style';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Content>
          <CardContent>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
                />
              }
            >
              <CardTitle>Informasi Layanan</CardTitle>
            </Card>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
                />
              }
            >
              <CardTitle>Online Chat</CardTitle>
            </Card>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
                />
              }
            >
              <CardTitle>Status Permohonan</CardTitle>
            </Card>
          </CardContent>
          <CardContent>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
                />
              }
            >
              <CardTitle>Kelola Informasi Layanan</CardTitle>
            </Card>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
                />
              }
            >
              <CardTitle>Layanan</CardTitle>
            </Card>
            <Card
              hoverable
              style={{ width: 240, margin: 14 }}
              cover={
                <img
                  alt="example"
                  src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
                />
              }
            >
              <CardTitle>Akun</CardTitle>
            </Card>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
