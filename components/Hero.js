import styled from 'styled-components';

const Wrapper = styled.section`
  color: var(--textWhite);
  margin: 10rem 0rem 8rem 5rem;

  h1 {
    position: relative;
    margin: 3rem 0;
    font-size: 4rem;
    z-index: 10;
  }
  p {
    position: relative;
    font-size: 1.3rem;
    z-index: 10;
  }
`;
const Line = styled.div`
  position: relative;
  width: 10rem;
  height: 0.6rem;
  background-color: var(--yellow);
  z-index: 10;
`;

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 350px;
  height: 250px;
  :before {
    content: ' ';

    position: absolute;
    left: 2rem;
    top: -10rem;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    border-radius: 2rem;
    background-image: url(/static/bg_mobile.jpg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <BgWrapper />
      <Line />
      <h1>I'm Mariusz, a Web Developer</h1>
      <p>
        Beginning is scary, exciting, terrifying, and all things amazing. Begin
        even when you're not sure..... What do you have to lose?
      </p>
    </Wrapper>
  );
}
