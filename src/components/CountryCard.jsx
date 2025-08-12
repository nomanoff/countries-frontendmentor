import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

const Card = styled(Link)`
  display: block;
background: ${({ dark, length }) =>
  dark
    ? "#2b3945" 
    : length
      ? "#ffffff" 
      : "#dfe4e8ff" 
};

color: ${({ dark }) =>
  dark
    ? "#ffffff" 
    : "#111517" 
};

  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;

  transition: transform 0.2s, background 0.3s, color 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  strong {
    font-weight: 600;
  }
`;

export default function CountryCard({ country, darkMode }) {
  return (
    <Card to={`/country/${country.alpha3Code}`} dark={darkMode}>
      <Flag src={country.flags.png} alt={country.name} />
      <Info>
        <Title>{country.name}</Title>
        <Text>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </Text>
        <Text>
          <strong>Region:</strong> {country.region}
        </Text>
        <Text>
          <strong>Capital:</strong> {country.capital}
        </Text>
      </Info>
    </Card>
  );
}
