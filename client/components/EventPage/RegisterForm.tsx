import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface RegisterFormProps {
  event: {
    title: string
  }
}

const RegisterForm: React.FC<RegisterFormProps> = ({ event }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: event ? event.title : '',
  })
  const [errors, setErrors] = useState<string | null>(null)

  useEffect(() => {
    if (event) {
      setFormData((prevData) => ({ ...prevData, event: event.title }))
    }
  }, [event])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const { name, email } = formData
    if (!name || !email) {
      return 'Name and Email are required.'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return 'Invalid email address.'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formError = validateForm()
    if (formError) {
      setErrors(formError)
      return
    }

    try {
      await axios.post('/api/v1/registrations', formData)
      alert('Registration successful!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        event: event ? event.title : '',
      })
      setErrors(null)
    } catch (error) {
      console.error('There was an error submitting the form:', error)
      setErrors('Failed to register. Please try again.')
    }
  }

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Register for {event.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        {errors && <p className="text-red-500">{errors}</p>}
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
