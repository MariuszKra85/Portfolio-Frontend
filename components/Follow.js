import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 3rem;
  h3 {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 2rem;
  }
`;

export default function Follow() {
  return (
    <Wrapper>
      <h3>Follow Me</h3>

      <a
        href="http://github.com/MariuszKra85"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/static/GitHub-Mark-120px-plus.png" alt="" />
      </a>
      <img src="/static/facebook.png" alt="" />
      <img src="/static/linkedin.png" alt="" />
      <img src="/static/instagram.png" alt="" />
    </Wrapper>
  );
}
