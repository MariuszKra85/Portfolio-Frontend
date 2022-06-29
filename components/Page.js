import GlobalStyle from './style/GlobalStyle';

export default function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
