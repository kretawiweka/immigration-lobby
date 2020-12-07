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
            <h4>Jenis Layanan</h4>
            <Select
              defaultValue="Pilih Jenis Layanan"
              style={{ width: '200px' }}
              onChange={serviceHandleChange}
            >
              <Option value="">Semua</Option>
              <Option value="Paspor">Paspor</Option>
            </Select>
          </SelectOptionArea>
          {conditionState !== 'service' && (
            <SelectOptionArea>
              <h4>Jenis Produk</h4>
              <Select
                defaultValue="Pilih Jenis Produk"
                style={{ width: '200px' }}
                onChange={productHandleChange}
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
