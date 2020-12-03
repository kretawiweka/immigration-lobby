import React from 'react';

import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <SingleHeader title="LAYANAN KEIMIGRASIAN" />
      <Content>
        <CardContent>
          <Card backgroundColor="#749AA9" width="240px">
            <CardTitle>Informasi Layanan</CardTitle>
          </Card>
          <Card backgroundColor="#749AA9" width="240px">
            <CardTitle>Online Chat</CardTitle>
          </Card>
          <Card backgroundColor="#749AA9" width="240px">
            <CardTitle>Status Permohonan</CardTitle>
          </Card>
        </CardContent>
        <CardContent>
          <Card backgroundColor="#749AA9" width="240px">
            <CardTitle>Kelola Informasi Layanan</CardTitle>
          </Card>
          <Card backgroundColor="#749AA9" width="240px">
            <CardTitle>Layanan</CardTitle>
          </Card>
          <Card backgroundColor="#749AA9" width="240px">
            <CardTitle>Akun</CardTitle>
          </Card>
        </CardContent>
      </Content>
    </Layout>
  );
};

export default HomePage;
