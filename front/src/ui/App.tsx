import { response } from "msw";
import React, { useState, useEffect } from "react";
import { Meme } from "../core/domain/Meme";
import fetchMemes from "../core/infrastructure/fetchMemes";
function App() {
  const [memesData, setMemesData] = useState<Meme[]>([]);

  useEffect(() => {
    fetchMemes().then((response) => {
      setMemesData(response.memes);
    });
  }, []);

  if (memesData.length === 0) {
    return <>Loading...</>;
  }

  return (
    <div>
      {memesData.map((result) => (
        <img src={result.images.small.url} alt={result.title} key={result.id} />
      ))}
    </div>
  );
}

export default App;