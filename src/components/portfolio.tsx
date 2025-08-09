import { useState } from 'react'

const portfolioSummary = {
  totalHoldings: 12,
  totalValue: 45750.32,
  oneMonthPerformance: 8.5,
}

const reviews = [
  {
    id: 1,
    title: 'Q4 2024 Performance Review',
    date: '2024-12-31',
    summary: 'Strong quarter with tech stocks leading gains',
    details:
      'Technology sector performed exceptionally well this quarter, with our holdings in AAPL and MSFT showing significant gains. Overall portfolio up 12% for the quarter. Energy sector lagged behind due to lower oil prices. as a result, we are considering reallocating some funds to more stable sectors like healthcare and consumer staples.   sda. We will continue to monitor the market closely and adjust our strategy as needed.. sdad dasdsadsadasdsadasdsa ',
  },
  {
    id: 2,
    title: 'Mid-Year Portfolio Analysis',
    date: '2024-06-30',
    summary: 'Balanced performance across sectors',
    details:
      'Diversification strategy paid off with steady growth across all sectors. Energy and healthcare provided stability while tech drove growth.',
  },
  {
    id: 3,
    title: 'Q1 2024 Market Outlook',
    date: '2024-03-31',
    summary: 'Defensive positioning amid market uncertainty',
    details:
      'Maintained conservative approach due to market volatility. Focus on dividend-paying stocks and bonds provided steady returns.',
  },
]

function PortfolioSummary() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-base font-bold text-gray-800 mb-6">
        Portfolio Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">
            {portfolioSummary.totalHoldings}
          </p>
          <p className="text-gray-600 mt-2">Total Holdings</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">
            $
            {portfolioSummary.totalValue.toLocaleString('en-US', {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="text-gray-600 mt-2">Total Value</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p
            className={`text-2xl font-bold ${portfolioSummary.oneMonthPerformance >= 0 ? 'text-green-600' : 'text-red-600'}`}
          >
            {portfolioSummary.oneMonthPerformance >= 0 ? '+' : ''}
            {portfolioSummary.oneMonthPerformance}%
          </p>
          <p className="text-gray-600 mt-2">1 Month Performance</p>
        </div>
      </div>
    </div>
  )
}

function ReviewCard({
  review,
  isExpanded,
  onToggle,
}: {
  review: (typeof reviews)[0]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden w-full mb-4">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
      >
        <div className="flex justify-between items-start w-full">
          <div className="flex-1 pr-6">
            <h3 className="font-semibold text-gray-800 mb-2">{review.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{review.date}</p>
            <p className="text-sm text-gray-700">{review.summary}</p>
          </div>
          <div className="flex-shrink-0">
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 whitespace-pre-wrap break-words leading-relaxed mt-4">
            {review.details}
          </p>
        </div>
      </div>
    </div>
  )
}

function ReviewsList() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null)

  const toggleReview = (id: number) => {
    setExpandedReview(expandedReview === id ? null : id)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-base font-bold text-gray-800 mb-6">
        Reviews & Thoughts
      </h2>
      <div>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            isExpanded={expandedReview === review.id}
            onToggle={() => toggleReview(review.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="mt-5">
      <PortfolioSummary />
      <ReviewsList />
    </div>
  )
}
