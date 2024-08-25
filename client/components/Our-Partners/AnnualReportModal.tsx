import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import { reports } from './Model'
import { FaDownload } from 'react-icons/fa'

interface AnnualReportModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const AnnualReportModal: React.FC<AnnualReportModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  // Clear the message and selected year when the modal is closed
  useEffect(() => {
    if (!isOpen) {
      setMessage('')
      setSelectedYear('')
    }
  }, [isOpen])

  const handleDownload = () => {
    const report = reports.find((report) => report.year === selectedYear)
    if (report) {
      const link = document.createElement('a')
      link.href = report.file
      link.download = `${report.year}-annual-report.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setMessage('')
      setSelectedYear('') // Clear selected year after download
    } else {
      setMessage('Please select a year.')
    }
  }

  const handleView = () => {
    const report = reports.find((report) => report.year === selectedYear)
    if (report) {
      window.open(report.file, '_blank')
      setMessage('')
    } else {
      setMessage('Please select a year.')
    }
  }

  return (
    <Modal showModal={isOpen} handleClose={onRequestClose}>
      <h2 className="mb-4 text-2xl font-bold">
        Select Year to Download or View Report
      </h2>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      >
        <option value="" disabled>
          Select Year
        </option>
        {reports.map((report, index) => (
          <option key={index} value={report.year}>
            {report.year}
          </option>
        ))}
      </select>

      <div className="flex items-center justify-between">
        {selectedYear &&
        reports.find((report) => report.year === selectedYear) ? (
          <button
            onClick={handleView}
            className="cursor-pointer text-lg font-bold text-blue-500 hover:text-blue-600"
            title={`View ${selectedYear} Report`}
          >
            {`${selectedYear} Annual Report`}
          </button>
        ) : (
          <p className="text-lg font-bold text-gray-500"></p>
        )}
        <FaDownload
          onClick={handleDownload}
          className={`cursor-pointer text-3xl ${selectedYear ? 'text-blue-500 hover:text-blue-600' : 'cursor-not-allowed text-gray-400'}`}
          title="Download Report"
        />
      </div>

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </Modal>
  )
}

export default AnnualReportModal
