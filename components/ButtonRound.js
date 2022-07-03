import styled from 'styled-components';

const Wrapper = styled.a`
  position: fixed;
  right: 2rem;
  bottom: ${(props) => (props.visible ? '1rem' : '-4rem')};

  border-radius: 50%;
  display: flex;
  width: 4rem;
  height: 4rem;
  background-color: var(--yellow);
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  transition: all 0.5s ease-in-out;
  h2 {
    font-weight: 100;
    font-size: 4rem;
    color: var(--grey);
    transform: rotate(90deg) translateY(-0.3rem);
  }
`;

export default function ButtonRound({ visible }) {
  let visibleEl = visible;
  return (
    <Wrapper
      onClick={() => {
        window.scrollTo(0, 0);
        visibleEl = !visibleEl;
      }}
      visible={visibleEl}
    >
      <h2>{'>'}</h2>
    </Wrapper>
  );
}
