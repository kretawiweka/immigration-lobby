import React, { Component } from 'react';
import { Card, Row, Col, Image, Badge, Breadcrumb } from 'antd';

import { ContentChatRoom, BreadCrumbContainer } from './style';
import Messages from '../../Messages';
import ChatInput from '../../ChatInput';
import '../../Chat.css';
import LayoutMasyarakat from '../../components/LayoutMasyarakat';

class ChatRoom extends Component {
  state = {
    messages: [],
    member: {
      username: 'Supriyadi Munawar Akbar',
      type: 'masyarakat',
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
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    return (
      <LayoutMasyarakat>
        <ContentChatRoom>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Beranda</Breadcrumb.Item>
              <Breadcrumb.Item>
                <strong>Online Chat</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
          <Row style={{ height: '66-px' }}>
            <Col span={24} style={{ height: '100%' }}>
              <Card
                style={{ height: '100%', padding: 0, backgroundColor: '#e6e6e6' }}
                bodyStyle={{ padding: 10 }}
              >
                <Card size="small" style={{ marginBottom: 10 }}>
                  <Row>
                    <Col span={2}>
                      <center>
                        <Badge status="success" size="default" />
                        <Image
                          width={40}
                          src="https://www.imigrasi.go.id/images/Logo-IM.png"
                        />
                      </center>
                    </Col>
                    <Col span={18}>
                      <strong>M. Febriansyah Lutfi</strong>
                      <br></br>Petugas Duta Layanan Kantor Imigrasi Kelas I Khusus
                      Jakarta Selatan
                    </Col>
                  </Row>
                </Card>
                <Card
                  style={{
                    backgroundColor: '#e6e6e6',
                    height: '400px',
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
        </ContentChatRoom>
      </LayoutMasyarakat>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default ChatRoom;
