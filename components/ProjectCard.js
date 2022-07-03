import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  max-width: 300px;
  margin: 1rem auto;
  border: 2px solid rgba(200, 200, 200, 0.3);
  position: relative;
  overflow: hidden;
  font-size: 1.2rem;
  h2 {
    padding-left: 1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  p {
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
`;
const Photo = styled.img`
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;
`;
const LinkWrapper = styled.div`
  display: flex;
  bottom: 0.5rem;
  right: 1rem;
  position: absolute;
`;
const LinkImg = styled.img`
  width: 35px;
  margin-left: 0.5rem;
`;

export default function ProjectCard({ Project }) {
  return (
    <Wrapper>
      <h2>{Project.name}</h2>
      <p>{Project.description}</p>
      <Photo src={Project.photo?.photo.publicUrlTransformed} />
      <p>Read more... </p>
      <LinkWrapper>
        <Link href={Project.linkGit}>
          <LinkImg src="/static/GitHub-Mark-120px-plus.png" alt="Github" />
        </Link>
        <Link href={Project.linkGit}>
          <LinkImg src="/static/live.png" alt="Github" />
        </Link>
      </LinkWrapper>
    </Wrapper>
  );
}

ProjectCard.propTypes = {
  Project: PropTypes.object,
};
