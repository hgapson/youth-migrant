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
        <div className="relative mt-12 w-full max-w-3xl rounded-xl bg-white/10 p-8 text-white shadow-lg">
          <h3 className="mb-5 text-center text-3xl font-bold text-white">
            Career Success Path
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg bg-white/20 p-4 shadow-md">
              <span className="text-xl">👨‍🏫</span>
              <div>
                <h4 className="text-lg font-semibold">Step 1</h4>
                <p className="text-sm">Career Guidance & Skill Assessment</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-white/20 p-4 shadow-md">
              <span className="text-xl">📑</span>
              <div>
                <h4 className="text-lg font-semibold">Step 2</h4>
                <p className="text-sm">
                  Resume Writing & Job Application Support
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-white/20 p-4 shadow-md">
              <span className="text-xl">🎤</span>
              <div>
                <h4 className="text-lg font-semibold">Step 3</h4>
                <p className="text-sm">
                  Interview Preparation & Mock Interviews
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-white/20 p-4 shadow-md">
              <span className="text-xl">💼</span>
              <div>
                <h4 className="text-lg font-semibold">Step 4</h4>
                <p className="text-sm">Job Placement & Workplace Integration</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-white/20 p-4 shadow-md sm:col-span-2">
              <span className="text-xl">🌟</span>
              <div>
                <h4 className="text-lg font-semibold">Step 5</h4>
                <p className="text-sm">Ongoing Career Growth & Upskilling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmploymentSupport
