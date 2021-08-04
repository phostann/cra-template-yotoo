import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { theme } from '../theme';
import { configureAppStore } from '../app/store';

const store = configureAppStore();

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {children}
    </Provider>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
