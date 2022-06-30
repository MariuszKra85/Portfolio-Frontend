import styled from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from './style/GlobalStyle';
import TopBar from './TopBar';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  height: 100%;
  background-color: var(--darkGrey);
  color: var(--textWhite);
`;

export default function Page({ children }) {
  return (
    <Wrapper>
      <TopBar />
      <GlobalStyle />
      {children}
    </Wrapper>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
