// src/components/Layout.js
import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding-top: 4rem;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 3.5rem;
  }
`;

export default Layout;
