import React from 'react';
import { Card } from 'antd';
import { Content, DetailProductCardContent } from '../style';
import { passport } from './dataRoute';

const ProductDetailPassport = ({ idProduct }) => {
  return (
    <div style={{ margin: '14px 0' }}>
      <Content>
        <DetailProductCardContent>
          <Card bordered={false} style={{ width: '100%' }}>
            <div
              dangerouslySetInnerHTML={{ __html: passport[idProduct].data }}
            ></div>
          </Card>
        </DetailProductCardContent>
      </Content>
    </div>
  );
};

export default ProductDetailPassport;
