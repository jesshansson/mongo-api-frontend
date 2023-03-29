import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';
import styled from "styled-components/macro";
import { Link } from 'react-router-dom';
import { Title } from './Globalstyles';

export const Main = () => {

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setData(result);
    }
                                          
    getData();
  }, []);

  return (
    <div>
      <Title>Hello and welcome to your Spotify database!</Title>
      {data && (
        <Wrap>
          <StyledLink to="/songs">⭐ See all songs in database 🎵</StyledLink>
          <StyledLink to="/happy">⭐ See happy songs  ✨</StyledLink>
          <StyledLink to="/dancing">⭐ See dance-friendly songs  💃</StyledLink>
          <StyledLink to="/happydancing">⭐ See happy songs great for dancing  ✌️</StyledLink>
        </Wrap>
      )}
    </div>
  );
}

const Wrap = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #FCF8E8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }
`