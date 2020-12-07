import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle, BreadCrumbContainer } from './style';

const ApplicationStatus = () => {
  return (
    <>
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Status Permohonan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
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
