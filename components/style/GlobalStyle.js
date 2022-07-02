import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Consolas' ;
    src: url('/static/Comsolas') format('ttf');
    font-weight: bold;
    font-style: normal;

}
*{
  margin: 0;
  padding: 0;
}
html{
   --grey: #2d3039;
   --darkGrey: #1b1e23;
    --yellow: #efca25;
    --textWhite: #d5d5d5;

    font-family: 'Consolas', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 13px;
  line-height: 1.5;
  @media only screen and (max-width: 1150px) {
  font-size: 10px;
  scroll-behavior: smooth;
  width: 99vw;
  box-sizing:border-box;
  }
  
  
body{
    background-color: var(--darkGrey);

}
a{
  text-decoration: none;
  color: var(--white)
}
p{
  margin: 0;
}
button{
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
ul{
  list-style: none;
}
}

`;
export default GlobalStyle;
