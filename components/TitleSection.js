import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  h2 {
    margin: 1rem 0;
  }
  p {
    position: absolute;
    bottom: 0.5rem;
    right: 2rem;
  }
  ::after {
    content: ' ';
    width: 80%;
    height: 2px;
    background-color: rgba(239, 202, 37, 0.4);
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: -3rem;
  }
`;

export default function TitleSection({ title, number }) {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      <p>{number}</p>
    </TitleWrapper>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};
