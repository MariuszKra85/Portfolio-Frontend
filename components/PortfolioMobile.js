import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import DisplayError from './DisplayError';

const ALL_PROJECT_DATA = gql`
  query {
    allProjects {
      id
      name
      description
      photo {
        photo {
          publicUrlTransformed
        }
      }
      linkGit
    }
  }
`;

const TitleWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  h2 {
    margin: 1rem 0;
  }
  p {
    position: absolute;
    bottom: 0.5rem;
    right: 2rem;
  }
  ::after {
    content: ' ';
    width: 80%;
    height: 2px;
    background-color: rgba(239, 202, 37, 0.4);
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: -3rem;
  }
`;

export default function PortfolioMobile() {
  const { data, error, loading } = useQuery(ALL_PROJECT_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { allProjects } = data;
  return (
    <div>
      <TitleWrapper>
        <h2>Portfolio</h2>
        <p>02</p>
      </TitleWrapper>

      {allProjects.map((e, index) => (
        <>
          <p>2.{index + 1}</p>
          <ProjectCard Project={e} key={e.id} />
        </>
      ))}
    </div>
  );
}
