import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Layout from '../../components/LayoutMasyarakat';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle } from './style';
import InformasiLayananKeimigrasianLogo from '../../assets/images/informasi_layanan_keimigrasian.png';
import OnlineChatLogo from '../../assets/images/online_chat_masyarakat.png';
import {
  Row,
  Col
} from 'antd';

const HomePageMasyarakat = () => {
  return (
    <Layout>
      <center>
        <SingleHeader title="Informasi Layanan" />
      </center>
      <Content>
        <CardContent>
          <Link to="/informasi-layanan" style={{ marginLeft: '675px'}}>
            <Card backgroundColor="#e8e8e8" width="200px" style={{ height: '240px'}}>
            <Row>
              <Col span={24}>
              <Row>
                <Col span={24}>
                  <center>
                    <img
                      style={{ width: '110px', height: '100%'}}
                      src={InformasiLayananKeimigrasianLogo}
                      alt="Informasi-Layanan-Keimigrasian-logo"
                    />
                  </center>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col span={24}>
                  <CardTitle>Informasi Layanan<br></br>Keimigrasian</CardTitle>
                </Col>
              </Row>
              </Col>
              </Row>
            </Card>
          </Link>
          <Link to="/online-chat/start-room" style={{ marginLeft: '50px'}}>
          <Card backgroundColor="#e8e8e8" width="200px" style={{ height: '240px', marginLeft: '50px'}}>
            <Row>
              <Col span={24}>
              <Row>
                <Col span={24}>
                  <center>
                    <img
                      style={{ width: '110px', height: '100%'}}
                      src={OnlineChatLogo}
                      alt="Online-Chat-logo"
                    />
                  </center>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col span={24}>
                  <CardTitle>Online<br></br>Chat</CardTitle>
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

export default HomePageMasyarakat;
