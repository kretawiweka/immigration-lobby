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
        <SingleHeader color="#fafafa" />
        <Content>
          <CardContainer>
            <Card>
              <Form className="login-form" layout="vertical">
                <Form.Item label="Username:">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item label="Password:">
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
                    <Checkbox>Ingat saya</Checkbox>
                  </Form.Item>
                </Row>
                <Row align="center">
                  <Form.Item style={{ float: 'right' }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      size="large"
                      style={{ background: '#64aced' }}
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
