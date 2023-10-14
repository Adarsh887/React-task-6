import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #05386b;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2023 Adarsh S. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
