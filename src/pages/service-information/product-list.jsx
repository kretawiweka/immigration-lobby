import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { BreadCrumbContainer, ContentPassport } from './style';
import { Content, CardContent, CardTitle } from './style';

const ProductList = () => {
  return (
    <>
      <Layout>
        <ContentPassport>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Informasi Layanan</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>List Produk</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <div style={{ margin: '14px 0' }}>
            <Content>
              <CardContent>
                <Link to="/informasi-layanan/1/1">
                  <Card backgroundColor="#749AA9" width="240px">
                    <CardTitle>Paspor Biasa 24 Halaman</CardTitle>
                  </Card>
                </Link>
                <Link to="/informasi-layanan/1/1">
                  <Card backgroundColor="#749AA9" width="240px">
                    <CardTitle>Paspor Biasa 48 Halaman</CardTitle>
                  </Card>
                </Link>
                <Link to="/informasi-layanan/1/1">
                  <Card backgroundColor="#749AA9" width="240px">
                    <CardTitle>Paspor Elektronik 48 Halaman</CardTitle>
                  </Card>
                </Link>
              </CardContent>
              <CardContent>
                <Link to="/informasi-layanan/1/1">
                  <Card backgroundColor="#749AA9" width="240px">
                    <CardTitle>Paspor Elektronik Polikarbonat</CardTitle>
                  </Card>
                </Link>
              </CardContent>
            </Content>
          </div>
        </ContentPassport>
      </Layout>
    </>
  );
};

export default ProductList;
