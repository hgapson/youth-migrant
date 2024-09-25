// src/components/routes.tsx

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './Layout'
import Home from './HomePage/Home'
import Contact from './ContactPage/Contact'
import EventsPage from './EventPage/AllEvents'
import About from './About-us/About'
// import OurPrograms from './Our-programs/OurPrograms'
import JobSolutionsPage from './Why/JobSolutions'
import Vacancies from './JobsList/vacancies'
import JobDetail from './JobsList/JobDetail'
import WhyWeHelp from './Why/WhyWeHelp'
import EventDetailPage from './EventPage/EventDetail'
// import NewsPage from './News/NewsPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'about-us', element: <About /> },
      // { path: 'our-programs', element: <OurPrograms /> },
      { path: 'job-solution', element: <JobSolutionsPage /> },
      { path: 'vacancies', element: <Vacancies /> },
      { path: 'vacancies/:id', element: <JobDetail /> },
      { path: 'why-we-help', element: <WhyWeHelp /> },
      { path: 'events/:id', element: <EventDetailPage /> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
