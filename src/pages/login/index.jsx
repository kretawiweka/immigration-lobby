import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Row, Col, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import HeroBackground from '../../assets/images/hero-bg.jpeg';
import { setAuth } from '../../utils/auth';
import ImmigrationLogo from '../../assets/images/immigration_logo.png';

import {
  Content,
  CardContainer,
  LoginImage,
  LoginLayer,
  LoginContainer,
  ActionContainer,
} from './style';

const ACCOUNT = [
  {
    fullname: 'M. Febriansyah Lutfi',
    username: 'ferbiansyah',
    password: 'secret',
    role_name: 'Petugas Duta Layanan',
    role: 'PETUGAS_DUTA_LAYANAN',
  },
  {
    fullname: 'Hadrian Bayanhaqi',
    username: 'hadrian',
    password: 'secret',
    role_name: 'Administrator Kanim',
    role: 'ADMIN_KANIM',
  },
  {
    fullname: 'Arfan Gumintang',
    username: 'arfan',
    password: 'secret',
    role_name: 'Administrator Humas',
    role: 'ADMIN_HUMAS',
  },
];

const Login = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const handleAlertClose = () => {
    setAlertVisible(false);
  };
  const onFormSubmit = (values) => {
    let isAuth = ACCOUNT.some(
      (item) =>
        item.username === values.username && item.password === values.password
    );
    let index = ACCOUNT.findIndex((item) => item.username === values.username);
    if (isAuth) {
      setAuth({
        username: values.username,
        fullname: ACCOUNT[index].fullname,
        role_name: ACCOUNT[index].role_name,
        role: ACCOUNT[index].role,
      });
      window.location.href = '/';
    } else {
      setAlertVisible(true);
      setAlertMessage('Username dan Password tidak sesuai.');
    }
  };

  return (
    <>
      <LoginContainer>
        <Row style={{ backgroundColor: '#f0f0f0' }}>
          <Col span={24}>
            <Link to="/">
              <div
                style={{ margin: 15, display: 'flex', alignItems: 'center' }}
              >
                <img
                  style={{
                    width: '110px',
                    height: '100%',
                    marginRight: '14px',
                  }}
                  src={ImmigrationLogo}
                  alt="immigration-logo"
                />
                <div>
                  <h1
                    style={{
                      marginBottom: 0,
                      marginTop: 0,
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: '#273c75',
                    }}
                  >
                    <strong>SIMIDUL</strong>
                  </h1>
                  <h3
                    style={{
                      marginBottom: 0,
                      marginTop: -3,
                      color: '#2f3640',
                      fontSize: 16,
                    }}
                  >
                    SI Duta Layanan Keimigrasian
                  </h3>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Content>
          <CardContainer>
            <Card bordered={false}>
              {alertVisible ? (
                <div style={{ marginBottom: '14px' }}>
                  <Alert
                    message={alertMessage}
                    type="error"
                    closable
                    afterClose={handleAlertClose}
                  />
                </div>
              ) : null}
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFormSubmit}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Masukkan username' }]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Masukkan password' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Ingat Saya</Checkbox>
                  </Form.Item>
                </Form.Item>
                <ActionContainer>
                  <Form.Item>
                    <Link to="/layanan-publik">
                      <Button htmlType="button" className="login-form-button">
                        Layanan Publik
                      </Button>
                    </Link>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Masuk
                    </Button>
                  </Form.Item>
                </ActionContainer>
              </Form>
            </Card>
          </CardContainer>
        </Content>
      </LoginContainer>
      <LoginLayer />
      <LoginImage src={HeroBackground} alt="hero-background" />
    </>
  );
};

export default Login;
