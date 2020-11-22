import React from 'react';
import { Card } from 'antd';
import {
  HeroContaier,
  HeroImage,
  HeroTitle,
  HeroLayer,
  Content,
  CardContent,
  CardTitle,
} from './style';

const Hero = () => {
  return (
    <>
      <HeroContaier>
        <HeroLayer />
        <HeroTitle>Selamat Malam, admin</HeroTitle>
        <HeroImage
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="hero-background"
        />
      </HeroContaier>
      <Content>
        <CardContent>
          <Card
            hoverable
            style={{ width: 240, margin: 14 }}
            cover={
              <img
                alt="example"
                src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
              />
            }
          >
            <CardTitle>Informasi Layanan</CardTitle>
          </Card>
          <Card
            hoverable
            style={{ width: 240, margin: 14 }}
            cover={
              <img
                alt="example"
                src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
              />
            }
          >
            <CardTitle>Online Chat</CardTitle>
          </Card>
          <Card
            hoverable
            style={{ width: 240, margin: 14 }}
            cover={
              <img
                alt="example"
                src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
              />
            }
          >
            <CardTitle>Status Permohonan</CardTitle>
          </Card>
        </CardContent>
        <CardContent>
          <Card
            hoverable
            style={{ width: 240, margin: 14 }}
            cover={
              <img
                alt="example"
                src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
              />
            }
          >
            <CardTitle>Kelola Informasi Layanan</CardTitle>
          </Card>
          <Card
            hoverable
            style={{ width: 240, margin: 14 }}
            cover={
              <img
                alt="example"
                src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
              />
            }
          >
            <CardTitle>Layanan</CardTitle>
          </Card>
          <Card
            hoverable
            style={{ width: 240, margin: 14 }}
            cover={
              <img
                alt="example"
                src="https://midomidi.files.wordpress.com/2019/06/cropped-logomidomidi.png?w=240"
              />
            }
          >
            <CardTitle>Akun</CardTitle>
          </Card>
        </CardContent>
      </Content>
    </>
  );
};

export default Hero;
