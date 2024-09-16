// components/ContactFormSection.tsx

import React from 'react'

const ContactFormSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-center text-3xl font-extrabold">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
