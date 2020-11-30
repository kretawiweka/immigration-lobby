import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ModalCreate = ({ isVisible, onCancel }) => {
  return (
    <Modal
      title="Tambah Data"
      visible={isVisible}
      onCancel={onCancel}
      footer={[]}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
      >
        <Form.Item
          label="Nama Layanan Indonesia"
          name="indo_service_name"
          rules={[
            { required: true, message: 'Masukkan nama layanan indonesia' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nama Layanan Inggris"
          name="eng_service_name"
          rules={[{ required: true, message: 'Masukkan nama layanan inggris' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Deskripsi Indonesia"
          name="indonesian_description"
          rules={[{ required: true, message: 'Masukkan deskripi indonesia' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Deskripsi Inggris"
          name="english_description"
          rules={[{ required: true, message: 'Masukkan deskripi inggris' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button style={{ float: 'right' }} type="primary" htmlType="submit">
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalUpdate = ({ isVisible, onCancel }) => {
  return (
    <Modal
      title="Ubah Data"
      visible={isVisible}
      onCancel={onCancel}
      footer={[]}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
      >
        <Form.Item
          label="Nama Layanan Indonesia"
          name="indo_service_name"
          rules={[
            { required: true, message: 'Masukkan nama layanan indonesia' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nama Layanan Inggris"
          name="eng_service_name"
          rules={[{ required: true, message: 'Masukkan nama layanan inggris' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Deskripsi Indonesia"
          name="indonesian_description"
          rules={[{ required: true, message: 'Masukkan deskripi indonesia' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Deskripsi Inggris"
          name="english_description"
          rules={[{ required: true, message: 'Masukkan deskripi inggris' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button style={{ float: 'right' }} type="primary" htmlType="submit">
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalDelete = ({ isVisible, onCancel }) => {
  return (
    <Modal
      title="Hapus Data"
      visible={isVisible}
      onCancel={onCancel}
      footer={[]}
    >
      <h4>Apakah Anda yakin menghapus layanan ini ?</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '35px',
        }}
      >
        <Button onClick={onCancel} style={{ width: '100px' }} type="primary">
          Ya
        </Button>
        <Button onClick={onCancel} style={{ width: '100px' }}>
          Tidak
        </Button>
      </div>
    </Modal>
  );
};

export { ModalCreate, ModalUpdate, ModalDelete };
