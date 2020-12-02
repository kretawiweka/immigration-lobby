import React from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';

const Report = () => {
  return (
    <>
      <Layout>
        <SingleHeader color="#fafafa" title="LAPORAN" />
        <Content>
          <CardContent>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Rekam Counter</CardTitle>
            </Card>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Laporan Informasi yang Sering Ditanyakan</CardTitle>
            </Card>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Laporan Kinerja Petugas Duta Layanan</CardTitle>
            </Card>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default Report;
