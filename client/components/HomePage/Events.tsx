import {
  FaChalkboardTeacher,
  FaBriefcase,
  FaUsers,
  FaHandshake,
} from 'react-icons/fa'
import jobSupportImage from '../public/impact.jpg' // Replace with an actual image

const EmploymentSupport = () => {
  const initiatives = [
    {
      id: 1,
      icon: <FaBriefcase />,
      title: 'Job Placement Assistance',
      description:
        'Connecting skilled migrants and refugees with meaningful employment opportunities.',
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: 'Workshops & Training',
      description:
        'Providing career coaching, resume building, and interview preparation.',
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Professional Networking',
      description:
        'Creating industry connections through mentorship and networking events.',
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: 'Employer Partnerships',
      description:
        'Partnering with businesses to promote inclusive hiring and workplace diversity.',
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-green-300 to-cyan-500 px-6 py-16 text-white md:px-12 lg:px-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="mb-10 text-4xl font-bold tracking-wide">
          EMPLOYMENT & ECONOMIC EMPOWERMENT
        </h2>

        {/* Employment Support Initiatives */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-xl bg-white/20 p-6 shadow-md transition-transform hover:scale-105"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* New Context: Career Success Path */}
        <div className="relative mt-12 flex flex-col items-center lg:flex-row lg:gap-12">
          <div className="relative h-64 w-full max-w-lg overflow-hidden rounded-lg shadow-lg lg:w-1/2">
            <img
              src={jobSupportImage}
              alt="Employment Support"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative mt-6 max-w-lg rounded-lg bg-white/20 p-6 text-white shadow-lg lg:mt-0">
            <h3 className="mb-3 text-2xl font-bold">Career Success Path</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>👨‍🏫 **Step 1:** Career Guidance & Skill Assessment</li>
              <li>📑 **Step 2:** Resume Writing & Job Application Support</li>
              <li>🎤 **Step 3:** Interview Preparation & Mock Interviews</li>
              <li>💼 **Step 4:** Job Placement & Workplace Integration</li>
              <li>🌟 **Step 5:** Ongoing Career Growth & Upskilling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmploymentSupport
