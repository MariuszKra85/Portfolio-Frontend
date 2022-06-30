import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Consolas' ;
    src: url('/static/Comsolas') format('ttf');
    font-weight: bold;
    font-style: normal;

}

html{
   --grey: #2d3039;
   --darkGrey: #1b1e23;
    --yellow: #ffd829;
    --textWhite: #d5d5d5;

    font-family: 'Consolas', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  padding: 0;
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  @media only screen and (max-width: 1150px) {
  font-size: 10px;
  }
  @media only screen and (max-width: 850px) {
  font-size: 8px;
  }
  @media only screen and (max-width: 650px) {
  
  }
  
  
body{
    background-color: var(--grey);
    margin: 0;
    box-sizing: border-box;

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
  margin: 0;
}
}

`;
export default GlobalStyle;
