import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 5rem;
  border-radius: 50%;
  display: flex;
  width: 7rem;
  height: 7rem;
  background-color: var(--yellow);
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 100;
    font-size: 4rem;
    color: var(--grey);
    transform: rotate(90deg) translateY(-0.3rem);
  }
`;

export default function ButtonRound() {
  return (
    <Wrapper>
      <h2>{'>'}</h2>
    </Wrapper>
  );
}
