import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

// Render the application to the DOM.
createRoot(document.querySelector(`#root`) as HTMLDivElement).render(
    <App />
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
);
