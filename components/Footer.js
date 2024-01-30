import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;