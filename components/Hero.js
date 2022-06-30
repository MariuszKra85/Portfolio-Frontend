import styled from 'styled-components';

const Wrapper = styled.section`
  color: var(--textWhite);
  margin: 14rem 0rem 8rem 5rem;
  div {
    width: 10rem;
    height: 0.6rem;
    background-color: var(--yellow);
  }
  h1 {
    margin: 3rem 0;
    font-size: 4rem;
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
