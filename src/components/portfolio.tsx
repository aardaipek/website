import { useState } from 'react'

const summaryData = [
  {
    title: 'Total Value',
    value: '$125,000',
    icon: '💰',
    description:
      'This represents the total market value of all assets currently held in your portfolio, including stocks, bonds, and other investments. It is calculated based on the latest available prices.',
  },
  {
    title: 'Total Gain/Loss',
    value: '+$5,200 (4.3%)',
    icon: '📈',
    description:
      'Shows your net profit or loss since the initial investment, both in dollar amount and percentage. This helps you track your portfolio’s overall performance over time.',
  },
  {
    title: 'Holdings Count',
    value: '15',
    icon: '📊',
    description:
      'The number of distinct assets or securities you own in your portfolio. A higher number may indicate greater diversification.',
  },
]

const reviews = [
  {
    title: 'Quarterly Portfolio Review',
    date: '2024-05-15',
    description:
      'Reviewed asset allocation and adjusted for market volatility.',
  },
  {
    title: 'Annual Performance Summary',
    date: '2024-01-10',
    description: 'Strong growth in tech stocks and diversified holdings.',
  },
  {
    title: 'Mid-Year Risk Assessment',
    date: '2024-03-20',
    description: 'Reduced exposure to high-risk assets and increased bonds.',
  },
]

export default function Portfolio() {
  const [selectedSummary, setSelectedSummary] = useState<
    null | (typeof summaryData)[0]
  >(null)
  const [selectedReview, setSelectedReview] = useState<
    null | (typeof reviews)[0]
  >(null)

  return (
    <div className="min-h-screen flex flex-col sm:flex-row p-4 sm:p-10">
      <div className="container mx-auto flex flex-col space-y-8 w-full">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-orange-800">
            Portfolio Dashboard
          </h1>
        </header>

        <section className="flex flex-wrap gap-6 mb-12">
          {summaryData.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedSummary(item)}
              className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0 basis-full sm:basis-[30%]"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
            </button>
          ))}
        </section>

        <section className="flex flex-col md:flex-row gap-6 h-96">
          <div className="bg-white rounded-lg shadow-md p-6 overflow-y-auto w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Portfolio Reviews
            </h2>
            {reviews.map(({ title, date, description }) => (
              <button
                key={title}
                onClick={() => setSelectedReview({ title, date, description })}
                className={`w-full text-left mb-4 p-4 rounded-lg transition-colors duration-300 focus:outline-none ${
                  selectedReview?.title === title
                    ? 'bg-primary-100 text-primary-700 font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg">{title}</h3>
                  <time className="text-sm text-gray-500">{date}</time>
                </div>
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex-1 flex flex-col justify-center">
            {selectedReview ? (
              <>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {selectedReview.title}
                </h3>
                <time className="text-sm text-gray-500 mb-4">
                  {selectedReview.date}
                </time>
                <p className="text-gray-700 leading-relaxed">
                  {selectedReview.description}
                </p>
              </>
            ) : (
              <p className="text-gray-500 italic text-center">
                Select a review from the list to see details here.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedSummary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-colors">
          <div className="bg-white rounded-2xl shadow-2xl w-80 p-8 relative flex flex-col items-center animate-fade-in">
            <button
              aria-label="Close"
              onClick={() => setSelectedSummary(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl"
            >
              &times;
            </button>
            <div className="text-5xl mb-4">{selectedSummary.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedSummary.title}
            </h3>
            <p className="text-2xl font-bold text-primary-600 mb-1">
              {selectedSummary.value}
            </p>
            <p className="text-gray-600 text-base mt-3 text-center leading-relaxed">
              {selectedSummary.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
