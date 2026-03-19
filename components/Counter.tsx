"use client";

import { useRef, useState, useEffect } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let value = 0;
    const step = end / 100;
    const interval = setInterval(() => {
      value += step;
      if (value >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(value));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
