import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Content, CardContent } from '../style';

const ProductListResidencePermit = () => {
  return (
    <div style={{ margin: '14px 0' }}>
      <Content>
        <CardContent flexDirection="column">
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>Izin Tinggal Biasa 24 Halaman</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>Izin Tinggal Biasa 48 Halaman</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>Izin Tinggal Elektronik 48 Halaman</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>Izin Tinggal Elektronik Polikarbonat</h3>
            </Card>
          </Link>
        </CardContent>
      </Content>
    </div>
  );
};

export default ProductListResidencePermit;
