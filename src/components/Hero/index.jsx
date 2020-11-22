import React from 'react';
import { HeroContaier, HeroImage, HeroTitle, HeroLayer } from './style';
import HeroBackground from '../../assets/images/hero-bg.jpeg';
const Hero = () => {
  return (
    <>
      <HeroContaier>
        <HeroLayer />
        <HeroTitle>Selamat Malam, admin</HeroTitle>
        <HeroImage src={HeroBackground} alt="hero-background" />
      </HeroContaier>
    </>
  );
};

export default Hero;
