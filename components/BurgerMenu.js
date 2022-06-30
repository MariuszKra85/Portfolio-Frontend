import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 99;
  display: none;

  @media only screen and (max-width: 700px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: 0.4rem;
    background: ${({ open }) => (open ? '#313131' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      width: 2.2rem;
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    @media (max-width: 576px) {
    }
  }
`;
const StyledMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 0 6rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 98;
  display: none;

  @media (max-width: 700px) {
    display: flex;
  }

  @media (max-width: 576px) {
    width: 100%;

    background-color: rgba(245, 245, 245, 0.95);
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    {console.log(open)}
    <div />
    <div />
  </StyledBurger>
);
const Menu = ({ open }) => (
  <StyledMenu open={open}>
    {console.log(open)}
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </StyledMenu>
);

export { Burger, Menu };
