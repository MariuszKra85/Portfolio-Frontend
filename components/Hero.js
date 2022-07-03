import styled from 'styled-components';

const Wrapper = styled.section`
  color: var(--textWhite);
  margin: 5rem 0rem 8rem 3rem;
  padding-top: 10rem;
  padding-bottom: 3rem;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 740px) {
    ::before {
      content: ' ';
      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--grey);
      width: 600px;
      height: 800px;
      z-index: 0;
    }
  }

  @media only screen and (min-width: 640px) {
    h1 {
      width: 50%;
    }
    p {
      width: 40%;
    }
  }

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
  h2,
  h3 {
    position: relative;
    margin-top: 2rem;
    font-size: 1.7rem;
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
  top: 10rem;
  right: 0;
  width: 850px;
  height: 450px;

  :before {
    content: ' ';

    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    border-radius: 2rem;
    background-image: url(/static/bg_mobile.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (min-width: 1000px) {
      opacity: 1;
      box-shadow: 6px 5px 8px var(--darkGrey);
    }
  }
  @media only screen and (min-width: 600px) {
    width: 450px;
    height: 380px;
  }
  @media only screen and (min-width: 1000px) {
    right: 4rem;
    width: 35%;
    height: 500px;
  }
`;

const TechWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  img {
    width: 50px;
    padding: 1rem;
  }
  @media only screen and (min-width: 1000px) {
    width: 45%;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <BgWrapper />
      <div>
        <Line />
        <h1>I'm Mariusz, a Web Developer</h1>
        <p>
          Beginning is scary, exciting, terrifying, and all things amazing.
          Begin even when you're not sure..... What do you have to lose?
        </p>
        <h2> Check my Technology stack:</h2>
        <TechWrapper>
          <img src="/static/html-logo.svg" alt="html" />
          <img src="/static/js-logo.svg" alt="html" />
          <img src="/static/react-logo.svg" alt="html" />
          <img src="/static/nextjs-logo.png" alt="html" />
          <img src="/static/gatsby-logo.svg" alt="html" />
          <img src="/static/graphql-logo.svg" alt="html" />
        </TechWrapper>
      </div>
      <h3> I have been study Web Development for mast 4 month.</h3>
      <p>
        It was my dream for long time. And now I feel it is time to show What i
        lear from that time and im ready for new chellage in my Life.
      </p>
      <p>
        I still learnig but that how we progress ourselfs to be every day better
        version on us.
      </p>
    </Wrapper>
  );
}
