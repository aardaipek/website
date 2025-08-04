import React from 'react';
import Portfolio from '../components/portfolio';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
