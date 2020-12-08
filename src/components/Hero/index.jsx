import React from 'react';
import { HeroContaier, HeroImage, HeroTitle, HeroLayer } from './style';
import HeroBackground from '../../assets/images/hero-bg.jpeg';
const Hero = () => {
  return (
    <>
      <HeroContaier>
        <HeroLayer />
        <HeroTitle>
          Selamat Siang, <strong>Arfan Gumintang</strong>.
        </HeroTitle>
        <HeroImage src={HeroBackground} alt="hero-background" />
      </HeroContaier>
    </>
  );
};

export default Hero;
