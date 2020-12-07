import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import { ContentUserAccount, BreadCrumbContainer } from './style';

import { Breadcrumb, Typography, Button, Row, Col, Table, Space } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';
const { Title } = Typography;

const columns = [
  {
    title: 'No.',
    dataIndex: 'no',
  },
  {
    title: 'NIP',
    dataIndex: 'nip',
    sorter: {
      compare: (a, b) => a.nik - b.nik,
      multiple: 8,
    },
  },
  {
    title: 'Nama',
    dataIndex: 'nama',
    sorter: {
      compare: (a, b) => a.nama - b.nama,
      multiple: 8,
    },
  },
  {
    title: 'Username',
    dataIndex: 'username',
    sorter: {
      compare: (a, b) => a.username - b.username,
      multiple: 8,
    },
  },
  {
    title: 'Hak Akses',
    dataIndex: 'hakakses',
    sorter: {
      compare: (a, b) => a.hakakses - b.hakakses,
      multiple: 8,
    },
  },
  {
    title: 'Kantor Imigrasi',
    dataIndex: 'kanim',
    sorter: {
      compare: (a, b) => a.kanim - b.kanim,
      multiple: 8,
    },
  },
  {
    title: 'Jabatan',
    dataIndex: 'jabatan',
    sorter: {
      compare: (a, b) => a.jabatan - b.jabatan,
      multiple: 8,
    },
  },
  {
    title: 'Pangkat/Gol.',
    dataIndex: 'pangkatgol',
    sorter: {
      compare: (a, b) => a.pangkatgol - b.pangkatgol,
      multiple: 8,
    },
  },
  {
    title: 'Terakhir Login',
    dataIndex: 'lastlogin',
    sorter: {
      compare: (a, b) => a.lastlogin - b.lastlogin,
      multiple: 8,
    },
  },
  {
    title: 'Aksi',
    dataIndex: 'aksi',
    key: 'aksi',
    render: (text, record) => (
      <Space size="middle">
        <Button
          htmlType="submit"
          className="login-form-button"
          icon={<DeleteOutlined />}
          size="small"
          danger
        >
          Deaktivasi
        </Button>
      </Space>
    ),
  },
];

const data = [
  {
    no: '1.',
    nip: '197004011998121002',
    nama: 'Arfin Gumintang',
    username: 'arfingumintang',
    hakakses: 'Admin Humas',
    kanim: 'DIREKTORAT JENDERAL IMIGRASI',
    jabatan: 'Kepala Sub Bagian Hubungan Masyarakat',
    pangkatgol: 'IV/a',
    lastlogin: '27 November 2020 19:49:30',
  },
  {
    no: '2.',
    nip: '199010292015111014',
    nama: 'Muhammad Febriansyah',
    username: 'mfebriansyah',
    hakakses: 'Admin Kanim',
    kanim: 'KANTOR IMIGRASI KELAS I KHUSUS JAKARTA SELATAN',
    jabatan: 'Kepala Seksi Teknologi Informasi Keimigrasian',
    pangkatgol: 'III/b',
    lastlogin: '28 November 2020 11:14:04',
  },
  {
    no: '3.',
    nip: '1994113020151210001',
    nama: 'Bayu Agung Saptanaji',
    username: 'bayuagung',
    hakakses: 'Petugas Duta Layanan',
    kanim: 'KANTOR IMIGRASI KELAS I KHUSUS JAKARTA SELATAN',
    jabatan: 'Analis Keimigrasian',
    pangkatgol: 'III/a',
    lastlogin: '29 November 2020 14:15:10',
  },
  {
    no: '4.',
    nip: '1979103120050110001',
    nama: 'Kus Marsidik Waluyo',
    username: 'kusmarsidik',
    hakakses: 'Petugas Duta Layanan',
    kanim: 'KANTOR IMIGRASI KELAS I KHUSUS JAKARTA SELATAN',
    jabatan: 'Penelaah Keimigrasian',
    pangkatgol: 'III/b',
    lastlogin: '29 November 2020 14:16:22',
  },
  {
    no: '5.',
    nip: '199302092017121002',
    nama: 'Arif Pratama',
    username: 'arifprat',
    hakakses: 'Admin Humas',
    kanim: 'DIREKTORAT JENDERAL IMIGRASI',
    jabatan: 'Pengelola Teknologi Informasi',
    pangkatgol: 'III/a',
    lastlogin: '29 November 2020 14:39:40',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const UserAccount = () => {
  return (
    <>
      <Layout>
        <ContentUserAccount>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Akun Pengguna</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Row>
            <Col span={20}>
              <Title level={4}>Akun Pengguna</Title>
            </Col>
            <Col span={4}>
              <Link to="/akun-pengguna/tambah">
                <Button
                  type="success"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                  style={{ float: 'right' }}
                >
                  <strong>Tambah</strong>
                </Button>
              </Link>
            </Col>
          </Row>
          <hr></hr>
          <br></br>
          <div style={{ overflowX: 'auto' }}>
            <Table
              columns={columns}
              dataSource={data}
              onChange={onChange}
              bordered
            />
          </div>
        </ContentUserAccount>
      </Layout>
    </>
  );
};

export default UserAccount;
