import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle, BreadCrumbContainer } from './style';

const Report = () => {
  return (
    <>
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Laporan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <SingleHeader title="LAPORAN" />
        <Content>
          <CardContent>
            <Link to="/laporan/rekam-counter">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Rekam Counter</CardTitle>
              </Card>
            </Link>
            <Link to="/laporan/informasi-sering-ditanyakan">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Laporan Informasi yang Sering Ditanyakan</CardTitle>
              </Card>
            </Link>
            <Link to="/laporan/peforma-petugas">
              <Card backgroundColor="#749AA9" width="240px">
                <CardTitle>Laporan Kinerja Petugas Duta Layanan</CardTitle>
              </Card>
            </Link>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default Report;
