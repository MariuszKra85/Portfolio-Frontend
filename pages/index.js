import styled from 'styled-components';
import Hero from '../components/Hero';
import ButtonRound from '../components/ButtonRound';
import Article from '../components/Article';
import Follow from '../components/Follow';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18rem;

  section {
    position: relative;
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      <section>
        <Hero />
        <ButtonRound />
      </section>
      <section>
        <Article
          title="about me"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis sunt ipsam ad dolore enim numquam itaque ex veritatis suscipit. Accusantium nobis consequuntur dolor sit tempore similique soluta repellat ipsa?"
          link="/about"
          linkText="Learn More"
        />
        <Article
          title="My work"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nobis sunt ipsam ad dolore enim numquam itaque ex veritatis suscipit. "
          link="/project"
          linkText="My Portfolio"
        />
        <Follow />
      </section>
    </Wrapper>
  );
}
