// Install styled-components if you haven't already
// npm install styled-components
import styled, { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import "@/scss/globals.css";
import "@/scss/index.scss";
// Define font styles
const GlobalStyle = createGlobalStyle`
  :root {
    --raleway: 'Raleway', sans-serif;
    --fira-code: 'Fira Code', monospace;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyAppContent = styled.div`
  font-family: var(--raleway);
  text-align: center;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MyAppContent>
          {Component && <Component {...pageProps} />}
        </MyAppContent>
      </MainContainer>
    </>
  );
};

export default MyApp;
