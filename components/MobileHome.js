import styled from 'styled-components';
import AboutMeMobile from './AboutMeMobile';
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
        title="My Work"
        content="Pna excepteur officia aud dolor cillum cupidatat pariatur dolore voluptate aliqua. Consequat pariatur fugiat eiusmod et tempor. Ad ut est id aliquip et labore esse.Veniam magna irure reprehenderit pariatur mollit occaecat amet."
        link="/about"
        linkText="Portfolio.."
        img="/static/bg_mobile.jpg"
      />
      <AboutMeMobile />
    </Wrapper>
  );
}
