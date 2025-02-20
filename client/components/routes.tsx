// src/components/routes.tsx

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './Layout'
import Home from './HomePage/Home'
import Contact from './ContactPage/Contact'
import About from './About-us/About'
import JobSolutionsPage from './Services/Services'
import Vacancies from './JobsList/vacancies'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about-us', element: <About /> },
      { path: 'job-solution', element: <JobSolutionsPage /> },
      { path: 'vacancies', element: <Vacancies /> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
