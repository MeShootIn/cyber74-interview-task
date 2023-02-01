import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FileProvider } from './components/FileContext/FileContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FileProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FileProvider>
);
// WARN Для разработки лучше использовать <React.StrictMode> (обернуть ВСЁ), но
// будут двойные useEffect(..., [])!
