import React, { useState } from 'react';
import { Breadcrumb, Card, Form, Button, Select, Typography, DatePicker, Row, Col } from 'antd';
import Chart from 'react-apexcharts';
import moment from 'moment';

import Layout from '../../components/Layout';
import { SubFeatureContent, BreadCrumbContainer } from './style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;
const { Title } = Typography;
const { RangePicker } = DatePicker;

function onChangeSelect(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const OfficerPerformance = () => {
  const dateFormat = 'DD-MM-YYYY';
  const [dataChart] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: [ ['Dirsya', 'Farhani'], ['Michael', 'Pieterson'], ['Andi', 'Putra Farizal'], ['Beno', 'Syamsudin'], ['Agung', 'Hutama'], ['Tio', 'Raharjo'], ['Marthalina', 'Clarissa'], ['Jefferson', 'Amiruddin']],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [55, 94, 101, 134, 180, 204, 381, 490],
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
                <strong>Laporan Kinerja Petugas Duta Layanan</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Row>
          <Col span={2}></Col>
          <Col span={6}>
            <Card>
              <Title level={4} style={{ marginLeft: 0 }}>
                <strong>
                  Filter Data Laporan
                </strong>
              </Title>
              <Title level={5} style={{ marginLeft: 0 }}>
                <strong>
                  <small>Laporan Kinerja Petugas Duta Layanan</small>
                </strong>
              </Title>
              <br></br>
              <Form {...layout}>
                <Form.Item
                  label="Kantor Imigrasi"
                  name="kantor_imigrasi"
                  rules={[{ required: true, message: 'Pilih kantor imigrasi' }]}
                  style={{ flex: 1 }}
                >
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Kantor Imigrasi"
                    defaultValue="Pilih Kantor Imigrasi"
                    optionFilterProp="children"
                    onChange={onChangeSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="JAKARTA SELATAN">
                      KANIM KELAS I KHUSUS NON TPI JAKARTA SELATAN
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Periode Laporan"
                  name="periode_laporan"
                  rules={[{ required: true, message: 'Pilih periode laporan awal dan akhir' }]}
                  style={{ flex: 1 }}>
                    <RangePicker defaultValue={[moment('01-12-2020', dateFormat), moment('31-12-2020', dateFormat)]} />
                  </Form.Item>
                <div style={{ float: 'right', display: 'flex' }}>
                  <Button
                    style={{ margin: '0 7px' }}
                    type="primary"
                    htmlType="submit"
                    size="large"
                  >
                    Tampilkan
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
          <Col span={14}>
            <Card style={{ marginLeft: '40px' }}>
              <h2><strong>Laporan Kinerja Petugas Duta Layanan</strong></h2>
              <h4>Kantor Imigrasi Kelas I Khusus Jakarta Selatan</h4>
              <h4>Periode Laporan: 01 s.d. 31 Desember 2020</h4>
              <br></br>
              <hr></hr>
              <br></br>
              <center>
                <Chart
                  options={dataChart.options}
                  series={dataChart.series}
                  type="bar"
                  width="700"
                />
              </center>
            </Card>
          </Col>
          <Col span={2}></Col>
          </Row>
        </SubFeatureContent>
      </Layout>
    </>
  );
};

export default OfficerPerformance;
