import React, { useState } from 'react';
import { Table, Space, Button } from 'antd';
import { ModalCreate, ModalUpdate, ModalDelete } from './ModalData';
import { TableArea, AddBtnArea } from '../style';

const { Column } = Table;

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
      indo_service: 'Layanan Indonesia',
      eng_service: 'Layanan Inggris',
      indo_content: 32,
      eng_content: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      indo_service: 'Layanan Indonesia',
      eng_service: 'Layanan Inggris',
      indo_content: 32,
      eng_content: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      indo_service: 'Layanan Indonesia',
      eng_service: 'Layanan Inggris',
      indo_content: 32,
      eng_content: 'New York No. 1 Lake Park',
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
        <AddBtnArea>
          <Button onClick={onChangeModalCreate}>Tambah Informasi Produk</Button>
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
            title="Konten Indonesia"
            dataIndex="indo_content"
            key="indo_content"
          />
          <Column
            title="Konten Inggris"
            dataIndex="eng_content"
            key="eng_content"
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <Button
                  onClick={() => {
                    onChangelModalUpdate(record);
                  }}
                  type="link"
                >
                  Ubah
                </Button>
                <Button
                  onClick={() => {
                    onChangeModalDelete(record);
                  }}
                  type="link"
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
