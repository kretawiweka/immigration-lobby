import React from 'react';
import { Breadcrumb, Collapse } from 'antd';
import Layout from '../../components/Layout';
import { BreadCrumbContainer, ContentPassport } from './style';

const { Panel } = Collapse;

const ServiceInformation = () => {
  const text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

  const PassportContent = () => {
    return (
      <>
        <h3>1. Deskripsi Umum</h3>
        <p>{text}</p>
        <h3>2. Biaya Permohonan</h3>
        <p>{text}</p>
        <h3>3. Tujuan</h3>
        <p>{text}</p>
        <h3>4. Dokumen Persyaratan</h3>
        <p>{text}</p>
        <h3>5. Tahapan Permohonan</h3>
        <p>{text}</p>
      </>
    );
  };

  return (
    <>
      <Layout>
        <ContentPassport>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>Informasi Layanan</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Paspor</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <div style={{ margin: '14px 0' }}>
            <Collapse accordion>
              <Panel header="Paspor Biasa 24 Halaman" key="1">
                <PassportContent />
              </Panel>
              <Panel header="Paspor Biasa 48 Halaman" key="2">
                <PassportContent />
              </Panel>
              <Panel header="Paspor Elektronik 48 Halaman" key="3">
                <PassportContent />
              </Panel>
              <Panel header="Paspor Elektronik Polikarbonat" key="4">
                <PassportContent />
              </Panel>
            </Collapse>
          </div>
        </ContentPassport>
      </Layout>
    </>
  );
};

export default ServiceInformation;
