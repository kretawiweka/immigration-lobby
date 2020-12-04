import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Row, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import HeroBackground from '../../assets/images/hero-bg.jpeg';
import { setAuth } from '../../utils/auth';

import { SingleHeader } from '../../components/Header';
import {
  Content,
  CardContainer,
  LoginImage,
  LoginLayer,
  LoginContainer,
} from './style';

const ACCOUNT = {
  username: 'admin',
  password: 'admin',
};

const Login = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const handleAlertClose = () => {
    setAlertVisible(false);
  };
  const onFormSubmit = (values) => {
    if (
      values.username === ACCOUNT.username &&
      values.password === ACCOUNT.password
    ) {
      setAuth({
        username: values.username,
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
        <SingleHeader color="#fafafa" title="DUTA LAYANAN KEIMIGRASIAN" />
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
                  rules={[
                    { required: true, message: 'Please input your Username!' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your Password!' },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Form.Item>
                <Row align="center">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Masuk
                    </Button>
                  </Form.Item>
                </Row>
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
