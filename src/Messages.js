import {Component} from "react";
import React from "react";
import {
  Image
} from 'antd';
import { string } from "prop-types";

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    var dateNow = new Date();
    var timeNow = dateNow.getHours() + '.' + dateNow.getMinutes();
    const imageSource = member.clientData.color;
    if(member.clientData.type == 'masyarakat') {
      return (
        <li className={className}>
          <span
            className="avatar">
              <Image width={40} src="https://i7.uihere.com/icons/751/175/791/user-round-circle-11dfd8d81dad74245ee0db29ca0e0aae.png" />
          </span>
          <div className="Message-content">
            <div className="text">{text}&emsp;<small>{ timeNow }</small></div>
          </div>
          <br></br>
          <br></br>
        </li>
      );
    } else {
      return (
        <li className={className}>
          <span
            className="avatar">
              <Image width={40} src="https://www.imigrasi.go.id/images/Logo-IM.png" />
          </span>
          <div className="Message-content">
            <div className="text">{text}&emsp;<small>{ timeNow }</small></div>
          </div>
          <br></br>
          <br></br>
        </li>
      );
    }
  }
}

export default Messages;