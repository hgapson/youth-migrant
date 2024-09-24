import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  name: string
  phoneNumber: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
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
          'template_emmyh0z',
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
    <div className="contact-form-container mx-auto mt-16 max-w-lg rounded-lg  p-8 shadow-md lg:max-w-2xl">
      <p className="mb-6 text-center text-sm uppercase tracking-widest text-gray-100">
        Get In Touch
      </p>
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        We are Here to Help!
      </h2>

      {successMessage && (
        <div className="mb-4 text-center font-semibold text-green-600">
          {successMessage}
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-6">
        <div className="mb-4">
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <input
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
              type="tel"
              name="phoneNumber"
              placeholder="Your phone number"
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && (
              <p className="mt-2 text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            {...register('message', { required: 'Message is required' })}
            name="message"
            placeholder="Your message"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
