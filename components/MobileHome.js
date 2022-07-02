import styled from 'styled-components';
import Article from './Article';
import Hero from './Hero';

const Wrapper = styled.section`
  position: relative;
`;

export default function MobileHome() {
  return (
    <Wrapper>
      <Hero />
      <Article
        title="About Me"
        content="something what you should know about me"
        link="/about"
        linkText="Read more..."
      />
      <Article
        title="About Me"
        content="something what you should know about me"
        link="/about"
        linkText="Read more..."
        img="/static/bg_mobile.jpg"
      />
    </Wrapper>
  );
}
