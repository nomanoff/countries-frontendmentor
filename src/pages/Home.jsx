import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../data/data.json";
import CountryCard from "../components/CountryCard";

const Controls = styled.div`
  display: flex;

  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 50px;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ dark }) => (dark ? "#3a4a5a" : "#ccc")};
  background: ${({ dark }) => (dark ? "#2b3945" : "#fff")};
  color: ${({ dark }) => (dark ? "#eee" : "#111517")};
  outline: none;
  font-size: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &::placeholder {
    color: ${({ dark }) => (dark ? "#a0a8b0" : "#888")};
  }

  &:focus {
    border-color: ${({ dark }) => (dark ? "#5c9eff" : "#2684ff")};
  }
`;

const Select = styled.select`
  width: 169px;
  height: 50px;
  padding: 0rem;
  border-radius: 4px;
  border: 1px solid ${({ dark }) => (dark ? "#3a4a5a" : "#ccc")};
  background: ${({ dark }) => (dark ? "#2b3945" : "#fff")};
  color: ${({ dark }) => (dark ? "#eee" : "#111517")};
  outline: none;
  font-size: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${({ dark }) => (dark ? "#5c9eff" : "#2684ff")};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Container = styled.div`
  padding: 2rem;
  color: ${({ dark }) => (dark ? "#ffffff" : "#111517")};
  transition: color 0.3s;
`;
///////////bu n da n tagi style boladi va bundan kegin qolgan codlar boladi
export default function Home({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState(""); 
  useEffect(() => {
    if (data && data.countries) {
      setCountries(data.countries);
    }
  }, []);

  const filtered = countries
    .filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = region === "All" || country.region === region;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      if (sortBy === "alphabet") {
        return a.name.localeCompare(b.name); 
      }
      if (sortBy === "population") {
        return b.population - a.population; 
      }
      return 0; 
    });

  return (
    <Container dark={darkMode}>
      <Controls>
        <SearchBar
          type="text"
          placeholder="🔍 Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          dark={darkMode}
        />

        <Select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          dark={darkMode}
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>

        {}
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          dark={darkMode}
        >
          <option value="">Sort by</option>
          <option value="alphabet">Alphabet</option>
          <option value="population">Population</option>
        </Select>
      </Controls>

     <Grid>
        {filtered.length > 0 ? (
          filtered.map(country => (
            <CountryCard key={country.alpha3Code} country={country} darkMode={darkMode} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </Grid>

    </Container>
  );
}