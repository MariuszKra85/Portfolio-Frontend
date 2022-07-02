import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperArticle = styled.article`
  padding-top: 1rem;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  margin-left: 3rem;
  position: relative;
  z-index: 3;
  h4 {
    position: relative;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 500;
    z-index: 3;
  }
  p {
    position: relative;
    font-size: 1.1rem;
    line-height: 2.5;
    margin-bottom: 2rem;
    z-index: 3;
  }
  a {
    position: relative;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 1.3rem;
    border-bottom: 1px solid var(--textWhite);
    z-index: 3;
  }
  :before {
    content: ' ';
    background-image: url(${(prop) => prop.img});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    border-radius: 2rem;
    top: -10px;
    right: 0px;
    transform: translateX(20px);
    opacity: 0.4;
    width: 220px;
    height: 150px;
    z-index: 1;
    border: ${(prop) => (prop.img ? '2px var(--yellow) solid' : null)};
  }
`;

export default function Article({ title, content, link, linkText, img }) {
  return (
    <WrapperArticle img={img}>
      <h4>{title}</h4>
      <p>{content}</p>
      <Link href={link}>{linkText}</Link>
    </WrapperArticle>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  img: PropTypes.string,
};
