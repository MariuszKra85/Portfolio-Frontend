import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cloneElement, useEffect, useState } from 'react';
import GlobalStyle from './style/GlobalStyle';
import TopBar from './TopBar';

const Wrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  background-color: var(--darkGrey);
  color: var(--textWhite);
`;

export default function Page({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return (
    <Wrapper>
      <TopBar />
      <GlobalStyle />
      {cloneElement(children, { windowSize })}
    </Wrapper>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
