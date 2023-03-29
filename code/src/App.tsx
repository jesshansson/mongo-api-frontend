import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState<any>(null);

  /*
  useEffect(() => {
    axios.get('https://project-mongo-api-fkbbu5sbga-lz.a.run.app')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setData(result);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      {data && (
        <div>
          <p>Data from API:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;