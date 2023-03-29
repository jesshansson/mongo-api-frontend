import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components/macro";
import { BASE_URL } from '../utils/utils';
import { Title } from './Globalstyles';

interface Song {
  _id: string;
  danceability: number;
  bpm: number;
  artistName: string;
  genre: string;
  trackName: string;
  energy: number;
  loudness: number;
  liveness: number;
  valence: number;
  acousticness: number;
  speechiness: number;
  popularity: number;
}

export const Songs: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/songs`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title>Songs in database</Title>
      {songs.map((song) => (
        <Wrap>
        <div key={song._id}>
          <p><Bold>Trackname:</Bold> {song.trackName}</p>
          <p><Bold>Artist:</Bold> {song.artistName}</p>
          <p><Bold>Level of danceability:</Bold> {song.danceability}</p>
          <p><Bold>Level of valence:</Bold> {song.valence}</p>
          <p><Bold>Genre:</Bold> {song.genre}</p>
          <p><Bold>Level of energy:</Bold> {song.energy}</p>
          <p><Bold>Loudness:</Bold> {song.loudness}</p>
          <p><Bold>Liveness:</Bold> {song.liveness}</p>
          <p><Bold>Acousticness:</Bold> {song.acousticness}</p>
          <p><Bold>Popularity:</Bold> {song.popularity}</p>
        </div>
        </Wrap>
      ))}
    </div>
  );
}

const Wrap = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #FCF8E8;
  border-radius: 10px;
`

const Bold = styled.p`
  font-weight: 500;
  font-family: 'Delicious Handrawn', cursive;
  font-size: 20px;
  margin: 5px 0px;
`
