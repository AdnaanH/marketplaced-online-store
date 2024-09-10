"use client";
import { useEffect, useState, useCallback } from "react";
import { bitter } from "../fonts";

type CountdownTimerProps = {
  targetDate: string;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps): JSX.Element => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className={`${bitter.className} flex space-x-10 text-neutral font-bold`}>
      <div className="flex flex-col items-center">
        <span className="text-6xl font-semibold">{timeLeft.days}</span>
        <span className="text-xl uppercase font-bold text-primary drop-shadow">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-6xl font-semibold">{timeLeft.hours}</span>
        <span className="text-xl uppercase font-bold text-primary drop-shadow">Hrs</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-6xl font-semibold">{timeLeft.minutes}</span>
        <span className="text-xl uppercase font-bold text-primary drop-shadow">Min</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-6xl font-semibold">{timeLeft.seconds}</span>
        <span className="text-xl uppercase font-bold text-primary drop-shadow">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
