import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app.tsx';
import store from "./app/redux/store.ts";
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
