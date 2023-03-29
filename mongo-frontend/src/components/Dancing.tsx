import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components/macro";

interface Song {
  _id: string;
  danceability: number;
  bpm: number;
  artistName: string;

  trackName: string;
}

export const Dancing: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    axios
      .get("https://project-mongo-api-fkbbu5sbga-lz.a.run.app/songs/dancing")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title>Dance-friendly songs!</Title>
      {songs.map((song) => (
        <Wrap>
        <div key={song._id}>
          <p><Bold>Trackname:</Bold> {song.trackName}</p>
          <p><Bold>Artist:</Bold> {song.artistName}</p>
          <p><Bold>Level of danceability:</Bold> {song.danceability}</p>
          <p><Bold>Bpm:</Bold> {song.bpm}</p>
        </div>
        </Wrap>
      ))}
    </div>
  );
      }

const Wrap = styled.div`
margin: 20px;
padding: 20px;
background-color: #FCF8E8 `

const Bold = styled.p`
font-weight: 500;
font-family: 'Delicious Handrawn', cursive;
font-size: 20px`

const Title = styled.h1`
text-align: center;
font-size: 50px;
font-family: 'Delicious Handrawn', cursive;
font-weight: 400`