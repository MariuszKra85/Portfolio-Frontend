import styled from 'styled-components';
import TitleSection from './TitleSection';

const Wrapper = styled.section`
  max-width: 100vw;
  background-color: var(--grey);
  padding: 0rem 0 2rem 2rem;
  line-height: 1.5;
  overflow: hidden;
`;

const StyledArticle = styled.article`
  margin: 1rem 0;
  p {
    margin: 1rem;
  }
  span {
    font-size: 1.3rem;
  }
`;

export default function AboutMeMobile() {
  return (
    <Wrapper id="about">
      <TitleSection title="About Me." number="01" />

      <StyledArticle>
        <span>1.1</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis,
          provident maxime deserunt molestias dignissimos? Velit, accusamus
          reprehenderit! Deserunt provident eveniet nam facere, aut vero
          pariatur id ex officiis reprehenderit.
        </p>
        <span>1.2</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
          suscipit ratione error sit inventore dolorem praesentium illum ab
          laboriosam laborum aperiam aspernatur eaque assumenda, reiciendis
          tempora ut ipsum nam?
        </p>
      </StyledArticle>
    </Wrapper>
  );
}
