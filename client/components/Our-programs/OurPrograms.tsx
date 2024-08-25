// src/components/OurPrograms.tsx

import React, { useState } from 'react'
import youth from '../public/youth.jpg'
import orientation from '../public/orientation.jpg'
import support from '../public/support.jpg'
import student from '../public/students.jpg'
import ProgramModal from './Modal'
import { Program } from './Models'

const programs: Program[] = [
  {
    title: 'Youth Trainings',
    description: 'Description for Program 1',
    image: youth,
    details: 'Detailed explanation about Youth Trainings.',
    additionalInfo: 'Additional info about Youth Trainings.',
  },
  {
    title: 'Orientation',
    description: 'Description for Program 2',
    image: orientation,
    details: 'Detailed explanation about Orientation.',
    additionalInfo: 'Additional info about Orientation.',
  },
  {
    title: 'Supporting',
    description: 'Description for Program 3',
    image: support,
    details: 'Detailed explanation about Supporting.',
    additionalInfo: 'Additional info about Supporting.',
  },
]

const OurPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMoreClick = (program: Program) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProgram(null)
  }

  return (
    <div className="mt-16 min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="mt-16 h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${student})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Our Programs</h1>
          <p className="text-lg">
            Explore the various programs we offer to help former refugees settle
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold">{program.title}</h2>
                  <p className="mb-4 text-gray-700">{program.description}</p>
                  <button
                    onClick={() => handleLearnMoreClick(program)}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProgram && (
        <ProgramModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          program={selectedProgram}
        />
      )}
    </div>
  )
}

export default OurPrograms
