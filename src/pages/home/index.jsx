import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';
import InformasiLayananKeimigrasianLogo from '../../assets/images/informasi_layanan_keimigrasian.png';
import StatusPermohonanLogo from '../../assets/images/status_permohonan.png';
import OnlineChatLogo from '../../assets/images/online_chat.png';
import LaporanLogo from '../../assets/images/laporan.png';
import KelolaInformasiLogo from '../../assets/images/kelola_informasi.png';
import AkunPenggunaLogo from '../../assets/images/akun_pengguna.png';
import { Row, Col } from 'antd';
import { isAuthRole } from '../../utils/auth';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <center>
        <SingleHeader title="BERANDA" />
      </center>
      <Content>
        <CardContent>
          {isAuthRole('PETUGAS_DUTA_LAYANAN') && (
            <Link to="/informasi-layanan">
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
                            src={InformasiLayananKeimigrasianLogo}
                            alt="Informasi-Layanan-Keimigrasian-logo"
                          />
                        </center>
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col span={24}>
                        <CardTitle>
                          Informasi Layanan<br></br>Keimigrasian
                        </CardTitle>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Link>
          )}
          {isAuthRole('PETUGAS_DUTA_LAYANAN') && (
            <React.Fragment>
              <Link to="/status-permohonan">
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
                              src={StatusPermohonanLogo}
                              alt="Status-Permohonan-logo"
                            />
                          </center>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col span={24}>
                          <CardTitle>
                            Status<br></br>permohonan
                          </CardTitle>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/online-chat/room-list">
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
                              src={OnlineChatLogo}
                              alt="Online-Chat-logo"
                            />
                          </center>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col span={24}>
                          <CardTitle>
                            Online<br></br>Chat
                          </CardTitle>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </React.Fragment>
          )}
          <Link to="/laporan">
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
                          src={LaporanLogo}
                          alt="Laporan-logo"
                        />
                      </center>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={24}>
                      <CardTitle>
                        Laporan<br></br>
                        <br></br>
                      </CardTitle>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Link>
          {isAuthRole('ADMIN_HUMAS') && (
            <Link to="/kelola-informasi-layanan">
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
                            src={KelolaInformasiLogo}
                            alt="Kelola-Informasi-logo"
                          />
                        </center>
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col span={24}>
                        <CardTitle>
                          Kelola<br></br>Informasi
                        </CardTitle>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Link>
          )}
          {(isAuthRole('ADMIN_HUMAS') || isAuthRole('ADMIN_KANIM')) && (
            <Link to="/akun-pengguna">
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
                            src={AkunPenggunaLogo}
                            alt="Akun-Pengguna-logo"
                          />
                        </center>
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col span={24}>
                        <CardTitle>
                          Akun<br></br>Pengguna
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
  );
};

export default HomePage;
