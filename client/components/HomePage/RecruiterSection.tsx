import React from 'react'
import { useRef, useState } from 'react'
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
            reset()
            setTimeout(() => {
              setSuccessMessage(null)
            }, 3000)
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
  return (
    <section className="bg-cyan-600  py-10 text-white">
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
              {successMessage}
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
                    required: 'organization name is required',
                  })}
                  type="text"
                  name="organization"
                  className="mt-1 rounded-md border p-2 text-sm text-gray-700"
                  placeholder="Organization"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  {...register('phone', {
                    required: 'organization name is required',
                  })}
                  type="tel"
                  name="phone"
                  className="mt-1 rounded-md border p-2 text-sm text-gray-700"
                  placeholder="Phone Number"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
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
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone.message}
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
