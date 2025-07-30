"use client"

import { useEffect, useState } from "react";

export function Countdown() {

  const [date, setDate] = useState<string>("00d 00h 00m 00s");
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {

    let countDownDate = new Date('2025-09-27T23:59:59').getTime();

    const interval = setInterval(() => {

      let now = new Date().getTime(), //DATA ATUAL
          distance = countDownDate - now; //DISTÂNCIA ENTRE AS DATAS
  
      if (distance < 0) {
        setExpired(true);
        clearInterval(interval);
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000);

      formatDate(days, hours, minutes, seconds);

    }, 1000);

    return () => clearInterval(interval); // Limpar o intervalo ao desmontar o componente

  }, []);

  const formatDate = (days: number, hours: number, minutes: number, seconds: number) => {

    let dayF = days <= 9 ? `0${days}` : `${days}`,
        hoursF = hours <= 9 ? `0${hours}` : `${hours}`,
        minutesF = minutes <= 9 ? `0${minutes}` : `${minutes}`,
        secondsF = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    setDate(`${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
  }

  return(
    <div className="px-10 py-2 rounded-xl bg-orange-500">
      {!expired && (
        <span className="text-white text-base md:text-xl flex flex-col md:flex-row items-center md:gap-2">
          <span className="text-3xl font-bold">
            {date}
          </span>
        </span>
      )}
    </div>
  );
}
