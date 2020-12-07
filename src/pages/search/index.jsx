import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Form, Input, Card } from 'antd';
import queryString from 'query-string';

import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent } from './style';

const Search = () => {
  const [form] = Form.useForm();
  const location = useLocation();

  const [searchResult, setSearchResult] = useState(false);

  useEffect(() => {
    if (location.search) {
      let search = decodeURIComponent(location.search);
      let searchParsed = queryString.parse(search).search;
      form.setFieldsValue({
        search: searchParsed,
      });
      setSearchResult(true);
    }
    // eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    setSearchResult(true);
  };
  return (
    <>
      <Layout>
        <SingleHeader title="Pencarian Informasi Layanan" />
        <Content>
          <Form
            form={form}
            name="basic"
            onFinish={onSubmit}
            style={{ display: 'flex', width: '100%' }}
          >
            <Form.Item
              name="search"
              rules={[{ required: true, message: 'Masukkan kata kunci' }]}
              style={{ flex: 1 }}
            >
              <Input placeholder="Contoh: Syarat Paspor Biasa 24 Halaman" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ marginLeft: '14px' }}>
                Telusuri
              </Button>
            </Form.Item>
          </Form>
        </Content>
        {searchResult && (
          <Content>
            <CardContent>
              <Link to="/informasi-layanan/1/1">
                <Card title="Paspor Biasa 24 Halaman" style={{ width: '100%' }}>
                  <h3>4. Dokumen Persyaratan</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book ....
                  </p>
                </Card>
              </Link>
            </CardContent>
            <CardContent>
              <Link to="/informasi-layanan/1/1">
                <Card title="Paspor Biasa 48 Halaman" style={{ width: '100%' }}>
                  <h3>4. Dokumen Persyaratan</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book ....
                  </p>
                </Card>
              </Link>
            </CardContent>
            <CardContent>
              <Link to="/informasi-layanan/1/1">
                <Card
                  title="Paspor Elektronik 24 Halaman"
                  style={{ width: '100%' }}
                >
                  <h3>4. Dokumen Persyaratan</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book ....
                  </p>
                </Card>
              </Link>
            </CardContent>
          </Content>
        )}
      </Layout>
    </>
  );
};

export default Search;
