import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import DisplayError from './DisplayError';
import TitleSection from './TitleSection';

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

const Wrapper = styled.div`
  padding-left: 2rem;
  span {
    font-size: 1.3rem;
  }
`;

export default function PortfolioMobile() {
  const { data, error, loading } = useQuery(ALL_PROJECT_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { allProjects } = data;
  return (
    <Wrapper id="portfolio">
      <TitleSection title="Portfolio" number="02" />

      {allProjects.map((e, index) => (
        <>
          <span>2.{index + 1}</span>
          <ProjectCard Project={e} key={e.id} />
        </>
      ))}
    </Wrapper>
  );
}
