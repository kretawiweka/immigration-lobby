import React, { useState } from 'react';
import { Breadcrumb, Card, Form, Button, Select, DatePicker } from 'antd';
import Chart from 'react-apexcharts';

import Layout from '../../components/Layout';
import { SubFeatureContent, BreadCrumbContainer } from './style';

const { Option } = Select;
const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const InformationCounter = () => {
  const [dataChart] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Layout>
        <SubFeatureContent>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Laporan</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Rekam Counter</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <div style={{ display: 'flex' }}>
            <Card style={{ margin: '14px', flex: '1' }}>
              <Form {...layout}>
                <Form.Item label="Jenis Layanan">
                  <Select
                    defaultValue="Pilih Jenis Layanan"
                    onChange={handleChange}
                  >
                    <Option value="Jenis Layanan Keimigrasian">
                      Jenis Layanan Keimigrasian
                    </Option>
                    <Option value="Jenis Produk">Jenis Produk</Option>
                    <Option value="Jenis Permohonan">Jenis Permohonan</Option>
                    <Option value="Biaya Permohonan">Biaya Permohonan</Option>
                    <Option value="Tujuan permohonan">Tujuan Permohonan</Option>
                    <Option value="Dokumen Persyaratan">
                      Dokumen Persyaratan
                    </Option>
                    <Option value="Tahapan Permohonan">
                      Tahapan Permohonan
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Rentang Waktu">
                  <RangePicker />
                </Form.Item>
                <div style={{ float: 'right', display: 'flex' }}>
                  <Button
                    style={{ margin: '0 7px' }}
                    type="primary"
                    htmlType="submit"
                  >
                    Tampilkan
                  </Button>
                  <Button style={{ margin: '0 7px' }} htmlType="submit">
                    Reset
                  </Button>
                </div>
              </Form>
            </Card>
            <Card style={{ margin: '14px' }}>
              <h2>Paspor</h2>
              <Chart
                options={dataChart.options}
                series={dataChart.series}
                type="bar"
                width="500"
              />
            </Card>
          </div>
        </SubFeatureContent>
      </Layout>
    </>
  );
};

export default InformationCounter;
