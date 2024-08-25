import React, { useState } from 'react'
import { newsArticles, Article } from './Model'
import ArticleModal from './Modal'

const NewsPage = () => {
  // Define how many articles per page
  const articlesPerPage = 6

  // Calculate the total number of pages
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage)

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1)

  // State to manage the modal
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Calculate the articles to display on the current page
  const startIndex = (currentPage - 1) * articlesPerPage
  const selectedArticles = newsArticles.slice(
    startIndex,
    startIndex + articlesPerPage,
  )

  // Handle page change
  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }

  // Open modal with selected article
  const openModal = (article: Article) => {
    setSelectedArticle(article)
    setModalIsOpen(true)
  }

  // Close modal
  const closeModal = () => {
    setSelectedArticle(null)
    setModalIsOpen(false)
  }

  return (
    <div className="news-page bg-blue-950 py-16">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-gray-100">
            News & Updates
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Stay informed with the latest news, stories, and events.
          </p>
        </header>

        {/* News Articles */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {selectedArticles.map((article) => (
            <div
              key={article.id}
              className="news-card overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt="News"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 rounded-tr-lg bg-blue-600 px-4 py-1 text-white">
                  {article.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Published by {article.publisher} - {article.location}
                </p>
                <p className="mt-4 text-gray-600">{article.excerpt}</p>
                <button
                  onClick={() => openModal(article)}
                  className="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              Previous
            </button>

            {/* Generate page numbers dynamically */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`rounded px-4 py-2 text-white ${
                  currentPage === index + 1
                    ? 'bg-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      {/* Article Modal */}
      <ArticleModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        article={selectedArticle}
      />
    </div>
  )
}

export default NewsPage
