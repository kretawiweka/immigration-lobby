import React from 'react';
import { Form, Input, Button, Checkbox, Row, Card } from 'antd';
import Icon from '@ant-design/icons';
import HeroBackground from '../../assets/images/hero-bg.jpeg';

import { SingleHeader } from '../../components/Header';
import {
  Content,
  CardContainer,
  LoginImage,
  LoginLayer,
  LoginContainer,
} from './style';

const Login = () => {
  return (
    <>
      <LoginContainer>
        <SingleHeader color="#fafafa" title="DUTA LAYANAN KEIMIGRASIAN" />
        <Content>
          <CardContainer>
            <Card bordered={false}>
              <Form className="login-form" layout="vertical">
                <Form.Item>
                  <h4>Username:</h4>
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item>
                  <h4>Password:</h4>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Row>
                  <Form.Item>
                    <Checkbox>
                      <span>Ingat Saya</span>
                    </Checkbox>
                  </Form.Item>
                </Row>
                <Row align="center">
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="login-form-button"
                      size="large"
                    >
                      <strong>Masuk</strong>
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
