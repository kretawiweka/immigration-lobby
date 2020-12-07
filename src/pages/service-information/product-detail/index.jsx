import React from 'react';
import { Breadcrumb } from 'antd';
import { useParams } from 'react-router-dom';
import { SingleHeader } from '../../../components/Header';
import Layout from '../../../components/Layout';
import { BreadCrumbContainer, ContentPassport } from '../style';
import Passport from './passport';

const ProductDetail = () => {
  let { id_service, id_product } = useParams();
  const renderProductList = () => {
    console.log(id_product);
    if (id_service) {
      switch (id_service) {
        case '2':
          return <Passport />;
        case '3':
          return <Passport />;
        default:
          return <Passport idProduct={id_product} />;
      }
    }
  };
  return (
    <>
      <Layout>
        <ContentPassport>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Informasi Layanan</Breadcrumb.Item>
              <Breadcrumb.Item>Paspor</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Informasi Produk</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <SingleHeader title="Informasi Produk" />
          {renderProductList()}
        </ContentPassport>
      </Layout>
    </>
  );
};

export default ProductDetail;
