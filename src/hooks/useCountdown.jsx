import { useState, useEffect } from "react";

const useCountdown = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Retorna una función de limpieza que se ejecuta cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600); // Calcular las horas
    const minutes = Math.floor((seconds % 3600) / 60); // Calcular los minutos restantes
    const remainingSeconds = seconds % 60; // Calcular los segundos restantes

    // Formatear con ceros a la izquierda si es necesario
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return [timeLeft, formatTime(timeLeft)];
};

export default useCountdown;
