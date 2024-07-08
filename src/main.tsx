import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import './styles/App.css'

const container = document.getElementById('root');
if (container) {  // Ensure container is not null
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root container is not found");
}
