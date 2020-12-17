import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Form, Input, Card, Breadcrumb } from 'antd';
import queryString from 'query-string';

import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent } from './style';
import { BreadCrumbContainer } from './style';

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
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>Informasi Layanan</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Pencarian</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
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
              <Input placeholder="Ketik untuk mencari informasi layanan keimigrasian" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ marginLeft: '14px' }}>
                Cari
              </Button>
            </Form.Item>
          </Form>
        </Content>
        {searchResult && (
          <Content>
            <CardContent>
              <Link to="/informasi-layanan/1/1">
                <Card title="Paspor Biasa 24 Halaman" style={{ width: '100%' }}>
                  <h3>1. Deskripsi Umum Paspor Biasa 24 Halaman</h3>
                  <p>
                    Paspor adalah dokumen resmi yang dikeluarkan oleh pejabat
                    yang berwenang dari suatu negara yang memuat identitas
                    pemegangnya dan berlaku untuk melakukan perjalanan antar
                    negara. Paspor berisi biodata pemegangnya yang meliputi
                    antara lain foto pemegang, tanda tangan, tempat dan tanggal
                    kelahiran, informasi kebangsaan dan kadang-kadang juga
                    beberapa informasi lain mengenai identifikasi individu ...
                  </p>
                </Card>
              </Link>
            </CardContent>
            <CardContent>
              <Link to="/informasi-layanan/1/1">
                <Card title="Paspor Biasa 48 Halaman" style={{ width: '100%' }}>
                  <h3>1. Deskripsi Umum Paspor Biasa 24 Halaman</h3>
                  <p>
                    Paspor adalah dokumen resmi yang dikeluarkan oleh pejabat
                    yang berwenang dari suatu negara yang memuat identitas
                    pemegangnya dan berlaku untuk melakukan perjalanan antar
                    negara. Paspor berisi biodata pemegangnya yang meliputi
                    antara lain foto pemegang, tanda tangan, tempat dan tanggal
                    kelahiran, informasi kebangsaan dan kadang-kadang juga
                    beberapa informasi lain mengenai identifikasi individu ...
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
                  <h3>4. Deskripsi Umum Paspor Biasa 24 Halaman</h3>
                  <p>
                    Paspor adalah dokumen resmi yang dikeluarkan oleh pejabat
                    yang berwenang dari suatu negara yang memuat identitas
                    pemegangnya dan berlaku untuk melakukan perjalanan antar
                    negara. Paspor berisi biodata pemegangnya yang meliputi
                    antara lain foto pemegang, tanda tangan, tempat dan tanggal
                    kelahiran, informasi kebangsaan dan kadang-kadang juga
                    beberapa informasi lain mengenai identifikasi individu ...
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
