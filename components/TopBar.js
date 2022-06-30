import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 1rem;
  background-color: var(--darkGrey);
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 400;
  color: var(--textWhite);
  div {
    margin: 2rem 0rem 2rem 4rem;
    font-weight: 600;
    span {
      color: var(--yellow);
      font-size: 3rem;
    }
  }
  nav {
    padding: 3rem 1rem;

    a {
      margin-left: 1rem;
      padding: 1rem 3rem;
      border-bottom: 1px solid rgb(255, 216, 41, 0);
      transition: all 0.4s ease-in-out;
      :hover {
        border-bottom: 3px solid rgb(255, 216, 41, 0.9);
      }
    }
  }
`;

export default function TopBar() {
  return (
    <Wrapper>
      <div>
        {'</> '}
        <span>M</span>ariusz Krawczyk
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </Wrapper>
  );
}
