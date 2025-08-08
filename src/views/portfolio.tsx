import React from 'react';
import Portfolio from '../components/portfolio';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';

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
