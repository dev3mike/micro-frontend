import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

export function mount(element: HTMLElement) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Show in development environment
if (process.env.NODE_ENV === 'development') {
  const devElemenet = document.getElementById('_marketing_dev_root');
  if (devElemenet) mount(devElemenet);
}
