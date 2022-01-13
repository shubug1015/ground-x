import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    y: 0,
  });
  const onScroll = () => {
    setScroll({
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return scroll;
};
