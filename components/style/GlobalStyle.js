import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Roboto' ;
    src: url('/static/Roboto-Bold') format('ttf');
    font-weight: bold;
    font-style: normal;

}

html{
   --grey: #2d3039;
   --darkGrey: #1b1e23;
    --yeallow: #ffd829;

    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.5;
  body{
  margin: 0;
}
a{
  text-decoration: none;
  color: var(--white)
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
