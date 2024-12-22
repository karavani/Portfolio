import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {React.Children.map(children, (child, index) => (
        <Section index={index}>
          {child}
        </Section>
      ))}
      <Footer />
    </LayoutWrapper>
    
  );
};

const LayoutWrapper = styled.div`
  scroll-behavior: smooth;
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${props => props.index % 2 === 0 ? '#ffffff' : '#f8f9fa'};

  @media (max-width: 768px) {
    padding-bottom: 90px; // מרווח לתפריט תחתון במובייל
  }
`;

export default Layout; 