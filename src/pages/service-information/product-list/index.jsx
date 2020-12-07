import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { useParams } from 'react-router-dom';

import Layout from '../../../components/Layout';
import { SingleHeader } from '../../../components/Header';
import { BreadCrumbContainer, ContentPassport } from '../style';
import Passport from './passport';
import ResidencePermit from './residence-permit';
import Visa from './visa';

const ProductList = () => {
  let { id_service } = useParams();
  const [breadTitle, setBreadTitle] = useState('');

  const renderProductList = () => {
    if (id_service) {
      switch (id_service) {
        case '2':
          return <ResidencePermit />;
        case '3':
          return <Visa />;
        default:
          return <Passport />;
      }
    }
  };

  useEffect(() => {
    if (id_service) {
      switch (id_service) {
        case '2':
          setBreadTitle('Izin Tinggal');
          break;
        case '3':
          setBreadTitle('Visa');
          break;
        default:
          setBreadTitle('Paspor');
          break;
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Layout>
        <ContentPassport>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Informasi Layanan</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>{breadTitle}</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <SingleHeader title="Jenis Produk" />
          {renderProductList()}
        </ContentPassport>
      </Layout>
    </>
  );
};

export default ProductList;
