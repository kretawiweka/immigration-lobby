import React, { useState } from 'react';
import { Table, Space, Button, Row, Col, Typography } from 'antd';
import { ModalCreate, ModalUpdate, ModalDelete } from './ModalData';
import { TableArea, AddBtnArea } from '../style';

const { Column } = Table;
const { Title } = Typography;

const Service = () => {
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
      indo_service: 'Paspor',
      eng_service: 'Passport',
      indo_description: 'Paspor adalah dokumen resmi yang dikeluarkan oleh pejabat yang berwenang dari suatu negara yang memuat identitas pemegangnya dan berlaku untuk melakukan perjalanan antar negara. Paspor berisi biodata pemegangnya yang meliputi antara lain foto pemegang, tanda tangan, tempat dan tanggal kelahiran, informasi kebangsaan dan kadang-kadang juga beberapa informasi lain mengenai identifikasi individual.',
      eng_description: 'A passport is an official document issued by an authorized official of a country which contains the identity of the holder and is valid for traveling between countries. Passports contain biodata of the holder which includes, among other things, a photo of the holder, signature, place and date of birth, national information and sometimes also some other information regarding individual identification.',
    },
    {
      key: '2',
      no: '2.',
      indo_service: 'Izin Tinggal',
      eng_service: 'Stay Permit',
      indo_description: 'Izin Tinggal adalah izin yang diberikan kepada orang asing tertentu untuk bertempat tinggal dan menetap di wilayah Indonesia sebagai penduduk Indonesia dalam jangka waktu tertentu.',
      eng_description: 'Stay Permit is a permit given to certain foreigners to reside and settle in Indonesian territory as a resident of Indonesia for a certain period of time.',
    },
    {
      key: '3',
      no: '3.',
      indo_service: 'Visa',
      eng_service: 'Visa',
      indo_description: 'Visa adalah sebuah dokumen izin masuk seseorang ke suatu negara yang bisa diperoleh di kedutaan dimana negara tersebut mempunyai Konsulat Jenderal atau kedutaan asing, sebagai tanda bukti ‘boleh berkunjung’ yang diberikan pada penduduk suatu negara jika memasuki wilayah negara lain yang mempersyaratkan adanya izin masuk. Visa bisa berbentuk stiker visa yang dapat diajukan di kedutaan atau konsulat negara yang akan dikunjungi atau berbentuk stempel pada paspor di negara tertentu.',
      eng_description: 'A visa is a document that permits a person to enter a country that can be obtained at an embassy where the country has a foreign consulate or embassy, ​​as proof of “may visit” given to residents of a country when entering the territory of another country which requires entry permits. Visas can be in the form of a visa sticker that can be applied for at the embassy or consulate of the country to be visited or in the form of a stamp on a passport in certain countries.',
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
                Daftar Jenis Layanan
              </strong>
            </Title>    
          </Col>
          <Col span={12}>
            <AddBtnArea>
              <Button onClick={onChangeModalCreate} size="large" type="primary" style={{ background: '#64aced', float: 'right' }}>Tambah Jenis Layanan</Button>
            </AddBtnArea>
          </Col>
        </Row>
        <Table dataSource={dataTable}>
          <Column
            title="No."
            dataIndex="no"
            key="no"
          />
          <Column
            title="Nama Jenis Layanan (Indonesia)"
            dataIndex="indo_service"
            key="indo_service"
          />
          <Column
            title="Nama Jenis Layanan (English)"
            dataIndex="eng_service"
            key="eng_service"
          />
          <Column
            title="Deskripsi Jenis Layanan (Indonesia)"
            dataIndex="indo_description"
            key="indo_description"
          />
          <Column
            title="Deskripsi Jenis Layanan (English)"
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

export default Service;
