import React from 'react'
import { useParams } from 'react-router-dom'
import { eventsData } from './Model'

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const event = eventsData.find((event) => event.id.toString() === id)

  if (!event) {
    return <p>Event not found</p>
  }

  return (
    <div className="mx-auto mt-10 max-w-4xl p-8 ">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <img
        src={event.image}
        alt={event.title}
        className="my-6 h-auto w-full object-cover"
      />
      <p className="mb-4 text-gray-600">
        {new Date(event.date).toDateString()}
      </p>
      <p className="text-lg">{event.fullDescription}</p>
    </div>
  )
}

export default EventDetailPage
