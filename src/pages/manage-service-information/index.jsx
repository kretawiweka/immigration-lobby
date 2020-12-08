import React, { useState, useEffect } from 'react';
import { Select, Breadcrumb } from 'antd';

import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { SelectOptionArea, Content, BreadCrumbContainer } from './style';
import Service from './service';
import ProductInformation from './product-information';
import Product from './product';

const { Option } = Select;

const ManageServiceInformation = () => {
  const [conditionState, setConditionState] = useState('service');
  const [serviceSelect, setServiceSelect] = useState('');
  const [productInformationSelect, setProductInformationSelect] = useState('');

  useEffect(() => {
    if (serviceSelect === '') {
      setConditionState('service');
    } else if (productInformationSelect === '') {
      setConditionState('product');
    } else {
      setConditionState('product_information');
    }
  }, [serviceSelect, productInformationSelect]);

  const serviceHandleChange = (value) => {
    setServiceSelect(value);
  };

  const productHandleChange = (value) => {
    setProductInformationSelect(value);
  };

  const DataTable = () => {
    switch (conditionState) {
      case 'product':
        return <Product />;
      case 'product_information':
        return <ProductInformation />;
      default:
        return <Service />;
    }
  };

  return (
    <>
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Kelola Informasi Layanan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <SingleHeader title="KELOLA INFORMASI LAYANAN" />
        <Content>
          <SelectOptionArea>
            <h3><strong>Jenis Layanan</strong></h3>
            <Select
              defaultValue="Semua"
              style={{ width: '250px' }}
              onChange={serviceHandleChange}
              size="large"
            >
              <Option value="">Semua</Option>
              <Option value="Paspor">Paspor</Option>
            </Select>
          </SelectOptionArea>
          {conditionState !== 'service' && (
            <SelectOptionArea>
              <h3><strong>Jenis Produk</strong></h3>
              <Select
                defaultValue="Semua"
                style={{ width: '250px' }}
                onChange={productHandleChange}
                size="large"
              >
                <Option value="">Semua</Option>
                <Option value="Paspor Biasa 24 Halaman">
                  Paspor Biasa 24 Halaman
                </Option>
                <Option value="Paspor Biasa 48 Halaman">
                  Paspor Biasa 48 Halaman
                </Option>
              </Select>
            </SelectOptionArea>
          )}
        </Content>
        <DataTable />
      </Layout>
    </>
  );
};

export default ManageServiceInformation;
