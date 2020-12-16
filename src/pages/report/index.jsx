import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle, BreadCrumbContainer } from './style';
import RekamCounterLogo from '../../assets/images/rekam_counter.png';
import LaporanInformasiYangSeringDitanyakanLogo from '../../assets/images/laporan_informasi_yang_sering_ditanyakan.png';
import LaporanKinerjaLogo from '../../assets/images/laporan_kinerja.png';
import { isAuthRole } from '../../utils/auth';
import { Row, Col } from 'antd';

const Report = () => {
  return (
    <>
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Laporan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <SingleHeader title="LAPORAN" />
        <Content>
          <CardContent>
            {isAuthRole('PETUGAS_DUTA_LAYANAN') && (
              <Link to="/laporan/rekam-counter" style={{ marginLeft: '550px' }}>
                <Card
                  backgroundColor="#e8e8e8"
                  width="200px"
                  style={{ height: '240px' }}
                >
                  <Row>
                    <Col span={24}>
                      <Row>
                        <Col span={24}>
                          <center>
                            <img
                              style={{ width: '110px', height: '100%' }}
                              src={RekamCounterLogo}
                              alt="Rekam-Counter-logo"
                            />
                          </center>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col span={24}>
                          <CardTitle>
                            Rekam<br></br>Counter
                          </CardTitle>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Link>
            )}
            {(isAuthRole('ADMIN_HUMAS') || isAuthRole('ADMIN_KANIM')) && (
              <Link
                to="/laporan/informasi-sering-ditanyakan"
                style={{ marginLeft: '50px' }}
              >
                <Card
                  backgroundColor="#e8e8e8"
                  width="200px"
                  style={{ height: '240px' }}
                >
                  <Row>
                    <Col span={24}>
                      <Row>
                        <Col span={24}>
                          <center>
                            <img
                              style={{ width: '110px', height: '100%' }}
                              src={LaporanInformasiYangSeringDitanyakanLogo}
                              alt="Laporan-Informasi-Yang-Sering-Ditanyakan-logo"
                            />
                          </center>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col span={24}>
                          <CardTitle>
                            Laporan Informasi Yang<br></br>Sering Ditanyakan
                          </CardTitle>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Link>
            )}
            {isAuthRole('ADMIN_KANIM') && (
              <Link
                to="/laporan/peforma-petugas"
                style={{ marginLeft: '50px' }}
              >
                <Card
                  backgroundColor="#e8e8e8"
                  width="200px"
                  style={{ height: '240px' }}
                >
                  <Row>
                    <Col span={24}>
                      <Row>
                        <Col span={24}>
                          <center>
                            <img
                              style={{ width: '110px', height: '100%' }}
                              src={LaporanKinerjaLogo}
                              alt="Laporan-Kinerja-logo"
                            />
                          </center>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col span={24}>
                          <CardTitle>
                            Laporan Kinerja Petugas<br></br>Duta Layanan
                          </CardTitle>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Link>
            )}
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default Report;
