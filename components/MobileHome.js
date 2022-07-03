import styled from 'styled-components';
import AboutMeMobile from './MobileAboutMe';
import Article from './Article';
import Follow from './Follow';
import Hero from './Hero';
import MobileContact from './MobileContact';
import PortfolioMobile from './MobilePortfolio';
import ButtonRound from './ButtonRound';

const Wrapper = styled.section`
  position: relative;
`;

export default function MobileHome({ scroll }) {
  return (
    <Wrapper id="top">
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
      <PortfolioMobile />
      <MobileContact />
      <Follow />
      {scroll.scrollY > 0 ? <ButtonRound visible /> : <ButtonRound />}
    </Wrapper>
  );
}
