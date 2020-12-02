import React from 'react';

import Layout from '../../components/Layout';
import { ContentUserAccount, BreadCrumbContainer } from './style';
// import { SingleHeader } from '../../components/Header';
import {
  Breadcrumb,
  Typography,
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Select,
} from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone, ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Option } = Select;

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
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

const state = { visible: false };
const UserAccountAdd = () => {

  return (
    <>
      <Layout>
        <ContentUserAccount>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Akun Pengguna</Breadcrumb.Item>
              <Breadcrumb.Item><strong>Tambah</strong></Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Card>                  
            <Row>
              <Col span={20}>
                <Title level={4}>Tambah Akun Pengguna</Title>
              </Col>
            </Row>
            <hr></hr>
            <br></br>     
            <Form className="login-form" layout="horizontal">
                <Row>
                <Col span={5}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ background: '#64aced'}}
                        icon={< ArrowLeftOutlined />}
                    >
                        <strong> Kembali</strong>
                    </Button>  
                </Col>
                <Col span={4}>NIP<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                  <Form.Item>
                    <Input placeholder="Masukkan NIP" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Nama<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                  <Form.Item>
                    <Input placeholder="Masukkan Nama" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Username<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                  <Form.Item>
                    <Input placeholder="Masukkan Username" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Password<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                    <Form.Item>
                        <Space direction="vertical" style={{ width: "100%"}}>
                            <Input.Password
                            placeholder="Masukkan Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                    </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Ulangi Password<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                    <Form.Item>
                        <Space direction="vertical" style={{ width: "100%"}}>
                            <Input.Password
                            placeholder="Masukkan Kembali Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                    </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Hak Akses<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                  <Form.Item>
                    <Input placeholder="Masukkan Username" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Kantor Imigrasi<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                    <Form.Item>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChangeSelect}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="BANDA ACEH">KANIM KELAS I TPI BANDA ACEH</Option>
                            <Option value="LANGSA">KANIM KELAS II TPI LANGSA</Option>
                            <Option value="LHOKSEUMAWE">KANIM KELAS II TPI LHOKSEUMAWE</Option>
                            <Option value="MEULABOH">KANIM KELAS II TPI MEULABOH</Option>
                            <Option value="SABANG">KANIM KELAS II TPI SABANG</Option>
                            <Option value="TAKENGON">KANIM KELAS III NON TPI TAKENGON</Option>
                            <Option value="BLITAR">KANIM KELAS II NON TPI BLITAR</Option>
                            <Option value="JEMBER">KANIM KELAS II TPI JEMBER</Option>
                            <Option value="KEDIRI">KANIM KELAS II NON TPI KEDIRI</Option>
                            <Option value="MADIUN">KANIM KELAS II NON TPI MADIUN</Option>
                            <Option value="MALANG">KANIM KELAS I TPI MALANG</Option>
                            <Option value="PAMEKASAN">KANIM KELAS III NON TPI PAMEKASAN</Option>
                            <Option value="PONOROGO">KANIM KELAS III NON TPI PONOROGO</Option>
                            <Option value="SURABAYA">KANIM KELAS I KHUSUS TPI SURABAYA</Option>
                            <Option value="TANJUNG PERAK">KANIM KELAS I TPI TANJUNG PERAK</Option>
                            <Option value="ENTIKONG">KANIM KELAS II TPI ENTIKONG</Option>
                            <Option value="KETAPANG">KANIM KELAS III NON TPI KETAPANG</Option>
                            <Option value="PONTIANAK">KANIM KELAS I TPI PONTIANAK</Option>
                            <Option value="PUTUSSIBAU">KANIM KELAS III NON TPI PUTUSSIBAU</Option>
                            <Option value="SAMBAS">KANIM KELAS II TPI SAMBAS</Option>
                            <Option value="SANGGAU">KANIM KELAS II TPI SANGGAU</Option>
                            <Option value="SINGKAWANG">KANIM KELAS II NON TPI SINGKAWANG</Option>
                            <Option value="BANJARMASIN">KANIM KELAS I TPI BANJARMASIN</Option>
                            <Option value="BATULICIN">KANIM KELAS II TPI BATULICIN</Option>
                            <Option value="BALIKPAPAN">KANIM KELAS I TPI BALIKPAPAN</Option>
                            <Option value="NUNUKAN">KANIM KELAS II TPI NUNUKAN</Option>
                            <Option value="SAMARINDA">KANIM KELAS I TPI SAMARINDA</Option>
                            <Option value="TANJUNG REDEB">KANIM KELAS III TPI TANJUNG REDEB</Option>
                            <Option value="TARAKAN">KANIM KELAS II TPI TARAKAN</Option>
                            <Option value="BITUNG">KANIM KELAS II TPI BITUNG</Option>
                            <Option value="KOTAMOBAGU">KANIM KELAS III NON TPI KOTAMOBAGU</Option>
                            <Option value="MANADO">KANIM KELAS I TPI MANADO</Option>
                            <Option value="TAHUNA">KANIM KELAS II TPI TAHUNA</Option>
                            <Option value="MAKASSAR">KANIM KELAS I TPI MAKASSAR</Option>
                            <Option value="PALOPO">KANIM KELAS III NON TPI PALOPO</Option>
                            <Option value="PARE-PARE">KANIM KELAS II TPI PARE-PARE</Option>
                            <Option value="DENPASAR">KANIM KELAS I TPI DENPASAR</Option>
                            <Option value="NGURAH RAI">KANIM KELAS I KHUSUS TPI NGURAH RAI</Option>
                            <Option value="SINGARAJA">KANIM KELAS II TPI SINGARAJA</Option>
                            <Option value="ATAMBUA">KANIM KELAS II TPI ATAMBUA</Option>
                            <Option value="KUPANG">KANIM KELAS I TPI KUPANG</Option>
                            <Option value="LABUAN BAJO">KANIM KELAS III TPI LABUAN BAJO</Option>
                            <Option value="MAUMERE">KANIM KELAS II TPI MAUMERE</Option>
                            <Option value="AMBON">KANIM KELAS I TPI AMBON</Option>
                            <Option value="TUAL">KANIM KELAS II TPI TUAL</Option>
                            <Option value="BIAK">KANIM KELAS II TPI BIAK</Option>
                            <Option value="JAYAPURA">KANIM KELAS I TPI JAYAPURA</Option>
                            <Option value="MERAUKE">KANIM KELAS II TPI MERAUKE</Option>
                            <Option value="MIMIKA">KANIM KELAS II TPI MIMIKA</Option>
                            <Option value="BELAWAN">KANIM KELAS II TPI BELAWAN</Option>
                            <Option value="MEDAN">KANIM KELAS I KHUSUS TPI MEDAN</Option>
                            <Option value="PEMATANG SIANTAR">KANIM KELAS II NON TPI PEMATANG SIANTAR</Option>
                            <Option value="POLONIA">KANIM KELAS I TPI POLONIA</Option>
                            <Option value="SIBOLGA">KANIM KELAS II TPI SIBOLGA</Option>
                            <Option value="TANJUNG BALAI ASAHAN">KANIM KELAS II TPI TANJUNG BALAI ASAHAN</Option>
                            <Option value="JAMBI">KANIM KELAS I TPI JAMBI</Option>
                            <Option value="KERINCI">KANIM KELAS III NON TPI KERINCI</Option>
                            <Option value="KUALA TUNGKAL">KANIM KELAS II NON TPI KUALA TUNGKAL</Option>
                            <Option value="BENGKULU">KANIM KELAS I TPI BENGKULU</Option>
                            <Option value="YOGYAKARTA">KANIM KELAS I TPI YOGYAKARTA</Option>
                            <Option value="PALANGKARAYA">KANIM KELAS I NON TPI PALANGKARAYA</Option>
                            <Option value="SAMPIT">KANIM KELAS II TPI SAMPIT</Option>
                            <Option value="BIMA">KANIM KELAS III NON TPI BIMA</Option>
                            <Option value="MATARAM">KANIM KELAS I TPI MATARAM</Option>
                            <Option value="SUMBAWA BESAR">KANIM KELAS II TPI SUMBAWA BESAR</Option>
                            <Option value="BAUBAU">KANIM KELAS III NON TPI BAUBAU</Option>
                            <Option value="KENDARI">KANIM KELAS I TPI KENDARI</Option>
                            <Option value="WAKATOBI">KANIM KELAS III NON TPI WAKATOBI</Option>
                            <Option value="BANGGAI">KANIM KELAS III NON TPI BANGGAI</Option>
                            <Option value="PALU">KANIM KELAS I TPI PALU</Option>
                            <Option value="BATAM">KANIM KELAS I KHUSUS TPI BATAM</Option>
                            <Option value="BELAKANG PADANG">KANIM KELAS II TPI BELAKANG PADANG</Option>
                            <Option value="DABO SINGKEP">KANIM KELAS II NON TPI DABO SINGKEP</Option>
                            <Option value="RANAI">KANIM KELAS II TPI RANAI</Option>
                            <Option value="TANJUNG BALAI KARIMUN">KANIM KELAS II TPI TANJUNG BALAI KARIMUN</Option>
                            <Option value="TANJUNG PINANG">KANIM KELAS I TPI TANJUNG PINANG</Option>
                            <Option value="TANJUNG UBAN">KANIM KELAS II TPI TANJUNG UBAN</Option>
                            <Option value="TAREMPA">KANIM KELAS II TPI TAREMPA</Option>
                            <Option value="TERNATE">KANIM KELAS I TPI TERNATE</Option>
                            <Option value="TOBELO">KANIM KELAS II NON TPI TOBELO</Option>
                            <Option value="CILEGON">KANIM KELAS II TPI CILEGON</Option>
                            <Option value="SERANG">KANIM KELAS I NON TPI SERANG</Option>
                            <Option value="TANGERANG">KANIM KELAS I NON TPI TANGERANG</Option>
                            <Option value="AGAM">KANIM KELAS II NON TPI AGAM</Option>
                            <Option value="PADANG">KANIM KELAS I TPI PADANG</Option>
                            <Option value="PANGKAL PINANG">KANIM KELAS I TPI PANGKAL PINANG</Option>
                            <Option value="TANJUNG PANDAN">KANIM KELAS II TPI TANJUNG PANDAN</Option>
                            <Option value="GORONTALO">KANIM KELAS I TPI GORONTALO</Option>
                            <Option value="MAMUJU">KANIM KELAS II NON TPI MAMUJU</Option>
                            <Option value="POLEWALI MANDAR">KANIM KELAS II NON TPI POLEWALI MANDAR</Option>
                            <Option value="MANOKWARI">KANIM KELAS II NON TPI MANOKWARI</Option>
                            <Option value="SORONG">KANIM KELAS II TPI SORONG</Option>
                            <Option value="BAGAN SIAPI-API">KANIM KELAS II TPI BAGAN SIAPI-API</Option>
                            <Option value="BENGKALIS">KANIM KELAS II TPI BENGKALIS</Option>
                            <Option value="DUMAI">KANIM KELAS II TPI DUMAI</Option>
                            <Option value="PEKANBARU">KANIM KELAS I TPI PEKANBARU</Option>
                            <Option value="SELATPANJANG">KANIM KELAS II TPI SELATPANJANG</Option>
                            <Option value="SIAK">KANIM KELAS II TPI SIAK</Option>
                            <Option value="TEMBILAHAN">KANIM KELAS II TPI TEMBILAHAN</Option>
                            <Option value="MUARA ENIM">KANIM KELAS II NON TPI MUARA ENIM</Option>
                            <Option value="PALEMBANG">KANIM KELAS I TPI PALEMBANG</Option>
                            <Option value="BANDAR LAMPUNG">KANIM KELAS I TPI BANDAR LAMPUNG</Option>
                            <Option value="KALIANDA">KANIM KELAS III NON TPI KALIANDA</Option>
                            <Option value="KOTABUMI">KANIM KELAS III NON TPI KOTABUMI</Option>
                            <Option value="JAKARTA BARAT">KANIM KELAS I KHUSUS NON TPI JAKARTA BARAT</Option>
                            <Option value="JAKARTA PUSAT">KANIM KELAS I NON TPI JAKARTA PUSAT</Option>
                            <Option value="JAKARTA SELATAN">KANIM KELAS I KHUSUS NON TPI JAKARTA SELATAN</Option>
                            <Option value="JAKARTA TIMUR">KANIM KELAS I TPI JAKARTA TIMUR</Option>
                            <Option value="JAKARTA UTARA">KANIM KELAS I TPI JAKARTA UTARA</Option>
                            <Option value="SOEKARNO HATTA">KANIM KELAS I KHUSUS TPI SOEKARNO HATTA</Option>
                            <Option value="TANJUNG PRIOK">KANIM KELAS I TPI TANJUNG PRIOK</Option>
                            <Option value="BANDUNG">KANIM KELAS I TPI BANDUNG</Option>
                            <Option value="BEKASI">KANIM KELAS II NON TPI BEKASI</Option>
                            <Option value="BOGOR">KANIM KELAS I NON TPI BOGOR</Option>
                            <Option value="CIREBON">KANIM KELAS I TPI CIREBON</Option>
                            <Option value="DEPOK">KANIM KELAS II NON TPI DEPOK</Option>
                            <Option value="KARAWANG">KANIM KELAS II NON TPI KARAWANG</Option>
                            <Option value="SUKABUMI">KANIM KELAS II NON TPI SUKABUMI</Option>
                            <Option value="TASIKMALAYA">KANIM KELAS II NON TPI TASIKMALAYA</Option>
                            <Option value="CILACAP">KANIM KELAS II TPI CILACAP</Option>
                            <Option value="PATI">KANIM KELAS II NON TPI PATI</Option>
                            <Option value="PEMALANG">KANIM KELAS II NON TPI PEMALANG</Option>
                            <Option value="SEMARANG">KANIM KELAS I TPI SEMARANG</Option>
                            <Option value="SURAKARTA">KANIM KELAS I TPI SURAKARTA</Option>
                            <Option value="WONOSOBO">KANIM KELAS II NON TPI WONOSOBO</Option>
                        </Select>
                    </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Jabatan<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={10}>
                  <Form.Item>
                    <Input placeholder="Masukkan Jabatan" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={5}></Col>
                <Col span={4}>Pangkat<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={3}>
                  <Form.Item>
                    <Select defaultValue="iii" style={{ width: "100%" }}>
                        <Option value="i">I</Option>
                        <Option value="ii">II</Option>
                        <Option value="iii">III</Option>
                        <Option value="iv">IV</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={2}>Golongan<strong style={{ color: "red" }}>*</strong></Col>
                <Col span={3}>
                    <Form.Item>
                        <Select defaultValue="a" style={{ width: "100%" }}>
                            <Option value="a">A</Option>
                            <Option value="b">B</Option>
                            <Option value="c">C</Option>
                            <Option value="d">D</Option>
                        </Select>
                    </Form.Item>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col span={5}></Col>
                <Col span={6}><small style={{ color: "red" }}>*) Wajib Diisi</small></Col>
                <Col span={6}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        style={{ background: '#64aced'}}
                    >
                        <strong>Simpan</strong>
                    </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </ContentUserAccount>
      </Layout>
    </>
  );
};

export default UserAccountAdd;
