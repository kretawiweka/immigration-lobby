import React, { useState } from 'react';
import { Table, Space, Button, Typography, Row, Col } from 'antd';
import { ModalCreate, ModalUpdate, ModalDelete } from './ModalData';
import { TableArea, AddBtnArea } from '../style';

const { Column } = Table;
const { Title } = Typography;

const Product = () => {
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
      indo_service: 'Paspor Biasa 48 Halaman',
      eng_service: '48 Pages Regular Passport',
      indo_description: 'Paspor Biasa (tanpa elektronik chip) dengan jumlah halaman sebanyak 48 (empat puluh depalan)',
      eng_description: 'Regular passport (without electronic chips) with a total of 48 pages',
    },
    {
      key: '2',
      no: '2.',
      indo_service: 'Paspor Biasa 24 Halaman',
      eng_service: '24 Pages Regular Passport',
      indo_description: 'Paspor Biasa (tanpa elektronik chip) dengan jumlah halaman sebanyak 24 (dua puluh empat)',
      eng_description: 'Regular Passport (without electronic chips) with a total of 24 pages',
    },
    {
      key: '3',
      no: '3.',
      indo_service: 'Paspor Elektronik 48 Halaman',
      eng_service: '48 Pages Electronic Passport',
      indo_description: 'Paspor Elektronik yang memiliki chip untuk memasukkan data identitas dan biometrik dengan jumlah halaman sebanyak 48 (empat puluh delapan)',
      eng_description: 'Electronic Passport which has a chip for entering identity and biometric data with a total of 48 pages',
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
                Daftar Jenis Produk
              </strong>
            </Title>    
          </Col>
          <Col span={12}>
            <AddBtnArea>
              <Button onClick={onChangeModalCreate} size="large" type="primary" style={{ background: '#64aced', float: 'right' }}>Tambah Jenis Produk</Button>
            </AddBtnArea>
          </Col>
        </Row>
        <Table dataSource={dataTable} bordered>
          <Column
            title="No"
            dataIndex="no"
            key="no"
          />
          <Column
            title="Nama Jenis Produk (Indonesia)"
            dataIndex="indo_service"
            key="indo_service"
          />
          <Column
            title="Nama Jenis Produk (English)"
            dataIndex="eng_service"
            key="eng_service"
          />
          <Column
            title="Deskripsi Jenis Produk (Indonesia)"
            dataIndex="indo_description"
            key="indo_description"
          />
          <Column
            title="Deskripsi Produk (English)"
            dataIndex="eng_description"
            key="eng_description"
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

export default Product;
