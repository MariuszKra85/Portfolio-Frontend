import styled from 'styled-components';
import PropTypes from 'prop-types';
import AboutMeMobile from './MobileAboutMe';
import Article from './Article';
import Follow from './Follow';
import Hero from './Hero';
import MobileContact from './MobileContact';
import PortfolioMobile from './MobilePortfolio';
import ButtonRound from './ButtonRound';

const Wrapper = styled.section`
  position: relative;

  @media only screen and (max-width: 640px) {
    display: flex;
    margin: 7rem 0rem;
    flex-direction: column;
  }
`;
const DisplayArticle = styled.div`
  @media only screen and (min-width: 640px) {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ::after {
      content: ' ';
      background-image: url(${(prop) => prop.img});
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      border-radius: 1rem;
      width: 32%;
      height: 300px;
      bottom: -15px;
      right: 30px;
      transform: translateX(25px);
    }
  }
`;

export default function MobileHome({ scroll }) {
  return (
    <Wrapper id="top">
      <Hero />
      <DisplayArticle img="/static/bg_mobile.jpg">
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
        />
      </DisplayArticle>
      <AboutMeMobile />
      <PortfolioMobile />
      <MobileContact />
      <Follow />
      {scroll.scrollY > 0 ? <ButtonRound visible /> : <ButtonRound />}
    </Wrapper>
  );
}

MobileHome.propTypes = {
  scroll: PropTypes.object,
};
