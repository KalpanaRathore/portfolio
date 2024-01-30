import React from 'react';
import styled from 'styled-components';
import { AiOutlineRedEnvelope} from 'react-icons/ai';

const ContactWrapper = styled.section`
  padding: 50px;
  background-color: #f5f5f5;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactIcon = styled.div`
  color: #61dafb;
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactContent>
        <ContactIcon>
          <AiOutlineRedEnvelope size="48" />
        </ContactIcon>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for any collaboration or project.</p>
        <a href="https://www.google.com/gmail/about/" target='blank'><p>Email: kalpanarathore005@gmail.com</p></a>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;