import styled from 'styled-components';

const Wrapper = styled.section`
  color: var(--textWhite);
  margin: 10rem 0rem 8rem 5rem;
  div {
    width: 10rem;
    height: 0.6rem;
    background-color: var(--yellow);
  }
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 1.3rem;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <div />
      <h1>I'm Mariusz, a Web Developer</h1>
      <p>
        Beginning is scary, exciting, terrifying, and all things amazing. Begin
        even when you're not sure..... What do you have to lose?
      </p>
    </Wrapper>
  );
}
