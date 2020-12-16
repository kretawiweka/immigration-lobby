import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Input, Breadcrumb } from 'antd';
import queryString from 'query-string';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle, BreadCrumbContainer } from './style';

const ServiceInformation = (props) => {
  const [isEng, setIsEng] = useState(false);
  let history = useHistory();

  const onSubmit = (value) => {
    let searchQuery = encodeURIComponent(value.search);
    history.push({
      pathname: '/pencarian',
      search: `?search=${searchQuery}`,
    });
  };

  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    if (parsed.lang === 'eng') {
      console.log('here');
      setIsEng(true);
    } else {
      setIsEng(false);
    }
  }, [props.location.search]);

  const IndonesiaContent = () => {
    return (
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Jenis Layanan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SingleHeader title="JENIS LAYANAN" />
          <div>
            <Link to="/informasi-layanan">
              <Button
                type={!isEng ? 'primary' : ''}
                style={{ margin: '0 14px' }}
              >
                Indonesia
              </Button>
            </Link>
            <Link to="/informasi-layanan?lang=eng">
              <Button
                type={isEng ? 'primary' : ''}
                style={{ margin: '0 14px' }}
              >
                English
              </Button>
            </Link>
          </div>
        </div>
        <Content>
          <Form
            name="basic"
            onFinish={onSubmit}
            style={{ display: 'flex', width: '100%' }}
          >
            <Form.Item
              name="search"
              rules={[{ required: true, message: 'Masukkan kata kunci' }]}
              style={{ flex: 1 }}
            >
              <Input placeholder="Ketik untuk mencari informasi layanan keimigrasian" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ marginLeft: '14px' }}>
                Cari
              </Button>
            </Form.Item>
          </Form>
          <CardContent>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <Link to="/informasi-layanan/1">
                <Card backgroundColor="#749AA9" width="240px">
                  <CardTitle>Paspor</CardTitle>
                </Card>
              </Link>
              <Link to="/informasi-layanan/2">
                <Card backgroundColor="#749AA9" width="240px">
                  <CardTitle>Izin Tinggal</CardTitle>
                </Card>
              </Link>
              <Link to="/informasi-layanan/3">
                <Card backgroundColor="#749AA9" width="240px">
                  <CardTitle>Visa</CardTitle>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Content>
      </Layout>
    );
  };

  const EnglishContent = () => {
    return (
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Service Type</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SingleHeader title="SERVICE TYPE" />
          <div>
            <Link to="/informasi-layanan">
              <Button
                type={!isEng ? 'primary' : ''}
                style={{ margin: '0 14px' }}
              >
                Indonesia
              </Button>
            </Link>
            <Link to="/informasi-layanan?lang=eng">
              <Button
                type={isEng ? 'primary' : ''}
                style={{ margin: '0 14px' }}
              >
                English
              </Button>
            </Link>
          </div>
        </div>
        <Content>
          <Form
            name="basic"
            onFinish={onSubmit}
            style={{ display: 'flex', width: '100%' }}
          >
            <Form.Item
              name="search"
              rules={[{ required: true, message: 'Masukkan kata kunci' }]}
              style={{ flex: 1 }}
            >
              <Input placeholder="Typing for search service information" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ marginLeft: '14px' }}>
                Search
              </Button>
            </Form.Item>
          </Form>
          <CardContent>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <Link to="/informasi-layanan/1">
                <Card backgroundColor="#749AA9" width="240px">
                  <CardTitle>Passport</CardTitle>
                </Card>
              </Link>
              <Link to="/informasi-layanan/2">
                <Card backgroundColor="#749AA9" width="240px">
                  <CardTitle>Stay Permit</CardTitle>
                </Card>
              </Link>
              <Link to="/informasi-layanan/3">
                <Card backgroundColor="#749AA9" width="240px">
                  <CardTitle>Visa</CardTitle>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Content>
      </Layout>
    );
  };

  return <>{isEng ? <EnglishContent /> : <IndonesiaContent />}</>;
};

export default ServiceInformation;
