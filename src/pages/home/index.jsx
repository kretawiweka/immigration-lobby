import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/informasi-layanan">
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Informasi Layanan</CardTitle>
            </Card>
          </Link>
          <Link to="/status-permohonan">
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Status Permohonan</CardTitle>
            </Card>
          </Link>
          <Link to="/laporan">
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Laporan</CardTitle>
            </Card>
          </Link>
        </CardContent>
        <CardContent>
          <Link to="/akun-pengguna">
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Akun Pengguna</CardTitle>
            </Card>
          </Link>
          <Link to="/kelola-informasi-layanan">
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Kelola Informasi Layanan</CardTitle>
            </Card>
          </Link>
          <Link to="/online-chat/start-room">
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Online Chat</CardTitle>
            </Card>
          </Link>
        </CardContent>
      </Content>
    </Layout>
  );
};

export default HomePage;
