import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';

const ApplicationStatus = () => {
  return (
    <>
      <Layout>
        <SingleHeader title="STATUS PERMOHONAN" />
        <Content>
          <CardContent>
            <Link to="/status-permohonan/paspor">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Paspor</CardTitle>
              </Card>
            </Link>
            <Link to="/status-permohonan/izin-tinggal">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Izin Tinggal</CardTitle>
              </Card>
            </Link>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default ApplicationStatus;
