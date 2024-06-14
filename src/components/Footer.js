// src/components/Footer.js
import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container textAlign="center">
        <p>&copy; 2024 Noam Karavani</p>
      </Container>
    </Segment>
  );
};

export default Footer;
