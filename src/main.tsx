import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { TweetsMasterPage } from './pages/TweetsMasterPage.tsx'
import { TweetDetailsPage } from './pages/TweetDetailsPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<TweetsMasterPage />} />
          <Route path="tweets/:id" element={<TweetDetailsPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Route>

        </Routes>

    </BrowserRouter>

  </StrictMode>,
)
