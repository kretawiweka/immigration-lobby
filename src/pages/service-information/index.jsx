import React from 'react';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';

const ServiceInformation = () => {
  return (
    <>
      <Layout>
        <SingleHeader title="INFORMASI LAYANAN" />
        <Content>
          <CardContent>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Paspor</CardTitle>
            </Card>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Izin Tinggal</CardTitle>
            </Card>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Visa</CardTitle>
            </Card>
            <Card backgroundColor="#749AA9" width="240px">
              <CardTitle>Kelola Layanan</CardTitle>
            </Card>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default ServiceInformation;
