import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Card, Title } from 'antd';
import Icon from '@ant-design/icons';

const Login = () => {
  return (
    <>
      <h1 style={{ marginLeft: 15, marginBottom: 0 }}><strong>DUTA LAYANAN<br></br>KEIMIGRASIAN</strong></h1>
      <Row>
        <Col span={8}>
          <hr style={{ height: 10, background: "#64aced" }}></hr>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Card>
            <Form className="login-form" layout="vertical">
              <Form.Item label="Username:">
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item label="Password:">
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                <Form.Item style={{float: 'right'}}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    size='large'
                    style={{ background: "#64aced" }}
                  >
                    <strong>Masuk</strong>
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default Login;
