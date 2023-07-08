import React, { useState, useEffect } from 'react';

const ContadorTemporizador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  const reducirContador = () => {
    setContador(prevContador => prevContador - 1);
  };

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={reducirContador}>Reducir</button>
    </div>
  );
};

export default ContadorTemporizador;

