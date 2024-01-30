import React from 'react';
import styled from 'styled-components';
import { AiOutlineLaptop, AiFillAccountBook, AiOutlineSetting} from 'react-icons/ai';


const ServicesWrapper = styled.section`
  padding: 50px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ServiceItem = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  color: #61dafb;
  margin-bottom: 10px;
`;

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <h2>My Services</h2>
      <ServiceItem>
        <ServiceIcon>
          <AiOutlineLaptop size="48" />
        </ServiceIcon>
        <h3>Web Development</h3>
        <p>Building modern and responsive websites.</p>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <AiFillAccountBook size="48" />
        </ServiceIcon>
        <h3>UI/UX Design</h3>
        <p>Creating intuitive and user-friendly interfaces.</p>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>
          <AiOutlineSetting size="48" />
        </ServiceIcon>
        <h3>Consultation</h3>
        <p>Providing expert advice on web development.</p>
      </ServiceItem>
    </ServicesWrapper>
  );
};

export default Services;