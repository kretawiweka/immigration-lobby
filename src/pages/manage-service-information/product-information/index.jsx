import React, { useState } from 'react';
import { Table, Space, Button, Row, Col, Typography } from 'antd';
import { ModalCreate, ModalUpdate, ModalDelete } from './ModalData';
import { TableArea, AddBtnArea } from '../style';

const { Column } = Table;
const { Title } = Typography;

const ProductInformation = () => {
  const [isVisibleModalCreate, setIsVisibleModalCreate] = useState(false);
  const [isVisibleModaUpdate, setIsVisibleModalUpdate] = useState(false);
  const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [deleteData, setDeletedata] = useState({});

  const onChangeModalCreate = () => {
    setIsVisibleModalCreate(!isVisibleModalCreate);
  };

  const onChangelModalUpdate = (record) => {
    setUpdateData(record);
    setIsVisibleModalUpdate(!isVisibleModaUpdate);
  };

  const onChangeModalDelete = (record) => {
    setDeletedata(record);
    setIsVisibleModalDelete(!isVisibleModalDelete);
  };
  const dataTable = [
    {
      key: '1',
      no: '1.',
      indo_service: 'Biaya Permohonan',
      eng_service: 'Application Fee',
      indo_content: 'Rp 350.000',
      eng_content: 'IDR 350.000',
    },
    {
      key: '2',
      no: '2.',
      indo_service: 'Jenis Permohonan',
      eng_service: 'Application Type',
      indo_content: 'Baru, Penggantian, Perubahan',
      eng_content: 'New, Change, Replacement',
    },
    {
      key: '3',
      no: '3.',
      indo_service: 'Tujuan Permohonan',
      eng_service: 'Application Purposes',
      indo_content: 'Menetap di Luar Negeri, Berobat, TKI, Belajar, Wisata, Bekerja Formal, Umroh, Haji',
      eng_content: 'Residing Abroad, Medical Treatment, TKI, Studying, Travel, Formal Work, Umrah, Hajj',
    },
    {
      key: '4',
      no: '4.',
      indo_service: 'Dokumen Persyaratan',
      eng_service: 'Required Document',
      indo_content: 'E-KTP (Asli dan Fotocopy A4), Kartu Keluarga (Asli dan Fotocopy A4), Akte Kelahiran / Ijazah Pendidikan / Akte Perkawinan / Buku Nikah / Surat Baptis (Asli dan Fotocopy A4), dalam dokumen harus tercantum nama, tempat dan tanggal lahir, nama orang tua, jika tidak tercantum, pemohon dapat melampirkan surat keterangan dari instansi yang berwenang, Surat Kewarganegaraan RI (Asli dan Fotocopy A4), bagi Orang Asing yang memperoleh kewarganegaraan Indonesia',
      eng_content: 'E-KTP (Original and Photocopy of A4), Family Card (Original and Photocopy of A4), Birth Certificate / Education Certificate / Marriage Certificate / Marriage Book / Baptist Certificate (Original and Photocopy of A4), the document must include the name, place and date of birth , the name of the parent, if not listed, the applicant can attach a certificate from the competent authority, Indonesian Citizenship Certificate (Original and Photocopy of A4), for foreigners who obtain Indonesian citizenship.',
    },
    {
      key: '5',
      no: '5.',
      indo_service: 'Tahapan Permohonan',
      eng_service: 'Application Steps',
      indo_content: 'Entri Data, Pengambilan Biometrik, Wawancara, Pembayaran, Adjudikasi Kantor Imigrasi, Adjudikasi Pusat, Alokasi Paspor, Pencetakan, Uji Kualitas, Penyerahan, Selesai.',
      eng_content: 'Data Entry, Biometric Retrieval, Interview, Payment, Immigration Office Adjudication, Central Adjudication, Passport Allocation, Printing, Quality Testing, Submission, Completion.',
    },
  ];
  return (
    <>
      <ModalCreate
        isVisible={isVisibleModalCreate}
        onCancel={onChangeModalCreate}
      />
      <ModalUpdate
        isVisible={isVisibleModaUpdate}
        onCancel={onChangelModalUpdate}
        data={updateData}
      />
      <ModalDelete
        isVisible={isVisibleModalDelete}
        onCancel={onChangeModalDelete}
        data={deleteData}
      />
      <TableArea>
        <Row>
          <Col span={12}>
            <Title level={3} style={{ marginBottom: 0 }}>
              <strong>
                Daftar Informasi Produk
              </strong>
            </Title>    
          </Col>
          <Col span={12}>
            <AddBtnArea>
              <Button onClick={onChangeModalCreate} size="large" type="primary" style={{ background: '#64aced', float: 'right' }}>Tambah Informasi Produk</Button>
            </AddBtnArea>
          </Col>
        </Row>
        <Table dataSource={dataTable} bordered>
          <Column
            title="No."
            dataIndex="no"
            key="no"
          />
          <Column
            title="Judul Informasi Produk (Indonesia)"
            dataIndex="indo_service"
            key="indo_service"
          />
          <Column
            title="Judul Informasi Produk (English)"
            dataIndex="eng_service"
            key="eng_service"
          />
          <Column
            title="Konten Informasi Produk (Indonesia)"
            dataIndex="indo_content"
            key="indo_content"
          />
          <Column
            title="Konten Informasi Produk (English)"
            dataIndex="eng_content"
            key="eng_content"
          />
          <Column
            title="Aksi"
            key="aksi"
            render={(text, record) => (
              <Space size="middle">
                <Button
                  onClick={() => {
                    onChangelModalUpdate(record);
                  }}
                  type="link"
                  size="large"
                >
                  Ubah
                </Button>
                <Button
                  onClick={() => {
                    onChangeModalDelete(record);
                  }}
                  type="link"
                  size="large"
                >
                  Hapus
                </Button>
              </Space>
            )}
          />
        </Table>
      </TableArea>
    </>
  );
};

export default ProductInformation;
