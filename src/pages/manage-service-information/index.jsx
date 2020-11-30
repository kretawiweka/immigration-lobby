import React, { useState } from 'react';
import { Select, Table, Space, Button } from 'antd';

import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { ModalCreate, ModalUpdate, ModalDelete } from './ModalData';
import { SelectOptionArea, Content, TableArea, AddBtnArea } from './style';
const { Option } = Select;
const { Column } = Table;

const ManageServiceInformation = () => {
  const [isVisibleModalCreate, setIsVisibleModalCreate] = useState(true);
  const [isVisibleModaUpdate, setIsVisibleModalUpdate] = useState(false);
  const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false);

  const dataTable = [
    {
      key: '1',
      indo_service: 'Layanan Indonesia',
      eng_service: 'Layanan Inggris',
      indo_description: 32,
      eng_description: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      indo_service: 'Layanan Indonesia',
      eng_service: 'Layanan Inggris',
      indo_description: 32,
      eng_description: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      indo_service: 'Layanan Indonesia',
      eng_service: 'Layanan Inggris',
      indo_description: 32,
      eng_description: 'New York No. 1 Lake Park',
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangeModalCreate = () => {
    setIsVisibleModalCreate(!isVisibleModalCreate);
  };

  const onChangelModalUpdate = () => {
    setIsVisibleModalUpdate(!isVisibleModaUpdate);
  };

  const onChangeModalDelete = () => {
    setIsVisibleModalDelete(!isVisibleModalDelete);
  };

  return (
    <>
      <Layout>
        <ModalCreate
          isVisible={isVisibleModalCreate}
          onCancel={onChangeModalCreate}
        />
        <ModalUpdate
          isVisible={isVisibleModaUpdate}
          onCancel={onChangelModalUpdate}
        />
        <ModalDelete
          isVisible={isVisibleModalDelete}
          onCancel={onChangeModalDelete}
        />
        <SingleHeader color="#fafafa" title="KELOLA INFORMASI LAYANAN" />
        <Content>
          <SelectOptionArea>
            <h4>Kategori Informasi</h4>
            <Select
              defaultValue="Pilih Kategori Informasi"
              style={{ width: '200px' }}
              onChange={handleChange}
            >
              <Option value="Jenis Layanan Keimigrasian">
                Jenis Layanan Keimigrasian
              </Option>
              <Option value="Jenis Produk">Jenis Produk</Option>
              <Option value="Jenis Permohonan">Jenis Permohonan</Option>
              <Option value="Biaya Permohonan">Biaya Permohonan</Option>
              <Option value="Tujuan permohonan">Tujuan Permohonan</Option>
              <Option value="Dokumen Persyaratan">Dokumen Persyaratan</Option>
              <Option value="Tahapan Permohonan">Tahapan Permohonan</Option>
            </Select>
          </SelectOptionArea>
          <SelectOptionArea>
            <h4>Jenis Layanan</h4>
            <Select
              defaultValue="Pilih Jenis Layanan"
              style={{ width: '200px' }}
              onChange={handleChange}
            >
              <Option value="Paspor">Paspor</Option>
              <Option value="Izin Tinggal">Izin Tinggal</Option>
              <Option value="Visa">Visa</Option>
            </Select>
          </SelectOptionArea>
          <TableArea>
            <AddBtnArea>
              <Button onClick={onChangeModalCreate}>Tambah</Button>
            </AddBtnArea>
            <Table dataSource={dataTable}>
              <Column
                title="Nama Layanan Indonesia"
                dataIndex="indo_service"
                key="indo_service"
              />
              <Column
                title="Nama Layanan Inggris"
                dataIndex="eng_service"
                key="eng_service"
              />
              <Column
                title="Deskripsi Indonesia"
                dataIndex="indo_description"
                key="indo_description"
              />
              <Column
                title="Deskripsi Inggris"
                dataIndex="eng_description"
                key="eng_description"
              />
              <Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <Space size="middle">
                    <Button onClick={onChangelModalUpdate} type="link">
                      Ubah
                    </Button>
                    <Button onClick={onChangeModalDelete} type="link">
                      Hapus
                    </Button>
                  </Space>
                )}
              />
            </Table>
          </TableArea>
        </Content>
      </Layout>
    </>
  );
};

export default ManageServiceInformation;
