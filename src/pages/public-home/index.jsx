import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';
import InformasiLayananKeimigrasianLogo from '../../assets/images/informasi_layanan_keimigrasian.png';
import OnlineChatLogo from '../../assets/images/online_chat.png';
import { Row, Col } from 'antd';

const PublicHome = () => {
  return (
    <Layout>
      <Hero />
      <center>
        <SingleHeader title="LAYANAN PUBLIK" />
      </center>
      <Content>
        <CardContent>
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
          <Link to="/online-chat/start-room">
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
        </CardContent>
      </Content>
    </Layout>
  );
};

export default PublicHome;
