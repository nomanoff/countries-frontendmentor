import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
  color: ${({ dark }) => (dark ? "#fff" : "#111517")};
`;

const BackBtn = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  background: ${({ dark }) => (dark ? "#2b3945" : "#fff")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;  
  color: ${({ dark }) => (dark ? "#fff" : "#111517")};
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Flag = styled.img`
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Info = styled.div`
  flex: 1;
  min-width: 250px;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0.4rem 0;
  }
`;

const Borders = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  strong {
    margin-right: 0.5rem;
  }
`;

const BorderBtn = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 5px;
  background: ${({ dark }) => (dark ? "#2b3945" : "#fff")};
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  font-size: 0.9rem;
`;

export default function CountryDetail({ darkMode }) {
  const { code } = useParams();
  const country = data.countries.find(c => c.alpha3Code === code);

  if (!country) return <p>Country not found...</p>;

  return (
    <Container dark={darkMode}>
      <BackBtn to="/" dark={darkMode}>⬅️ Back</BackBtn>
      <Layout>
        <Flag src={country.flags.svg} alt={country.name} />
        <Info>
          <h1>{country.name}</h1>
          <p><strong>Native Name:</strong> {country.nativeName}</p>
          <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(', ')}</p>
          <p><strong>Currencies:</strong> {country.currencies?.map(c => c.name).join(', ')}</p>
          <p><strong>Languages:</strong> {country.languages?.map(l => l.name).join(', ')}</p>
          
          {country.borders?.length > 0 && (
            <Borders>
              <strong>Border Countries:</strong>
              {country.borders.map((b, i) => (
                <BorderBtn key={i} dark={darkMode}>{b}</BorderBtn>
              ))}
            </Borders>
          )}
        </Info>
      </Layout>
    </Container>
  );
}
