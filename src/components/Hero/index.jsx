import React from 'react';
import { HeroContaier, HeroImage, HeroTitle, HeroLayer } from './style';
import HeroBackground from '../../assets/images/hero-bg.jpeg';
import { getLocalStorage } from '../../utils/localStorage';

const Hero = () => {
  return (
    <>
      <HeroContaier>
        <HeroLayer />
        {getLocalStorage('auth') && (
          <HeroTitle>
            Selamat Siang, <strong>{getLocalStorage('auth').fullname}</strong>.
          </HeroTitle>
        )}
        <HeroImage src={HeroBackground} alt="hero-background" />
      </HeroContaier>
    </>
  );
};

export default Hero;
