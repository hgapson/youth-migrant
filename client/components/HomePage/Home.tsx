import Background from './Background' // Adjust the path as per your project structure
import Event from './Events'
import Reason from './Reason'
import '../main.scss'
import GetInvolved from './GetInvolved'
import ImageCardSection from './Partners'
import TestimonialsSection from './Testimonial'
import News from './News'
//import News from './News'

const Home = () => {
  return (
    <main className="main-container">
      <div className="background mb-6">
        <Background />
      </div>
      <div className="event ">
        <Event />
      </div>
      <div className="reason bg-blue-950">
        <Reason />
      </div>
      <div className="involved bg-blue-950">
        <GetInvolved />
      </div>
      <div className="partners bg-blue-950">
        <ImageCardSection />
      </div>
      <div className="testimonial">
        <TestimonialsSection />
      </div>
      <div className="news ">
        <News />
      </div>
      {/* Your main content here */}
    </main>
  )
}

export default Home
