import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperArticle = styled.article`
  padding-top: 2rem;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  h4 {
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  p {
    font-size: 1.1rem;
    line-height: 2.5;
    margin-bottom: 2rem;
  }
  a {
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 4rem;
    font-size: 1.3rem;
    border-bottom: 1px solid var(--textWhite);
  }
`;

export default function Article({ title, content, link, linkText }) {
  return (
    <WrapperArticle>
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
};
