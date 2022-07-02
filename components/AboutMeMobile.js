import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 100vw;
  background-color: var(--grey);
  padding: 0rem 2rem 2rem;
  line-height: 1.5;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  position: relative;
  width: 100%;
  h2 {
    margin: 1rem 0;
  }
  p {
    position: absolute;
    bottom: 0.5rem;
    right: 0;
  }
  ::after {
    content: ' ';
    width: 80%;
    height: 2px;
    background-color: rgba(239, 202, 37, 0.3);
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: -3rem;
  }
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
    <Wrapper>
      <TitleWrapper>
        <h2>About Me.</h2>
        <p>01</p>
      </TitleWrapper>
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
