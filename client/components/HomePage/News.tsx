// import React from 'react'
import { Link } from 'react-router-dom'
import { newsArticles } from '../News/Model'

const News = () => {
  // Get the latest two articles by sorting them by date and slicing the array.
  const latestArticles = newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    .slice(0, 2)

  return (
    <section className="newsletter-section bg-blue-950 py-16">
      <div className="container mx-auto flex flex-col items-start md:flex-row md:space-x-8">
        {/* First Div: Title and Paragraph */}
        <div className="mb-8 flex-1 text-center md:mb-0 md:text-left">
          <h2 className="font-times text-3xl text-gray-100">In The News</h2>
          <p className="mt-4 text-lg text-gray-400">
            Stay updated with our latest news and articles.
          </p>
        </div>

        {/* News Cards */}
        {latestArticles.map((article) => (
          <div
            key={article.id}
            className="news-card mb-8 flex-1 overflow-hidden rounded-lg shadow-lg md:mb-0"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 rounded-tr-lg bg-blue-600 px-4 py-1 text-white">
                {article.date}
              </div>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Published by {article.publisher} - {article.date} -{' '}
                {article.location}
              </p>
              <p className="mt-4 text-gray-600">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single Read More Button */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/news"
          className="btn rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          Read More
        </Link>
      </div>
    </section>
  )
}

export default News
