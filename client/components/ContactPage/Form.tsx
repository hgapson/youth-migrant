import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
// import ReCAPTCHA from 'react-google-recaptcha'

type FormValues = {
  name: string
  phoneNumber: string
  email: string
  message: string
  captcha: string
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
            reset() // Reset the form
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
    <div className="contact-form-container mx-auto mt-16 max-w-md rounded-lg bg-blue-950 p-8 shadow-lg">
      <p className="mb-6 text-center text-sm text-white underline">
        GET IN TOUCH
      </p>
      <h2 className="mb-4 text-center text-2xl font-semibold text-white">
        Give Us Your Query
      </h2>

      {successMessage && (
        <div className="mb-4 text-center text-green-500">{successMessage}</div>
      )}

      <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-4">
        <div className="mb-4">
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <input
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
              type="tel"
              name="phoneNumber"
              placeholder="Your number"
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-400">
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
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            {...register('message', { required: 'Message is required' })}
            name="message"
            placeholder="Your message"
            className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          value="send"
          className="w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
