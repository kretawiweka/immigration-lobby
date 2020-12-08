import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Alert } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
};

const ModalCreate = ({ isVisible, onCancel }) => {
  const [form] = Form.useForm();

  const [visibleAlert, setVisibleAlert] = useState(false);

  const handleClose = () => {
    setVisibleAlert(false);
  };

  return (
    <Modal
      title="Tambah Jenis Layanan"
      visible={isVisible}
      onCancel={onCancel}
      footer={[]}
    >
      {visibleAlert ? (
        <div style={{ marginBottom: '14px' }}>
          <Alert
            message="Data sukses ditambahkan"
            type="success"
            closable
            afterClose={handleClose}
          />
        </div>
      ) : null}
      <Form
        {...layout}
        name="basic"
        form={form}
        onFinish={() => {
          setVisibleAlert(true);
          form.resetFields();
        }}
        onFinishFailed={() => {}}
      >
        <Form.Item
          label="Nama Jenis Layanan (Indo)"
          name="indo_service"
          rules={[
            { required: true, message: 'Masukkan nama layanan indonesia' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nama Jenis Layanan (Eng)"
          name="eng_service"
          rules={[{ required: true, message: 'Masukkan nama layanan inggris' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Deskripsi Jenis Layanan(Indo)"
          name="indo_description"
          rules={[{ required: true, message: 'Masukkan deskripi indonesia' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Deskripsi Jenis Layanan(Eng)"
          name="eng_description"
          rules={[{ required: true, message: 'Masukkan deskripi inggris' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button style={{ float: 'right' }} type="secondary" size="large">
            Batal
          </Button>
          <Button
            style={{ float: 'right', marginRight: '10px' }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalUpdate = ({ isVisible, onCancel, data }) => {
  const [form] = Form.useForm();
  const [visibleAlert, setVisibleAlert] = useState(false);
  useEffect(() => {
    form.resetFields();
    setVisibleAlert(false);
  }, [data, form]);
  const handleClose = () => {
    setVisibleAlert(false);
  };
  return (
    <Modal
      title="Ubah Jenis Layanan"
      visible={isVisible}
      onCancel={onCancel}
      footer={[]}
    >
      {visibleAlert ? (
        <div style={{ marginBottom: '14px' }}>
          <Alert
            message="Data sukses diubah"
            type="success"
            closable
            afterClose={handleClose}
          />
        </div>
      ) : null}
      <Form
        {...layout}
        form={form}
        initialValues={{
          indo_service: data.indo_service,
          eng_service: data.eng_service,
          indo_description: data.indo_description,
          eng_description: data.eng_description,
        }}
        name="basic"
        onFinish={() => {
          setVisibleAlert(true);
        }}
        onFinishFailed={() => {}}
      >
        <Form.Item
          label="Nama Jenis Layanan (Indo)"
          name="indo_service"
          rules={[
            { required: true, message: 'Masukkan nama layanan indonesia' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nama Jenis Layanan (Eng)"
          name="eng_service"
          rules={[{ required: true, message: 'Masukkan nama layanan inggris' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Deskripsi Jenis Layanan(Indo)"
          name="indo_description"
          rules={[{ required: true, message: 'Masukkan deskripi indonesia' }]}
        >
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item
          label="Deskripsi Jenis Layanan(Eng)"
          name="eng_description"
          rules={[{ required: true, message: 'Masukkan deskripi inggris' }]}
        >
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item>
          <Button style={{ float: 'right' }} type="secondary" size="large">
            Batal
          </Button>
          <Button
            style={{ float: 'right', marginRight: '10px' }}
            type="primary"
            htmlType="submit"
            size="large"
          >
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
      title="Hapus Jenis Layanan"
      visible={isVisible}
      onCancel={onCancel}
      footer={[]}
    >
      <ToastContainer />
      <h4>Apakah Anda yakin akan menghapus jenis layanan ini?</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '35px',
        }}
      >
        <Button
          onClick={() => {
            toast.error('Data berhasil dihapus', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(function () {
              onCancel();
            }, 3000);
          }}
          style={{ width: '100px' }}
          type="primary"
        >
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
