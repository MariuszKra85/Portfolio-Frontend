import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { Burger, Menu } from './BurgerMenu';

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 2rem 1rem;
  background-color: var(--darkGrey);
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--textWhite);
  z-index: 200;
  div {
    font-weight: 600;
    span {
      color: var(--yellow);
      font-size: 2.7rem;
      margin-left: 1rem;
    }
  }
  nav {
    padding: 0rem 1rem;
    font-size: 2rem;

    a {
      margin-left: 1rem;
      padding: 1rem 3.5rem;
      border-bottom: 1px solid rgb(255, 216, 41, 0);
      transition: all 0.4s ease-in-out;
      :hover {
        border-bottom: 3px solid rgb(255, 216, 41, 0.9);
      }
      @media only screen and (max-width: 1000px) {
        padding: 1rem 2.5rem;
      }
    }
    @media only screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export default function TopBar({ windowSize }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <div>
        <img src="/static/coder.png" alt="coder" width="100px" />
        <span>M</span>ariusz Krawczyk
      </div>

      <nav />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} windowSize={windowSize} />
    </Wrapper>
  );
}
