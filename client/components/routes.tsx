// src/components/routes.tsx

import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from './Layout'
import Home from './HomePage/Home'
import Contact from './ContactPage/Contact'
import EventsPage from './EventPage/AllEvents'
import About from './About-us/About'
import OurPrograms from './Our-programs/OurPrograms'
import Partners from './Our-Partners/Partners'
import GetInvolved from './GetInvolved/GetInvolved'
import Vacancies from './GetInvolved/vacancies'
import JobDetail from './GetInvolved/JobDetail'
import WhyWeHelp from './Why/WhyWeHelp'
import NewsPage from './News/NewsPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'about-us', element: <About /> },
      { path: 'our-programs', element: <OurPrograms /> },
      { path: 'our-partners', element: <Partners /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'vacancies', element: <Vacancies /> },
      { path: 'vacancies/:id', element: <JobDetail /> },
      { path: 'why-we-help', element: <WhyWeHelp /> },
      { path: 'news', element: <NewsPage /> },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
