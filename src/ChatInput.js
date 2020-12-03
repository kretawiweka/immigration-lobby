import { Component } from 'react';
import React from 'react';
import { Input, Button } from 'antd';

class ChatInput extends Component {
  state = {
    text: '',
  };

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: '' });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)} layout="inline">
        <Input
          onChange={(e) => this.onChange(e)}
          value={this.state.text}
          type="text"
          placeholder="Ketik pesan Anda lalu klik tombol Kirim atau tekan Enter"
          autofocus="true"
          style={{ width: '92%' }}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: '#64aced', float: 'right' }}
        >
          <strong>Kirim</strong>
        </Button>
      </form>
    );
  }
}

export default ChatInput;
