import React from 'react'

const portfolioData = [
  { symbol: 'AAPL', shares: 10, price: 150.0 },
  { symbol: 'GOOGL', shares: 5, price: 2800.0 },
  { symbol: 'AMZN', shares: 2, price: 3400.0 },
  { symbol: 'MSFT', shares: 8, price: 300.0 },
]

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Stock Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.map((stock, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold">{stock.symbol}</h2>
            <p className="text-gray-600">Shares: {stock.shares}</p>
            <p className="text-gray-600">Price: ${stock.price.toFixed(2)}</p>
            <p className="text-gray-600">
              Total: ${(stock.shares * stock.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PortfolioDashboard() {
  return (
    <>
      <span>Arda test</span>
    </>
  )
}
