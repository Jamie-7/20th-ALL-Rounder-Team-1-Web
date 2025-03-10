import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
import { PopUpContextProvider } from '@/contexts';
import { AppProvider } from '@/utils';
import { GlobalStyle, theme } from '@/style';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: '', // 추후에 생성될 서버의 url을 추가하면 됩니다.
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <AppProvider components={[PopUpContextProvider]}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AppProvider>
  </ApolloProvider>
);
