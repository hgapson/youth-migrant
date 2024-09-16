import Background from './Background' // Adjust the path as per your project structure
import Event from './Events'
import FancySection from './Impact'
import Reason from './Reason'
import JobSolution from './JobSolution'
import JobListing from './JobsListing'
import '../main.scss'
// import GetInvolved from './GetInvolved'
// import ImageCardSection from './Partners'
import TestimonialsSection from './Testimonial'
// import News from './News'
//import News from './News'

const Home = () => {
  return (
    <main className="main-container">
      <div className="background mb-6">
        <Background />
      </div>
      <div className="event">
        <Event />
      </div>
      <div className="impact">
        <FancySection />
      </div>

      <div className="reason">
        <Reason />
      </div>
      <div className="jobSolution">
        <JobSolution />
      </div>
      <div className="jobListing">
        <JobListing />
      </div>
      <div className='testimonies'>
        <TestimonialsSection />
      </div>

      {/* Your main content here */}
    </main>
  )
}

export default Home
