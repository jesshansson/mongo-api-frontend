import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components/macro";

interface Song {
  _id: string;
  valence: number;
  bpm: number;
  artistName: string;
  trackName: string;
}

export const Happy: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    axios
      .get("https://project-mongo-api-fkbbu5sbga-lz.a.run.app/songs/happy")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title>Happy songs!</Title>
      {songs.map((song) => (
        <Wrap>
        <div key={song._id}>
          <p><Bold>Trackname:</Bold> {song.trackName}</p>
          <p><Bold>Artist:</Bold> {song.artistName}</p>
          <p><Bold>Level of happiness (0-100):</Bold> {song.valence}</p>
          <p><Bold>Bpm:</Bold> {song.bpm}</p>
        </div>
        </Wrap>
      ))}
    </div>
  );
      }

const Wrap = styled.div`
margin: 20px 30px;
padding: 20px;
background-color: #FCF8E8;
border-radius: 10px;`

const Bold = styled.p`
font-weight: 500;
font-family: 'Delicious Handrawn', cursive;
font-size: 20px;
margin: 5px 0px;`

const Title = styled.h1`
text-align: center;
font-size: 50px;
font-family: 'Delicious Handrawn', cursive;
font-weight: 400`