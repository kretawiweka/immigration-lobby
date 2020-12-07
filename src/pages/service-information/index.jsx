import React from 'react';
import { Link } from 'react-router-dom';

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
