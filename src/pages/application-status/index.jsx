import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { SingleHeader } from '../../components/Header';
import { Content, CardContent, CardTitle, BreadCrumbContainer } from './style';
import PasporLogo from '../../assets/images/passport.png';
import IzinTinggalLogo from '../../assets/images/izin_tinggal.png';
import {
  Row,
  Col
} from 'antd';

const ApplicationStatus = () => {
  return (
    <>
      <Layout>
        <BreadCrumbContainer>
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>
              <strong>Status Permohonan</strong>
            </Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbContainer>
        <SingleHeader title="STATUS PERMOHONAN" />
        <Content>
          <CardContent>
            <Link to="/status-permohonan/paspor">
              <Card backgroundColor="#e8e8e8" width="200px" style={{ height: '240px'}}>
                <Row>
                  <Col span={24}>
                  <Row>
                    <Col span={24}>
                      <center>
                        <img
                          style={{ width: '110px', height: '100%'}}
                          src={PasporLogo}
                          alt="Paspor-logo"
                        />
                      </center>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={24}>
                      <CardTitle>Paspor<br></br><br></br></CardTitle>
                    </Col>
                  </Row>
                  </Col>
                </Row>
              </Card>
            </Link>
            <Link to="/status-permohonan/izin-tinggal">
              <Card backgroundColor="#e8e8e8" width="200px" style={{ height: '240px'}}>
                <Row>
                  <Col span={24}>
                  <Row>
                    <Col span={24}>
                      <center>
                        <img
                          style={{ width: '110px', height: '100%'}}
                          src={IzinTinggalLogo}
                          alt="Izin-Tinggal-logo"
                        />
                      </center>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col span={24}>
                      <CardTitle>Izin<br></br>Tinggal</CardTitle>
                    </Col>
                  </Row>
                  </Col>
                </Row>
              </Card>
            </Link>
          </CardContent>
        </Content>
      </Layout>
    </>
  );
};

export default ApplicationStatus;
