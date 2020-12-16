import React, { useState } from 'react';
import {
  Breadcrumb,
  Card,
  Form,
  Button,
  Select,
  Typography,
  DatePicker,
  Row,
  Col,
} from 'antd';
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

const FrequentlyAsk = () => {
  const dateFormat = 'DD-MM-YYYY';
  const [isVisible, setIsVisible] = useState(false);
  const [dataChart] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          ['Visa 211A', '(VKSK)', '- Tujuan', 'Permohonan'],
          ['Paspor Biasa', '48 Halaman', '- Dokumen', 'Persyaratan'],
          ['Izin Tinggal', 'ITAS', '- Tahapan', 'Permohonan'],
          ['Visa', 'VITAS', '- Dokumen', 'Persyaratan'],
          ['Paspor', 'Elektronik 48', 'Halaman', '- Biaya', 'Permohonan'],
          ['Visa', '211A (VKSK)', '- Dokumen', 'Persyaratan'],
          ['Visa', '211A (VKSK)', '- Biaya', 'Permohonan'],
          ['Izin Tinggal', 'Kartu ITAP', '- Dokumen', 'Persyaratan'],
        ],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [35, 89, 105, 231, 234, 245, 290, 339],
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
                <strong>Laporan Informasi Yang Sering Ditanyakan</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Row>
            <Col span={2}></Col>
            <Col span={6}>
              <Card>
                <Title level={4} style={{ marginLeft: 0 }}>
                  <strong>Filter Data Laporan</strong>
                </Title>
                <Title level={5} style={{ marginLeft: 0 }}>
                  <strong>
                    <small>
                      Laporan Informasi Layanan Keimigrasian yang Sering
                      Ditanyakan
                    </small>
                  </strong>
                </Title>
                <br></br>
                <Form
                  {...layout}
                  onFinish={() => {
                    setIsVisible(true);
                  }}
                >
                  <Form.Item
                    label="Jenis Layanan"
                    name="jenis_layanan"
                    rules={[{ required: true, message: 'Pilih jenis layanan' }]}
                    style={{ flex: 1 }}
                  >
                    <Select
                      defaultValue="Pilih Jenis Layanan"
                      onChange={handleChange}
                    >
                      <Option value="Semua">Semua</Option>
                      <Option value="Paspor">Paspor</Option>
                      <Option value="Izin Tinggal">Izin Tinggal</Option>
                      <Option value="Visa">Visa</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Kantor Imigrasi"
                    name="kantor_imigrasi"
                    rules={[
                      { required: true, message: 'Pilih kantor imigrasi' },
                    ]}
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
                      <Option value="Semua">Semua</Option>
                      <Option value="BANDA ACEH">
                        KANIM KELAS I TPI BANDA ACEH
                      </Option>
                      <Option value="LANGSA">KANIM KELAS II TPI LANGSA</Option>
                      <Option value="LHOKSEUMAWE">
                        KANIM KELAS II TPI LHOKSEUMAWE
                      </Option>
                      <Option value="MEULABOH">
                        KANIM KELAS II TPI MEULABOH
                      </Option>
                      <Option value="SABANG">KANIM KELAS II TPI SABANG</Option>
                      <Option value="TAKENGON">
                        KANIM KELAS III NON TPI TAKENGON
                      </Option>
                      <Option value="BLITAR">
                        KANIM KELAS II NON TPI BLITAR
                      </Option>
                      <Option value="JEMBER">KANIM KELAS II TPI JEMBER</Option>
                      <Option value="KEDIRI">
                        KANIM KELAS II NON TPI KEDIRI
                      </Option>
                      <Option value="MADIUN">
                        KANIM KELAS II NON TPI MADIUN
                      </Option>
                      <Option value="MALANG">KANIM KELAS I TPI MALANG</Option>
                      <Option value="PAMEKASAN">
                        KANIM KELAS III NON TPI PAMEKASAN
                      </Option>
                      <Option value="PONOROGO">
                        KANIM KELAS III NON TPI PONOROGO
                      </Option>
                      <Option value="SURABAYA">
                        KANIM KELAS I KHUSUS TPI SURABAYA
                      </Option>
                      <Option value="TANJUNG PERAK">
                        KANIM KELAS I TPI TANJUNG PERAK
                      </Option>
                      <Option value="ENTIKONG">
                        KANIM KELAS II TPI ENTIKONG
                      </Option>
                      <Option value="KETAPANG">
                        KANIM KELAS III NON TPI KETAPANG
                      </Option>
                      <Option value="PONTIANAK">
                        KANIM KELAS I TPI PONTIANAK
                      </Option>
                      <Option value="PUTUSSIBAU">
                        KANIM KELAS III NON TPI PUTUSSIBAU
                      </Option>
                      <Option value="SAMBAS">KANIM KELAS II TPI SAMBAS</Option>
                      <Option value="SANGGAU">
                        KANIM KELAS II TPI SANGGAU
                      </Option>
                      <Option value="SINGKAWANG">
                        KANIM KELAS II NON TPI SINGKAWANG
                      </Option>
                      <Option value="BANJARMASIN">
                        KANIM KELAS I TPI BANJARMASIN
                      </Option>
                      <Option value="BATULICIN">
                        KANIM KELAS II TPI BATULICIN
                      </Option>
                      <Option value="BALIKPAPAN">
                        KANIM KELAS I TPI BALIKPAPAN
                      </Option>
                      <Option value="NUNUKAN">
                        KANIM KELAS II TPI NUNUKAN
                      </Option>
                      <Option value="SAMARINDA">
                        KANIM KELAS I TPI SAMARINDA
                      </Option>
                      <Option value="TANJUNG REDEB">
                        KANIM KELAS III TPI TANJUNG REDEB
                      </Option>
                      <Option value="TARAKAN">
                        KANIM KELAS II TPI TARAKAN
                      </Option>
                      <Option value="BITUNG">KANIM KELAS II TPI BITUNG</Option>
                      <Option value="KOTAMOBAGU">
                        KANIM KELAS III NON TPI KOTAMOBAGU
                      </Option>
                      <Option value="MANADO">KANIM KELAS I TPI MANADO</Option>
                      <Option value="TAHUNA">KANIM KELAS II TPI TAHUNA</Option>
                      <Option value="MAKASSAR">
                        KANIM KELAS I TPI MAKASSAR
                      </Option>
                      <Option value="PALOPO">
                        KANIM KELAS III NON TPI PALOPO
                      </Option>
                      <Option value="PARE-PARE">
                        KANIM KELAS II TPI PARE-PARE
                      </Option>
                      <Option value="DENPASAR">
                        KANIM KELAS I TPI DENPASAR
                      </Option>
                      <Option value="NGURAH RAI">
                        KANIM KELAS I KHUSUS TPI NGURAH RAI
                      </Option>
                      <Option value="SINGARAJA">
                        KANIM KELAS II TPI SINGARAJA
                      </Option>
                      <Option value="ATAMBUA">
                        KANIM KELAS II TPI ATAMBUA
                      </Option>
                      <Option value="KUPANG">KANIM KELAS I TPI KUPANG</Option>
                      <Option value="LABUAN BAJO">
                        KANIM KELAS III TPI LABUAN BAJO
                      </Option>
                      <Option value="MAUMERE">
                        KANIM KELAS II TPI MAUMERE
                      </Option>
                      <Option value="AMBON">KANIM KELAS I TPI AMBON</Option>
                      <Option value="TUAL">KANIM KELAS II TPI TUAL</Option>
                      <Option value="BIAK">KANIM KELAS II TPI BIAK</Option>
                      <Option value="JAYAPURA">
                        KANIM KELAS I TPI JAYAPURA
                      </Option>
                      <Option value="MERAUKE">
                        KANIM KELAS II TPI MERAUKE
                      </Option>
                      <Option value="MIMIKA">KANIM KELAS II TPI MIMIKA</Option>
                      <Option value="BELAWAN">
                        KANIM KELAS II TPI BELAWAN
                      </Option>
                      <Option value="MEDAN">
                        KANIM KELAS I KHUSUS TPI MEDAN
                      </Option>
                      <Option value="PEMATANG SIANTAR">
                        KANIM KELAS II NON TPI PEMATANG SIANTAR
                      </Option>
                      <Option value="POLONIA">KANIM KELAS I TPI POLONIA</Option>
                      <Option value="SIBOLGA">
                        KANIM KELAS II TPI SIBOLGA
                      </Option>
                      <Option value="TANJUNG BALAI ASAHAN">
                        KANIM KELAS II TPI TANJUNG BALAI ASAHAN
                      </Option>
                      <Option value="JAMBI">KANIM KELAS I TPI JAMBI</Option>
                      <Option value="KERINCI">
                        KANIM KELAS III NON TPI KERINCI
                      </Option>
                      <Option value="KUALA TUNGKAL">
                        KANIM KELAS II NON TPI KUALA TUNGKAL
                      </Option>
                      <Option value="BENGKULU">
                        KANIM KELAS I TPI BENGKULU
                      </Option>
                      <Option value="YOGYAKARTA">
                        KANIM KELAS I TPI YOGYAKARTA
                      </Option>
                      <Option value="PALANGKARAYA">
                        KANIM KELAS I NON TPI PALANGKARAYA
                      </Option>
                      <Option value="SAMPIT">KANIM KELAS II TPI SAMPIT</Option>
                      <Option value="BIMA">KANIM KELAS III NON TPI BIMA</Option>
                      <Option value="MATARAM">KANIM KELAS I TPI MATARAM</Option>
                      <Option value="SUMBAWA BESAR">
                        KANIM KELAS II TPI SUMBAWA BESAR
                      </Option>
                      <Option value="BAUBAU">
                        KANIM KELAS III NON TPI BAUBAU
                      </Option>
                      <Option value="KENDARI">KANIM KELAS I TPI KENDARI</Option>
                      <Option value="WAKATOBI">
                        KANIM KELAS III NON TPI WAKATOBI
                      </Option>
                      <Option value="BANGGAI">
                        KANIM KELAS III NON TPI BANGGAI
                      </Option>
                      <Option value="PALU">KANIM KELAS I TPI PALU</Option>
                      <Option value="BATAM">
                        KANIM KELAS I KHUSUS TPI BATAM
                      </Option>
                      <Option value="BELAKANG PADANG">
                        KANIM KELAS II TPI BELAKANG PADANG
                      </Option>
                      <Option value="DABO SINGKEP">
                        KANIM KELAS II NON TPI DABO SINGKEP
                      </Option>
                      <Option value="RANAI">KANIM KELAS II TPI RANAI</Option>
                      <Option value="TANJUNG BALAI KARIMUN">
                        KANIM KELAS II TPI TANJUNG BALAI KARIMUN
                      </Option>
                      <Option value="TANJUNG PINANG">
                        KANIM KELAS I TPI TANJUNG PINANG
                      </Option>
                      <Option value="TANJUNG UBAN">
                        KANIM KELAS II TPI TANJUNG UBAN
                      </Option>
                      <Option value="TAREMPA">
                        KANIM KELAS II TPI TAREMPA
                      </Option>
                      <Option value="TERNATE">KANIM KELAS I TPI TERNATE</Option>
                      <Option value="TOBELO">
                        KANIM KELAS II NON TPI TOBELO
                      </Option>
                      <Option value="CILEGON">
                        KANIM KELAS II TPI CILEGON
                      </Option>
                      <Option value="SERANG">
                        KANIM KELAS I NON TPI SERANG
                      </Option>
                      <Option value="TANGERANG">
                        KANIM KELAS I NON TPI TANGERANG
                      </Option>
                      <Option value="AGAM">KANIM KELAS II NON TPI AGAM</Option>
                      <Option value="PADANG">KANIM KELAS I TPI PADANG</Option>
                      <Option value="PANGKAL PINANG">
                        KANIM KELAS I TPI PANGKAL PINANG
                      </Option>
                      <Option value="TANJUNG PANDAN">
                        KANIM KELAS II TPI TANJUNG PANDAN
                      </Option>
                      <Option value="GORONTALO">
                        KANIM KELAS I TPI GORONTALO
                      </Option>
                      <Option value="MAMUJU">
                        KANIM KELAS II NON TPI MAMUJU
                      </Option>
                      <Option value="POLEWALI MANDAR">
                        KANIM KELAS II NON TPI POLEWALI MANDAR
                      </Option>
                      <Option value="MANOKWARI">
                        KANIM KELAS II NON TPI MANOKWARI
                      </Option>
                      <Option value="SORONG">KANIM KELAS II TPI SORONG</Option>
                      <Option value="BAGAN SIAPI-API">
                        KANIM KELAS II TPI BAGAN SIAPI-API
                      </Option>
                      <Option value="BENGKALIS">
                        KANIM KELAS II TPI BENGKALIS
                      </Option>
                      <Option value="DUMAI">KANIM KELAS II TPI DUMAI</Option>
                      <Option value="PEKANBARU">
                        KANIM KELAS I TPI PEKANBARU
                      </Option>
                      <Option value="SELATPANJANG">
                        KANIM KELAS II TPI SELATPANJANG
                      </Option>
                      <Option value="SIAK">KANIM KELAS II TPI SIAK</Option>
                      <Option value="TEMBILAHAN">
                        KANIM KELAS II TPI TEMBILAHAN
                      </Option>
                      <Option value="MUARA ENIM">
                        KANIM KELAS II NON TPI MUARA ENIM
                      </Option>
                      <Option value="PALEMBANG">
                        KANIM KELAS I TPI PALEMBANG
                      </Option>
                      <Option value="BANDAR LAMPUNG">
                        KANIM KELAS I TPI BANDAR LAMPUNG
                      </Option>
                      <Option value="KALIANDA">
                        KANIM KELAS III NON TPI KALIANDA
                      </Option>
                      <Option value="KOTABUMI">
                        KANIM KELAS III NON TPI KOTABUMI
                      </Option>
                      <Option value="JAKARTA BARAT">
                        KANIM KELAS I KHUSUS NON TPI JAKARTA BARAT
                      </Option>
                      <Option value="JAKARTA PUSAT">
                        KANIM KELAS I NON TPI JAKARTA PUSAT
                      </Option>
                      <Option value="JAKARTA SELATAN">
                        KANIM KELAS I KHUSUS NON TPI JAKARTA SELATAN
                      </Option>
                      <Option value="JAKARTA TIMUR">
                        KANIM KELAS I TPI JAKARTA TIMUR
                      </Option>
                      <Option value="JAKARTA UTARA">
                        KANIM KELAS I TPI JAKARTA UTARA
                      </Option>
                      <Option value="SOEKARNO HATTA">
                        KANIM KELAS I KHUSUS TPI SOEKARNO HATTA
                      </Option>
                      <Option value="TANJUNG PRIOK">
                        KANIM KELAS I TPI TANJUNG PRIOK
                      </Option>
                      <Option value="BANDUNG">KANIM KELAS I TPI BANDUNG</Option>
                      <Option value="BEKASI">
                        KANIM KELAS II NON TPI BEKASI
                      </Option>
                      <Option value="BOGOR">KANIM KELAS I NON TPI BOGOR</Option>
                      <Option value="CIREBON">KANIM KELAS I TPI CIREBON</Option>
                      <Option value="DEPOK">
                        KANIM KELAS II NON TPI DEPOK
                      </Option>
                      <Option value="KARAWANG">
                        KANIM KELAS II NON TPI KARAWANG
                      </Option>
                      <Option value="SUKABUMI">
                        KANIM KELAS II NON TPI SUKABUMI
                      </Option>
                      <Option value="TASIKMALAYA">
                        KANIM KELAS II NON TPI TASIKMALAYA
                      </Option>
                      <Option value="CILACAP">
                        KANIM KELAS II TPI CILACAP
                      </Option>
                      <Option value="PATI">KANIM KELAS II NON TPI PATI</Option>
                      <Option value="PEMALANG">
                        KANIM KELAS II NON TPI PEMALANG
                      </Option>
                      <Option value="SEMARANG">
                        KANIM KELAS I TPI SEMARANG
                      </Option>
                      <Option value="SURAKARTA">
                        KANIM KELAS I TPI SURAKARTA
                      </Option>
                      <Option value="WONOSOBO">
                        KANIM KELAS II NON TPI WONOSOBO
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Periode Laporan"
                    name="periode_laporan"
                    rules={[
                      {
                        required: true,
                        message: 'Pilih periode laporan awal dan akhir',
                      },
                    ]}
                    style={{ flex: 1 }}
                  >
                    <RangePicker
                      defaultValue={[
                        moment('01-12-2020', dateFormat),
                        moment('31-12-2020', dateFormat),
                      ]}
                    />
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
            {isVisible && (
              <Col span={14}>
                <Card style={{ marginLeft: '40px' }}>
                  <h2>
                    <strong>
                      Laporan Informasi Layanan Keimigrasian Yang Sering
                      Ditanyakan
                    </strong>
                  </h2>
                  <h4>
                    Semua Jenis Layanan di Kantor Imigrasi Kelas I Khusus
                    Jakarta Selatan
                  </h4>
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
            )}
          </Row>
        </SubFeatureContent>
      </Layout>
    </>
  );
};

export default FrequentlyAsk;
