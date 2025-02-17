import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { BasicProvider } from '@basictech/react';
import { schema } from '../basic.config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasicProvider project_id={schema.project_id} schema={schema}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </BasicProvider>
  </StrictMode>,
)
