"use client"

import { useEffect, useState } from "react";

export function Countdown() {

  const [date, setDate] = useState<string>("00d 00h 00m 00s");
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {

    let countDownDate = new Date('Sep 20, 2024 23:59:99').getTime(); //DATA DA CONTAGEM REGRESSIVA

    setInterval(() => {

      let now = new Date().getTime(), //DATA ATUAL
          distance = countDownDate - now; //DISTÂNCIA ENTRE AS DATAS
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((distance % (1000 * 60)) / 1000)

      formatDate(days, hours, minutes, seconds);

      if(distance < 0){
        setExpired(true);
      }

    }, 1000);

  }, []);

  const formatDate = (days: number, hours: number, minutes: number, seconds: number) => {

    let dayF = days <= 9 ? `0${days}` : `${days}`,
        hoursF = hours <= 9 ? `0${hours}` : `${hours}`,
        minutesF = minutes <= 9 ? `0${minutes}` : `${minutes}`,
        secondsF = seconds <= 9 ? `0${seconds}` : `${seconds}`;

    setDate(`${dayF}d ${hoursF}h ${minutesF}m ${secondsF}s`);
  }

  return(
    <div className="py-2 md:h-16 w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-black">
      {!expired && (
        <span className="text-white text-base md:text-xl flex flex-col md:flex-row items-center md:gap-2">
          Connect Conference 2024 <br className="block md:hidden"/> 

          <span className="text-3xl font-bold">
            {date}
          </span>
        </span>
      )}
    </div>
  );
}