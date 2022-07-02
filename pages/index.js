import styled from 'styled-components';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ButtonRound from '../components/ButtonRound';
import Article from '../components/Article';
import Follow from '../components/Follow';
import MobileHome from '../components/MobileHome';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20rem;

  section {
    position: relative;
  }

  @media only screen and (max-width: 1000px) {
    gap: 15rem;
  }
  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 2rem;
  }
`;

export default function HomePage({ windowSize }) {
  const { height, width } = windowSize;
  console.log(width);

  const witchDevice = () => {
    if (width < 450) {
      return <MobileHome />;
    }
  };

  return <>{witchDevice()}</>;
}
