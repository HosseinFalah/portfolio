import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './Containers/AppContainer';
import ContextProvaider from './Context/MainContext';
import './index.css';

const root = createRoot(document.querySelector("#root"));
root.render(
    <StrictMode>
      <ContextProvaider>
        <AppContainer />
      </ContextProvaider>
    </StrictMode>
);