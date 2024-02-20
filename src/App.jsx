import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/profile')
      .then((response) => {
        const { data } = response;

        setName(data.name);
      })
      .catch((response) => {
        const { code } = response;

        if (code === 'ERR_NETWORK') {
          setMessage('Could not fetch data');
        }
      });
  }, []);
  return (
    <h1 className="text-3xl font-bold underline">
      {name.trim().length <= 0 ? '...loading' : name}
    </h1>
  );
}

export default App;
