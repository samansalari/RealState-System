"use client"

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

interface CountType {
  number: number;
}

const Count = ({ number }: CountType) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [hasCounted, setHasCounted] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prev = localStorage.getItem('hasCountedBefore');
      if (!prev) {
        setFocus(true);
        localStorage.setItem('hasCountedBefore', 'true');
        setHasCounted(true);
      } else {
        setHasCounted(true);
      }
    }
  }, []);

  return (
    <div>
      <CountUp start={0} end={focus ? number : 0} duration={2} decimals={number % 1 !== 0 ? 1 : 0}>
        {({ countUpRef }) => (
          <span ref={countUpRef} />
        )}
      </CountUp>
    </div>
  );
};

export default Count;
