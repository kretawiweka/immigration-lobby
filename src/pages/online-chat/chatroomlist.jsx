import React, { Component } from 'react';
import {
  Breadcrumb,
  Typography,
  Card,
  Input,
  Button,
  Row,
  Col,
  Image,
  Select,
  Badge,
} from 'antd';

import Layout from '../../components/Layout';
import { ContentChatRoomList, BreadCrumbContainer } from './style';
import Messages from '../../Messages';
import ChatInput from '../../ChatInput';
import '../../Chat.css';

const { Search } = Input;
const { Title } = Typography;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class RoomList extends Component {
  state = {
    messages: [],
    member: {
      username: 'M. Febriansyah Lutfi',
      type: 'petugas',
    },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone('kernhKv4dF3mfoW0', {
      data: this.state.member,
    });
    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      console.log('testtt');
      console.log(data);
      console.log(member);
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    return (
      <Layout>
        <ContentChatRoomList>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Online Chat</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          {/* <Row>
                <Col span={24}>
                  <Card size="small" bodyStyle={{ padding: 5 }}>
                    <center>
                      <Title level={5} style={{ marginBottom: 0 }}><strong>Online Chat Room<br></br><small>Kanim Kelas 1 Khusus Jakarta Selatan</small></strong></Title>
                    </center>
                  </Card>
                </Col>
            </Row> */}
          <Row style={{ height: '630px' }}>
            <Col span={8} style={{ height: '100%' }}>
              <Card style={{ height: '100%' }} bodyStyle={{ padding: 10 }}>
                <Row>
                  <Col span={6}>
                    <Image
                      width={50}
                      src="https://www.imigrasi.go.id/images/Logo-IM.png"
                      style={{ float: 'right' }}
                    />
                  </Col>
                  <Col span={14}>
                    <center>
                      <Title level={5} style={{ marginBottom: 0 }}>
                        <strong>
                          Online Chat Room<br></br>
                          <small>Kanim Kelas 1 Khusus Jakarta Selatan</small>
                        </strong>
                      </Title>
                    </center>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col span={11}>
                    <Search placeholder="Cari" style={{ width: '100%' }} />
                  </Col>
                  <Col span={1}></Col>
                  <Col span={12}>
                    <Select
                      defaultValue="status"
                      style={{ width: '100%' }}
                      onChange={handleChange}
                    >
                      <Option value="status">Pilih Status</Option>
                      <Option value="Semua">Semua</Option>
                      <Option value="Connected">Connected</Option>
                      <Option value="Waiting">Waiting</Option>
                      <Option value="Closed">Closed</Option>
                      <Option value="Missed">Missed</Option>
                    </Select>
                  </Col>
                </Row>
                <br></br>
                <Row style={{ height: '475px', border: '1px solid #e8e8e8' }}>
                  <Col
                    span={24}
                    style={{
                      height: '100%',
                      overflowY: 'scroll',
                      overflowX: 'hidden',
                    }}
                  >
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'green' }}
                          text="Connected"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <Badge count={2} />{' '}
                                <strong>Supriyadi Munawar Akbar</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>supriyadimunawarakbar@gmail.com</small>
                              </Col>
                              <Col span={8}>
                                <small>18 November 2020 16:11:38</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'green' }}
                          text="Connected"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <Badge count={1} />{' '}
                                <strong>Natasha Kumaira</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>natashakum@gmail.com</small>
                              </Col>
                              <Col span={8}>
                                <small>17 November 2020 14:01:19</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon text="Waiting">
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Briselle Manupati</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>bribriselle@icloud.com</small>
                              </Col>
                              <Col span={8}>
                                <small>17 November 2020 11:49:31</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon text="Waiting">
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Khodijah Aminah</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>khodijah.aminah_94@icloud.com</small>
                              </Col>
                              <Col span={8}>
                                <small>17 November 2020 11:49:31</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'orange' }}
                          text="Missed"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Ryan Andryan</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>ryanand@rocketmail.com</small>
                              </Col>
                              <Col span={8}>
                                <small>17 November 2020 11:18:40</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'orange' }}
                          text="Missed"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Mustika Nikita</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>mustikanikita@yahoo.com</small>
                              </Col>
                              <Col span={8}>
                                <small>17 November 2020 10:59:01</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'grey' }}
                          text="Closed"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Tubagus Irawan</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>t.irawan@yahoo.com</small>
                              </Col>
                              <Col span={8}>
                                <small>17 November 2020 09:41:10</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'grey' }}
                          text="Closed"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Yani Kumalasarie</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>yanie984@gmail.com</small>
                              </Col>
                              <Col span={8}>
                                <small>16 November 2020 15:18:37</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Badge.Ribbon
                          style={{ backgroundColor: 'grey' }}
                          text="Closed"
                        >
                          <Card size="small">
                            <Row>
                              <Col span={24}>
                                <strong>Urip Mukti Ariel</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={16}>
                                <small>1umariel1@gmail.com</small>
                              </Col>
                              <Col span={8}>
                                <small>16 November 2020 13:01:48</small>
                              </Col>
                            </Row>
                          </Card>
                        </Badge.Ribbon>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={16} style={{ height: '100%' }}>
              <Card
                style={{
                  height: '100%',
                  padding: 0,
                  backgroundColor: '#e6e6e6',
                }}
                bodyStyle={{ padding: 10 }}
              >
                <Card size="small" style={{ marginBottom: 10 }}>
                  <Row>
                    <Col span={2}>
                      <center>
                        <Badge status="success" size="default" />
                        <Image
                          width={40}
                          src="https://i7.uihere.com/icons/751/175/791/user-round-circle-11dfd8d81dad74245ee0db29ca0e0aae.png"
                        />
                      </center>
                    </Col>
                    <Col span={18}>
                      <strong>Supriyadi Munawar Akbar</strong>
                      <br></br>supriyadimunawarakbar@gmail.com
                    </Col>
                    <Col span={4}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          border: '0',
                          float: 'right',
                        }}
                      >
                        <strong>Akhiri</strong>
                      </Button>
                    </Col>
                  </Row>
                </Card>
                <Card
                  style={{
                    backgroundColor: '#e6e6e6',
                    height: '475px',
                    overflowY: 'scroll',
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <Messages
                    messages={this.state.messages}
                    currentMember={this.state.member}
                  />
                </Card>
                <Card bodyStyle={{ padding: 10 }}>
                  <ChatInput onSendMessage={this.onSendMessage} />
                </Card>
              </Card>
            </Col>
          </Row>
        </ContentChatRoomList>
      </Layout>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default RoomList;
