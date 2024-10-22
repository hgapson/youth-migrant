import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  name: string
  organization: string
  phone: string
  email: string
  message: string
}

const RecruiterSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const sendEmail: SubmitHandler<FormValues> = (data) => {
    if (form.current) {
      emailjs
        .sendForm(
          'service_huukdph',
          'template_p934xyh',
          form.current,
          '_AfuqjrcWWBEbnsoh',
        )
        .then(
          () => {
            setSuccessMessage('Your message has been sent successfully!')
            reset() // Reset the form after submission
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
        .catch((error) => {
          console.error('Error sending email:', error)
        })
    }
  }

  const handleCloseMessage = () => {
    setSuccessMessage(null) // Clear the success message when close button is clicked
  }

  return (
    <section className="bg-cyan-600 py-10 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-100">
          Recruiters, Have Jobs to Offer?
        </h2>
        <p className="mb-6 text-center text-lg">
          Connect with us and provide your details below to help us match
          candidates with your job openings.
        </p>

        <div className="flex justify-center bg-gray-200 py-8">
          {successMessage && (
            <div className="mb-4 text-center font-semibold text-green-600">
              <span>{successMessage}</span>
              <button
                onClick={handleCloseMessage}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              >
                &times; {/* Close button */}
              </button>
            </div>
          )}
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="w-full max-w-xl rounded-lg bg-white p-6 shadow-md"
          >
            <h2 className="mb-4 text-center text-2xl font-semibold">
              Submit Your Job Listings
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  name="name"
                  className="mt-1 rounded-md border p-2 text-sm text-gray-700"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  {...register('organization', {
                    required: 'Organization name is required',
                  })}
                  type="text"
                  name="organization"
                  className="mt-1 rounded-md border p-2 text-sm text-gray-700"
                  placeholder="Organization"
                />
                {errors.organization && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.organization.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                  })}
                  type="tel"
                  name="phone"
                  className="mt-1 rounded-md border p-2 text-sm text-gray-700"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  name="email"
                  className="mt-1 rounded-md border p-2 text-sm text-gray-700"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-500 py-2 text-sm text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RecruiterSection
