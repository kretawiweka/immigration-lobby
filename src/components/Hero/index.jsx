import React from 'react';
import {
  HeroContaier,
  HeroImage,
  HeroTitle,
  HeroLayer,
  HeroSub,
} from './style';
import HeroBackground from '../../assets/images/hero-bg.jpeg';
const Hero = () => {
  return (
    <>
      <HeroContaier>
        <HeroLayer />
        <HeroTitle>Hai, Ayu</HeroTitle>
        <HeroSub>Pilih layanan keimigrasian yang diinginkan</HeroSub>
        <HeroImage src={HeroBackground} alt="hero-background" />
      </HeroContaier>
    </>
  );
};

export default Hero;
