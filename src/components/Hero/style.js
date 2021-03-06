import styled from 'styled-components';

const HeroContaier = styled.div`
  width: 100%;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
`;

const HeroLayer = styled.div`
  background-color: rgba(57, 62, 70, 0.8);
  height: 280px;
  width: 100%;
  position: absolute;
`;

const HeroTitle = styled.h2`
  position: absolute;
  color: #fafafa;
  margin-left: 14px;
  bottom: 28px;
  font-size: 28px;
`;

const HeroSub = styled.h2`
  position: absolute;
  color: #fafafa;
  margin-left: 14px;
  bottom: 7px;
  font-size: 14px;
`;

export { HeroContaier, HeroImage, HeroTitle, HeroSub, HeroLayer };
